"""

Usage:
  dashboard.py [--query] [--deploy] [--localhost]
  dashboard.py (-h | --help)

Options:
  -h --help                 Show this screen.
  --query                   Query data from pf
  --deploy                  Automatically deploy to Github every half an hour
  --localhost               Automatically deploy locally every half an hour
"""

import os
import csv
import sys
import json
import time
import datetime
import subprocess
from docopt import docopt
from shutil import copyfile

SET_CONFIG = './set_config.json'
SUITE_CONFIG = './suite_config.json'
HASAL_CSV = './hasal_data.csv'
GITHUB_CONFIG = 'github.key'

TEMPLATE_DIR = 'template'
JS_DIR = 'js'
CSS_DIR = 'css'
BUILD_DIR = 'docs'
IMG_DIR = 'img'

SET_TEMP_HTML = 'set_template.html'
SET_DATA_TEMP_JS = 'case_data_template.js'
GAUGE_TEMP_JS = 'overall_progress_template.js'
THEME_TEMP_JS = 'theme.js'
SET_TEMP_CSS = 'set_page.css'

BROWSER_SET = ['firefox', 'chrome']
MACHINE_SET = ['windows8-64', 'windows10-64']

DEPLOY_TIME_INTERVAL = 5  # mins

task_schedule = {
    "amazon_ail_hover_related_product_thumbnail Median": ["0500", "1700"],
    "amazon_ail_select_search_suggestion Median": ["0530", "1730"],
    "amazon_ail_type_in_search_field Median": ["0600", "1800"],
    "facebook_ail_click_close_chat_tab Median": ["0900", "2100"],
    "facebook_ail_click_open_chat_tab Median": ["0830", "2030"],
    "facebook_ail_click_open_chat_tab_emoji Median": ["0800", "2000"],
    "facebook_ail_click_photo_viewer_right_arrow Median": ["0930", "2130"],
    "facebook_ail_scroll_home_1_txt Median": ["1000", "2200"],
    "facebook_ail_type_comment_1_txt Median": ["1030", "2230"],
    "facebook_ail_type_composerbox_1_txt Median": ["1100", "2300"],
    "facebook_ail_type_message_1_txt Median": ["1130", "2330"],
    "gdoc_ail_pagedown_10_text Median": ["0430", "1630"],
    "gmail_ail_compose_new_mail_via_keyboard Median": ["0330", "1530"],
    "gmail_ail_open_mail Median": ["0200", "1400"],
    "gmail_ail_reply_mail Median": ["0300", "1500"],
    "gmail_ail_type_in_reply_field Median": ["0400", "1600"],
    "gsearch_ail_select_image_cat Median": ["0630", "1830"],
    "gsearch_ail_select_search_suggestion Median": ["0700", "1900"],
    "gsearch_ail_type_searchbox Median": ["0730", "1930"],
    "youtube_ail_select_search_suggestion Median": ["0000", "1200"],
    "youtube_ail_type_in_search_field Median": ["0100", "1300"]
}

task_dict = {
    "amazon_ail_hover_related_product_thumbnail Median": "hover_related_product_thumbnail",
    "amazon_ail_select_search_suggestion Median": "select_search_suggestion",
    "amazon_ail_type_in_search_field Median": "type_in_search_field",
    "facebook_ail_click_close_chat_tab Median": "click_close_chat_tab",
    "facebook_ail_click_open_chat_tab Median": "click_open_chat_tab",
    "facebook_ail_click_open_chat_tab_emoji Median": "click_open_chat_tab_emoji",
    "facebook_ail_click_photo_viewer_right_arrow Median": "click_photo_viewer_right_arrow",
    "facebook_ail_scroll_home_1_txt Median": "scroll_home_1_txt",
    "facebook_ail_type_comment_1_txt Median": "type_comment_1_txt",
    "facebook_ail_type_composerbox_1_txt Median": "type_composerbox_1_txt",
    "facebook_ail_type_message_1_txt Median": "type_message_1_txt",
    "gdoc_ail_pagedown_10_text Median": "pagedown_10_text",
    "gmail_ail_compose_new_mail_via_keyboard Median": "compose_new_mail_via_keyboard",
    "gmail_ail_open_mail Median": "open_mail",
    "gmail_ail_reply_mail Median": "reply_mail",
    "gmail_ail_type_in_reply_field Median": "type_in_reply_field",
    "gsearch_ail_select_image_cat Median": "select_image_cat",
    "gsearch_ail_select_search_suggestion Median": "select_search_suggestion",
    "gsearch_ail_type_searchbox Median": "type_searchbox",
    "youtube_ail_select_search_suggestion Median": "select_search_suggestion",
    "youtube_ail_type_in_search_field Median": "type_in_search_field"
}

class Dashboard(object):
    def __init__(self):
        self.hasal_ds = dict()
        self.count_ds = dict()

        self.set_page_dict = dict()
        self.suites = list()
        self.browsers = list()
        self.machines = list()
        self.ref_date = ''

        self.github_username = ''
        self.github_token = ''

        with open(SET_CONFIG) as data_file:
            self.set_contain = json.load(data_file)

        with open(SUITE_CONFIG) as data_file:
            self.suite_contain = json.load(data_file)

        if not os.path.exists(BUILD_DIR):
            os.makedirs(BUILD_DIR)
        if not os.path.exists(os.path.join(BUILD_DIR, JS_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, JS_DIR))
        if not os.path.exists(os.path.join(BUILD_DIR, CSS_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, CSS_DIR))
        if not os.path.exists(os.path.join(BUILD_DIR, IMG_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, IMG_DIR))

    def load_github_accout(self):
        with open(GITHUB_CONFIG, 'r') as f:
            self.github_username = f.readline().strip()
            self.github_token = f.readline().strip()

    def commit_push_to_github(self):
        """ commit and push to github """
        print "Start commit and push to github ..."
        cmd = 'git add ./docs/*'
        call_subprocess(cmd)

        cmd = 'git commit -m \'auto deploy on {}\''.format(datetime.datetime.now().strftime('%H:%M:%S'))
        call_subprocess(cmd)

        _u = self.github_username
        _k = self.github_token
        cmd = 'git push https://{}:{}@github.com/MarkYan/Hasal_dashboard.git master'.format(_u, _k)
        call_subprocess(cmd)
        print "Git push success"

    def reset_ds(self):
        self.hasal_ds.clear()
        self.count_ds.clear()

    def get_ref_date(self):
        ref_date = datetime.datetime(2015, 1, 13, 12, 0, 0)
        for _s in self.count_ds.keys():
            for _m in MACHINE_SET:
                for _b in self.count_ds[_s][_m].keys():
                    latest_date = sorted(self.count_ds[_s][_m][_b].keys(), reverse=True)[0]
                    latest_date = datetime.datetime.strptime(latest_date, "%Y-%m-%d %H-%M-%S-000000")
                    if (latest_date - ref_date).total_seconds() > 0:
                        ref_date = latest_date

        self.ref_date = ref_date.strftime("%Y-%m-%d %H-%M-%S-000000")

    def analyze_csv(self):
        """ read csv and parse data """
        for m in MACHINE_SET:
            self.set_page_dict[m] = {}

        with open(HASAL_CSV) as f:
            r = csv.DictReader(f)
            for row in r:
                _s = '{} {}'.format(row['suite_name'], row['_'])
                _m = row['machine_platform']
                _b = row['browser_type']
                _t = '{} {}'.format(row['date'], row['time'])
                _v = row['value']

                if row['suite_name'] == 'suite_name':
                    continue

                if _s not in self.hasal_ds.keys():
                    self.hasal_ds[_s] = {}
                    self.count_ds[_s] = {}
                if _m not in self.hasal_ds[_s].keys():
                    self.hasal_ds[_s][_m] = {}
                    self.count_ds[_s][_m] = {}
                if _b not in self.hasal_ds[_s][_m].keys():
                    self.hasal_ds[_s][_m][_b] = {}
                    self.count_ds[_s][_m][_b] = {}

                if _t not in self.hasal_ds[_s][_m][_b].keys():
                    self.hasal_ds[_s][_m][_b][_t] = []
                    self.count_ds[_s][_m][_b][_t] = 1
                else:
                    self.count_ds[_s][_m][_b][_t] += 1

                self.hasal_ds[_s][_m][_b][_t].append(_v)

    def copy_img(self):
        copyfile(os.path.join(TEMPLATE_DIR, IMG_DIR, 'd2_bkg.jpg'), os.path.join(BUILD_DIR, IMG_DIR, 'd2_bkg.jpg'))

    def create_highchart_theme(self):
        copyfile(os.path.join(TEMPLATE_DIR, JS_DIR, THEME_TEMP_JS), os.path.join(BUILD_DIR, JS_DIR, THEME_TEMP_JS))

    def create_set_css(self):
        copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, SET_TEMP_CSS), os.path.join(BUILD_DIR, CSS_DIR, SET_TEMP_CSS))

    def write_data_for_case(self, outfile_js, case_name, machine, browser):
        outfile_js.write('\t\tname: \'{}\',\n'.format(browser))
        outfile_js.write('\t\tdata: [\n')
        for _time in sorted(self.hasal_ds[case_name][machine][browser].keys()):
            for value in sorted(self.hasal_ds[case_name][machine][browser][_time]):
                _t = datetime.datetime.strptime(_time, "%Y-%m-%d %H-%M-%S-000000") + datetime.timedelta(hours=8)
                _y = _t.year
                _m = _t.month - 1
                _d = _t.day
                outfile_js.write('\t\t\t[Date.UTC({}, {}, {}), {}],\n'.format(_y, _m, _d, value))
        outfile_js.write('\t\t]')

    def create_case_data_js(self, machine, set_name):
        for counter, case_name in enumerate(self.set_contain[set_name]):
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

    def get_td_color(self, f_num, total):
        color = {'red': '#bd1550', 'green': '#75D701', 'yellow': '#E8A317'}
        if f_num > total or f_num <= 0:
            ret = color['red']
        elif f_num == total:
            ret = color['green']
        else:
            ret = color['yellow']
        return ret

    def print_footer_td_output(self, _print, f_num, total, outfile):
        line = '<td style="color: {}">{}</td>'.format(self.get_td_color(f_num, total), _print)
        outfile.write(line)

    def render_footer_table(self, machine, outfile):
        _m = machine
        _rt = self.ref_date
        shorten_browser = {'firefox': 'F', 'chrome': 'C'}
        for _sk in sorted(self.suite_contain.keys()):
            total_case = len(self.suite_contain[_sk])
            for _b in BROWSER_SET:
                _print = ''
                skb_count = 0
                _print += shorten_browser[_b]
                for _s in sorted(self.suite_contain[_sk]):
                    if _rt in self.count_ds[_s][_m][_b].keys():
                        _print += str(self.count_ds[_s][_m][_b][_rt])
                        if self.count_ds[_s][_m][_b][_rt] >= 6:
                            skb_count += 1
                    else:
                        _print += '-'
                self.print_footer_td_output(_print, skb_count, total_case, outfile)

    def create_set_html(self, machine, set_name):
        set_html_file = '{}_{}_set.html'.format(set_name, machine)
        set_html_dir = os.path.join(BUILD_DIR, set_html_file)
        self.set_page_dict[machine][set_name] = set_html_file
        with open(set_html_dir, 'w') as outfile, open(os.path.join(TEMPLATE_DIR, SET_TEMP_HTML), 'r') as infile:
            for row in infile:
                if '{{TITLE_NAME}}' in row:
                    outfile.write(row.replace('{{TITLE_NAME}}', 'Hasal_{}_{}'.format(set_name, machine)))

                elif '<!--TIME CHART JS CODE ADD HERE-->' in row:
                    for counter, case_name in enumerate(self.set_contain[set_name]):
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_{}.js"></script>\n'.format(case_name[:-7],
                                                                                                     machine[:-3]))
                        outfile.write('\t<script language="JavaScript">\n')
                        outfile.write(
                            "\t\t$(function () {{Highcharts.chart('container{}', {}_{});}});\n".format(counter + 1,
                                                                                                       case_name[:-7],
                                                                                                       machine[:-3]))
                        outfile.write('\t</script>\n')

                elif '<!--GAUGE JS CODE ADD HERE-->' in row:
                    for m in MACHINE_SET:
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_gauge.js"></script>\n'.format(m[:-3]))
                        outfile.write(
                            '\t<script language="JavaScript">$(function() {{$(\'#container-{}\').highcharts({}_gauge_data);}});</script>\n'.format(
                                m[:-3], m[:-3]))

                elif '{{REFRESH_TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{REFRESH_TIME}}', '{}'.format(now)))

                elif '{{LATEST_DATA_TIME}}' in row:
                    ref_date = self.ref_date
                    latest_date = datetime.datetime.strptime(ref_date, "%Y-%m-%d %H-%M-%S-000000").strftime(
                        "%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(latest_date))

                elif '<!--WIN8 TD GO HERE-->' in row:
                    self.render_footer_table('windows8-64', outfile)

                elif '<!--WIN10 TD GO HERE-->' in row:
                    self.render_footer_table('windows10-64', outfile)

                else:
                    outfile.write(row)

    def get_overall_working_progress(self, machine):
        total_jobs = 0
        finished_jobs = 0
        for _s in self.count_ds.keys():
            for _b in self.count_ds[_s][machine].keys():
                total_jobs += 6

                # check time
                # latest_date = sorted(self.count_ds[_s][machine][_b].keys(),reverse=True)[0]
                # finished_jobs += self.count_ds[_s][machine][_b][latest_date]
                r_date = self.ref_date
                if r_date not in self.count_ds[_s][machine][_b].keys():
                    # TODO:must alert
                    pass
                else:
                    finished_jobs += self.count_ds[_s][machine][_b][r_date]
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

    def create_pages(self):
        self.create_highchart_theme()
        self.create_set_css()

        # create web_page with machine
        for m in MACHINE_SET:
            for set_name in self.set_contain.keys():
                self.create_set_html(m, set_name)
                self.create_case_data_js(m, set_name)
                self.create_gauge_js(m)

    def create_index(self):
        """ create the index html for dashboard """
        index_out = os.path.join(BUILD_DIR, 'index.html')
        index_template = './template/index.html'
        with open(index_out, 'w') as outfile, open(index_template, 'r') as infile:
            for row in infile:
                if '<!--windows8-64 here-->' in row:
                    outfile.write('\t<h1>windows8</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows8-64'
                    for set_name in sorted(self.set_page_dict[m].keys()):
                        outfile.write(
                            '\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(self.set_page_dict[m][set_name], set_name,
                                                                                     m))
                    outfile.write('\t</table>\n')
                elif '<!--windows10-64 here-->' in row:
                    outfile.write('\t<h1>windows10</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows10-64'
                    for set_name in sorted(self.set_page_dict[m].keys()):
                        outfile.write(
                            '\t\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(self.set_page_dict[m][set_name], set_name,
                                                                                       m))
                    outfile.write('\t</table>\n')
                else:
                    outfile.write(row)

    def get_suite_color(self, count):
        color = {'red': '#ff0000', 'green': '#00ff00', 'yellow': '#ffff00'}
        if count >= 6:
            ret = color['green']
        elif count <= 0:
            ret = color['red']
        else:
            ret = color['yellow']
        return ret

    def is_under_execution(self, suite):
        now = datetime.datetime.now()
        now_H = now.hour
        now_M = now.minute

        ret = False
        for t in task_schedule[suite]:
            if int(now_H) == int(t[:2]) and ret == False:
                if t[2:] == '00':
                    if int(now_M) < 30 and int(now_M) >= 0:
                        ret = True
                    else:
                        ret = False
                else:
                    if int(now_M) >= 30 and int(now_M) < 60:
                        ret = True
                    else:
                        ret = False
        return ret

    def write_suite_all_row(self, outfile):
        _rt = self.ref_date
        sk_set = ["youtube", "gmail", "gdoc", "amazon", "gsearch", "facebook"]

        for _sk in sk_set:
            print_sk = True
            print_hour = True
            _rows = len(self.suite_contain[_sk])
            s_set = sorted(self.suite_contain[_sk], key=lambda x: task_schedule[x][0])
            for i in range(len(s_set)):
                outfile.write('<tr>')
                if print_sk:
                    outfile.write('<td rowspan="{}">{}</td>'.format(_rows, _sk))
                    print_sk = False

                # print hour and check if match next
                if print_hour:
                    if i < len(s_set)-1 and task_schedule[s_set[i]][0][:2] == task_schedule[s_set[i+1]][0][:2]:
                        outfile.write('<td rowspan="2">{},{}</td>'.format(task_schedule[s_set[i]][0][:2],task_schedule[s_set[i]][1][:2]))
                        print_hour = False
                    else:
                        outfile.write('<td>{},{}</td>'.format(task_schedule[s_set[i]][0][:2],task_schedule[s_set[i]][1][:2]))
                        print_hour = True
                else:
                    print_hour = True

                # must print minute
                outfile.write('<td>{}</td>'.format(task_schedule[s_set[i]][0][2:]))

                # print suite name also check if execute
                if self.is_under_execution(s_set[i]):
                    outfile.write('<td style="text-align: left; color: #00ff00">{}</td>'.format(task_dict[s_set[i]]))
                else:
                    outfile.write('<td style="text-align: left">{}</td>'.format(task_dict[s_set[i]]))

                # print win7 and win10
                for _m in MACHINE_SET:
                    # print firefox and chrome
                    for _b in BROWSER_SET:
                        if _rt in self.count_ds[s_set[i]][_m][_b].keys():
                            _val = self.count_ds[s_set[i]][_m][_b][_rt]
                            outfile.write('<td style="color: {}">{}</td>'.format(self.get_suite_color(_val), _val))
                        else:
                            outfile.write('<td style="color : {}">{}</td>'.format(self.get_suite_color(0), 0))
                outfile.write('</tr>')

    def create_suite_progress_all(self):
        copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, 'daily_progress.css'), os.path.join(BUILD_DIR, CSS_DIR, 'daily_progress.css'))

        suites_out = os.path.join(BUILD_DIR, 'daily_progress_all.html')
        suites_template = './template/daily_progress_all.html'
        with open(suites_out, 'w') as outfile, open(suites_template, 'r') as infile:
            for row in infile:
                if '<!--rows go here-->' in row:
                    self.write_suite_all_row(outfile)
                elif '{{REFRESH_TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{REFRESH_TIME}}', '{}'.format(now)))

                elif '{{LATEST_DATA_TIME}}' in row:
                    ref_date = self.ref_date
                    latest_date = datetime.datetime.strptime(ref_date, "%Y-%m-%d %H-%M-%S-000000").strftime(
                        "%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(latest_date))
                else:
                    outfile.write(row)

    def query_data(self):
        """ query data and gen a csv file """
        tmp_file = 'tmp.txt'

        print "Start query data from pf ..."
        cmd = 'python query_data_from_perfherder.py --interval=2419200 > {}'.format(tmp_file)
        call_subprocess(cmd)

        with open(tmp_file) as fin, open(HASAL_CSV, 'w') as fout:
            o = csv.writer(fout)
            o.writerow(['suite_name', '_', 'browser_type', 'machine_platform', 'date', 'time', 'value'])
            for line in fin:
                o.writerow(line.split())
        os.remove(tmp_file)
        print "Done query data!"

    def run(self, query_data):
        """ generate website """
        if query_data or not os.path.isfile(HASAL_CSV):
            self.query_data()
        self.reset_ds()
        self.analyze_csv()
        self.copy_img()
        self.get_ref_date()
        self.create_pages()
        self.create_index()
        self.create_suite_progress_all()

    def deploy(self):
        """ gen website and push to github automatically """
        self.load_github_accout()
        while True:
            print "Start deploy process ..."
            self.run(True)
            self.commit_push_to_github()
            print "Time to sleep ... Bye"
            time.sleep(60 * DEPLOY_TIME_INTERVAL)

    def local_deploy(self):
        while True:
            print "Start deploy process ..."
            self.run(True)
            print "Time to sleep ... Bye"
            time.sleep(60 * DEPLOY_TIME_INTERVAL)


def call_subprocess(cmd):
    ret_code = subprocess.call(cmd, shell=True)
    if ret_code != 0:
        sys.exit(ret_code)


def main():
    arguments = docopt(__doc__)
    my_dashboard = Dashboard()
    if arguments['--deploy']:
        my_dashboard.deploy()
    elif arguments['--localhost']:
        my_dashboard.local_deploy()
    else:
        my_dashboard.run(arguments['--query'])


if __name__ == '__main__':
    main()
