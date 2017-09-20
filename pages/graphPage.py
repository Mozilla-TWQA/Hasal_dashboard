import os
import datetime
from lib.common.nameConfig import *
from lib.common.sutieConfig import *
from shutil import copyfile
from lib.common.logConfig import get_logger
from yattag import Doc


def create_highchart_theme():
    copyfile(os.path.join(TEMPLATE_DIR, JS_DIR, THEME_TEMP_JS), os.path.join(BUILD_DIR, JS_DIR, THEME_TEMP_JS))


def create_set_css():
    copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, SET_TEMP_CSS), os.path.join(BUILD_DIR, CSS_DIR, SET_TEMP_CSS))


class GraphPage(object):
    DEFAULT_COUNT = 6

    def __init__(self, dashboard, enable_advance):
        self.dashboard = dashboard
        self.set_page_dict = dict()

        for m in MACHINE_SET:
            self.set_page_dict[m] = {}

        # init logger
        self.logger = get_logger(__file__, enable_advance)

    def write_data_for_case(self, outfile_js, case_name, machine, browser):
        outfile_js.write('\t\tname: \'{}\',\n'.format(browser))
        outfile_js.write('\t\tdata: [\n')
        for _time in sorted(self.dashboard.value_ds[case_name][machine][browser].keys()):
            for value in sorted(self.dashboard.value_ds[case_name][machine][browser][_time]):
                _t = datetime.datetime.strptime(_time, "%Y-%m-%d %H-%M-%S-000000")
                _y = _t.year
                _m = _t.month - 1
                _d = _t.day
                outfile_js.write('\t\t\t[Date.UTC({}, {}, {}), {}],\n'.format(_y, _m, _d, value))
        outfile_js.write('\t\t]')

    def create_case_data_js(self, machine, set_name):
        for counter, case_name in enumerate(set_contain[set_name]):
            create_js_path = os.path.join(BUILD_DIR, JS_DIR, '{}_{}.js'.format(case_name[:-7], machine[:-3]))
            with open(create_js_path, 'w') as outfile_js, open(os.path.join(TEMPLATE_DIR, JS_DIR, SET_DATA_TEMP_JS),
                                                               'r') as infile_js:
                for row_js in infile_js:
                    if '{{CHART_TITLE_SHOWN}}' in row_js:
                        create_title = '{}_{}'.format(case_name[:-7], machine[:-3])
                        outfile_js.write(row_js.replace('{{CHART_TITLE_SHOWN}}', create_title))
                    elif 'CASE_VAR_NAME' in row_js:
                        create_case_name = '{}_{}'.format(case_name[:-7], machine[:-3])
                        outfile_js.write(row_js.replace('CASE_VAR_NAME', create_case_name))
                    elif 'CASE_FIREFOX_DATA' in row_js:
                        self.write_data_for_case(outfile_js, case_name, machine, 'firefox')
                    elif 'CASE_CHROME_DATA' in row_js:
                        self.write_data_for_case(outfile_js, case_name, machine, 'chrome')
                    else:
                        outfile_js.write(row_js)

    def get_min_count_of_suite(self, suite_name, platform, browser, ref_date):
        ret_value = self.DEFAULT_COUNT
        for case_name in suite_contain[suite_name]:
            current_value = self.dashboard.count_ds.get(case_name, {}).get(platform, {}).get(browser, {}).get(ref_date, 0)
            ret_value = min(ret_value, current_value)
        return ret_value

    def render_daily_progress_by_suites(self, outfile):
        _obj_key = 'key'
        _obj_name = 'name'

        _status_ok = 'ok'
        _status_pending = 'pending'
        _status_error = 'error'
        _status_obj_text = 'text'
        _status_obj_color = 'color'

        status = {
            'ok': {
                'text': 'OK',
                'color': '#75D701'
            },
            'pending': {
                'text': 'Pending',
                'color': '#E8A317'
            },
            'error': {
                'text': 'Error',
                'color': '#BD1550'
            }
        }

        platforms = [{'key': 'windows8-64',
                      'name': 'Win7'},
                     {'key': 'windows10-64',
                      'name': 'Win10'}]
        browsers = [{'key': 'firefox',
                     'name': 'Firefox'},
                    {'key': 'chrome',
                     'name': 'Chrome'}]
        suites = [{'key': 'amazon',
                   'name': 'Amazon'},
                  {'key': 'facebook',
                   'name': 'Facebook'},
                  {'key': 'gdoc',
                   'name': 'GDoc'},
                  {'key': 'gmail',
                   'name': 'GMail'},
                  {'key': 'gsearch',
                   'name': 'GSearch'},
                  {'key': 'youtube',
                   'name': 'Youtube'}]

        _ref_date = self.dashboard.ref_date

        doc, tag, text = Doc().tagtext()

        with tag('table', klass='chart'):
            # generate 1st line
            with tag('tr'):
                with tag('th', ROWSPAN=2):
                    text('-')
                for suite_obj in sorted(suites):
                    suite_name = suite_obj.get(_obj_name)
                    with tag('th', COLSPAN=2):
                        text(suite_name)
            # generate 2nd line
            with tag('tr'):
                for _ in suites:
                    # generate browser columns for each suite
                    for browser_obj in browsers:
                        browser_name = browser_obj.get(_obj_name)
                        with tag('td'):
                            text(browser_name)

            # generate for each platform
                for platform_obj in platforms:
                    platform_key = platform_obj.get(_obj_key)
                    platform_name = platform_obj.get(_obj_name)
                    with tag('tr'):
                        with tag('td'):
                            text(platform_name)
                        for suite_obj in sorted(suites):
                            suite_key = suite_obj.get(_obj_key)
                            for browser_obj in browsers:
                                browser_key = browser_obj.get(_obj_key)
                                min_count = self.get_min_count_of_suite(suite_key, platform_key, browser_key, _ref_date)
                                if min_count >= self.DEFAULT_COUNT:
                                    status_obj = status.get(_status_ok)
                                elif min_count <= 0:
                                    status_obj = status.get(_status_error)
                                else:
                                    status_obj = status.get(_status_pending)
                                status_text = status_obj.get(_status_obj_text)
                                status_color = status_obj.get(_status_obj_color)
                                with tag('td', style='color: {}'.format(status_color)):
                                    text(status_text)
        outfile.write(doc.getvalue())

    def create_set_html(self, machine, set_name):
        set_html_file = '{}_{}_set.html'.format(set_name, machine)
        set_html_dir = os.path.join(BUILD_DIR, set_html_file)
        self.set_page_dict[machine][set_name] = set_html_file
        with open(set_html_dir, 'w') as outfile, open(os.path.join(TEMPLATE_DIR, SET_TEMP_HTML), 'r') as infile:
            for row in infile:
                if '{{TITLE_NAME}}' in row:
                    outfile.write(row.replace('{{TITLE_NAME}}', 'Hasal_{}_{}'.format(set_name, machine)))

                elif '<!--TIME CHART JS CODE ADD HERE-->' in row:
                    for counter, case_name in enumerate(set_contain[set_name]):
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_{}.js"></script>\n'.format(
                                case_name[:-7], machine[:-3]))
                        outfile.write('\t<script language="JavaScript">\n')
                        outfile.write(
                            "\t\t$(function () {{Highcharts.chart('container{}', {}_{});}});\n".format(
                                counter + 1, case_name[:-7], machine[:-3]))
                        outfile.write('\t</script>\n')

                elif '<!--GAUGE JS CODE ADD HERE-->' in row:
                    for m in MACHINE_SET:
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_gauge.js"></script>\n'.format(m[:-3]))
                        outfile.write(
                            '\t<script language="JavaScript">$(function() {{$(\'#container-{}\').highcharts(\
                            {}_gauge_data);}});</script>\n'.format(m[:-3], m[:-3]))

                elif '{{REFRESH_TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{REFRESH_TIME}}', '{}'.format(now)))

                elif '{{LATEST_DATA_TIME}}' in row:
                    ref_date = self.dashboard.ref_date
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(ref_date))

                elif '<!-- HASAL DAILY PROGRESS BY SUITES -->' in row:
                    self.render_daily_progress_by_suites(outfile)

                else:
                    outfile.write(row)

    def get_overall_working_progress(self, machine):
        total_jobs = 0
        finished_jobs = 0
        for _s in self.dashboard.count_ds.keys():
            for _b in self.dashboard.count_ds[_s][machine].keys():
                total_jobs += 6

                # check time
                r_date = self.dashboard.ref_date
                if r_date not in self.dashboard.count_ds[_s][machine][_b].keys():
                    # reference date is not in count_ds
                    pass
                else:
                    if self.dashboard.count_ds[_s][machine][_b][r_date] > 6:
                        finished_jobs += 6
                    else:
                        finished_jobs += self.dashboard.count_ds[_s][machine][_b][r_date]
        return finished_jobs * 100 / total_jobs

    def create_gauge_js(self, machine):
        percentage = self.get_overall_working_progress(machine)
        create_js = os.path.join(BUILD_DIR, JS_DIR, '{}_gauge.js'.format(machine[:-3]))
        with open(create_js, 'w') as outfile, open(os.path.join(TEMPLATE_DIR, JS_DIR, GAUGE_TEMP_JS), 'r') as infile:
            for row in infile:
                if 'GAUGE_MACHINE_VAR' in row:
                    outfile.write(row.replace('GAUGE_MACHINE_VAR', '{}_gauge_data'.format(machine[:-3])))
                elif '{{MACHINE}}' in row:
                    outfile.write(row.replace('{{MACHINE}}', machine[:-3]))
                elif '{{PERCENTAGE}}' in row:
                    outfile.write(row.replace('\'{{PERCENTAGE}}\'', '[{}]'.format(percentage)))
                else:
                    outfile.write(row)

    def create_page(self):
        create_highchart_theme()
        create_set_css()

        # create web_page with machine
        for m in MACHINE_SET:
            for set_name in set_contain.keys():
                self.create_set_html(m, set_name)
                self.create_case_data_js(m, set_name)
                self.create_gauge_js(m)
