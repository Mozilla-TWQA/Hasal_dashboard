"""

Usage:
  dashboard.py [--query] [--deploy]
  dashboard.py (-h | --help)

Options:
  -h --help                 Show this screen.
  --query                   Query data from pf
  --deploy                  Automatically deploy to Github every half an hour
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

TEMPLATE_DIR = 'template'
JS_DIR = 'js'
CSS_DIR = 'css'
BUILD_DIR = 'docs'

SET_TEMP_HTML = 'set_template.html'
SET_DATA_TEMP_JS = 'case_data_template.js'
GAUGE_TEMP_JS = 'overall_progress_template.js'
THEME_TEMP_JS = 'theme.js'
SET_TEMP_CSS = 'set_page.css'

BROWSER_SET = ['firefox', 'chrome']
MACHINE_SET = ['windows8-64', 'windows10-64']

DEPLOY_TIME_INTERVAL = 30  # mins


class Dashboard(object):
    def __init__(self):
        self.hasal_ds = dict()
        self.count_ds = dict()
        self.suite_ds = dict()
        self.set_page_dict = dict()
        self.suites = list()
        self.browsers = list()
        self.machines = list()
        self.ref_date = ''

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

    def analyze_today_data(self):
        _t = self.ref_date
        for _m in MACHINE_SET:
            self.suite_ds[_m] = {}
            for _sk in self.suite_contain.keys():
                self.suite_ds[_m][_sk] = {}
                for _s in self.suite_contain[_sk]:
                    self.suite_ds[_m][_sk][_s] = {}
                    for _b in BROWSER_SET:
                        if _t not in self.count_ds[_s][_m][_b].keys():
                            self.suite_ds[_m][_sk][_s][_b] = 0
                        else:
                            self.suite_ds[_m][_sk][_s][_b] = 1

    def call_subprocess(self, cmd):
        ret_code = subprocess.call(cmd, shell=True)
        if ret_code != 0:
            sys.exit(ret_code)

    def commit_push_to_github(self):
        """ commit and push to github """
        print "Start commit and push to github ..."
        cmd = 'git add ./docs/*'
        self.call_subprocess(cmd)

        cmd = 'git commit -m \'auto deploy on {}\''.format(datetime.datetime.now().strftime('%H:%M:%S'))
        self.call_subprocess(cmd)

        cmd = 'git push origin master'
        self.call_subprocess(cmd)
        print "Git push success"

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

    def create_highchart_theme(self):
        copyfile(os.path.join(TEMPLATE_DIR, JS_DIR, THEME_TEMP_JS), os.path.join(BUILD_DIR, JS_DIR, THEME_TEMP_JS))

    def create_set_css(self):
        copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, SET_TEMP_CSS), os.path.join(BUILD_DIR, CSS_DIR, SET_TEMP_CSS))

    def write_data_for_case(self, outfile_js, case_name, machine, browser):
        outfile_js.write('\t\tname: \'{}\',\n'.format(browser))
        outfile_js.write('\t\tdata: [\n')
        for time in sorted(self.hasal_ds[case_name][machine][browser].keys()):
            for value in sorted(self.hasal_ds[case_name][machine][browser][time]):
                _t = datetime.datetime.strptime(time, "%Y-%m-%d %H-%M-%S-000000") + datetime.timedelta(hours=8)
                _y = _t.year
                _m = _t.month
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

    # def get_color(self, num):
    #     color = {'red': '#bd1550', 'green': '#75D701', 'yellow': '#E8A317'}
    #     if num >= 6:
    #         ret = color['green']
    #     elif num >= 1:
    #         ret = color['yellow']
    #     else:
    #         ret = color['red']
    #     return ret

    # def get_each_suites_count(self, machine, suite, browser):
    #     if self.ref_date not in self.count_ds[suite][machine][browser].keys():
    #         ret = 0
    #     else:
    #         ret = self.count_ds[suite][machine][browser][self.ref_date]
    #     return ret

    # def render_table(self, machine, set_name, outfile):
    #     for case in self.set_contain[set_name]:
    #         _cm = '{}_{}'.format(case, machine[:-3])
    #         _f = self.get_each_suites_count(machine, case, 'firefox')
    #         _c = self.get_each_suites_count(machine, case, 'chrome')
    #         outfile.write('\t\t\t\t\t<tr>\n')
    #         outfile.write('\t\t\t\t\t\t<td>{}</td>\n'.format(_cm))
    #         outfile.write('\t\t\t\t\t\t<td style="color: {}">{}/6</td>\n'.format(self.get_color(_f), _f))
    #         outfile.write('\t\t\t\t\t\t<td style="color: {}">{}/6</td>\n'.format(self.get_color(_c), _c))
    #         outfile.write('\t\t\t\t\t</tr>\n')

    def get_td_color(self, f_num, total):
        color = {'red': '#bd1550', 'green': '#75D701', 'yellow': '#E8A317'}
        if f_num > total or f_num <= 0:
            ret = color['red']
        elif f_num == total:
            ret = color['green']
        else:
            ret = color['yellow']
        return ret


    def print_footer_td_output(self, C, f_num, total, outfile):
        line = '<td style="color: {}">{}{}</td>'.format(self.get_td_color(f_num, total),C,f_num)
        outfile.write(line)

    def render_footer_table(self, machine, outfile):
        _m = machine
        BROWSER_OUT = {'firefox':'F','chrome':'C'}
        for _sk in sorted(self.suite_contain.keys()):
            total_case = len(self.suite_contain[_sk])
            for _b in BROWSER_SET:
                skb_count = 0
                for _s in self.suite_contain[_sk]:
                    if self.suite_ds[_m][_sk][_s][_b] == 1:
                        skb_count += 1
                self.print_footer_td_output(BROWSER_OUT[_b], skb_count, total_case, outfile)

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
                    time = self.ref_date
                    latest_date = datetime.datetime.strptime(time, "%Y-%m-%d %H-%M-%S-000000").strftime(
                        "%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(latest_date))

                elif '<!--WIN8 TD GO HERE-->' in row:
                    self.render_footer_table('windows8-64',outfile)

                elif '<!--WIN10 TD GO HERE-->' in row:
                    self.render_footer_table('windows10-64',outfile)

                # elif '<!--SUITE PROGRESS GOES HERE-->' in row:
                #     self.render_table(machine, set_name, outfile)

                else:
                    outfile.write(row)

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

    def get_overall_working_prgress(self, machine):
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
        percentage = self.get_overall_working_prgress(machine)
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
                    for set in sorted(self.set_page_dict[m].keys()):
                        outfile.write(
                            '\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(self.set_page_dict[m][set], set,
                                                                                     m))
                    outfile.write('\t</table>\n')
                elif '<!--windows10-64 here-->' in row:
                    outfile.write('\t<h1>windows10</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows10-64'
                    for set in sorted(self.set_page_dict[m].keys()):
                        outfile.write(
                            '\t\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(self.set_page_dict[m][set], set,
                                                                                       m))
                    outfile.write('\t</table>\n')
                else:
                    outfile.write(row)

    def query_data(self):
        """ query data and gen a csv file """
        tmp_file = 'tmp.txt'

        print "Start query data from pf ..."
        cmd = 'python query_data_from_perfherder.py > tmp.txt'
        self.call_subprocess(cmd)

        with open(tmp_file) as fin, open(HASAL_CSV, 'w') as fout:
            o = csv.writer(fout)
            o.writerow(['suite_name', '_', 'browser_type', 'machine_platform', 'date', 'time', 'value'])
            for line in fin:
                o.writerow(line.split())
        os.remove('tmp.txt')
        print "Done query data!"

    def run(self, query_data):
        """ generate website """
        if query_data or not os.path.isfile(HASAL_CSV):
            self.query_data()
        self.analyze_csv()
        self.get_ref_date()
        self.analyze_today_data()
        self.create_pages()
        self.create_index()

    def deploy(self):
        """ gen website and push to github automatically """
        while (True):
            print "Start deploy process ..."
            self.run(True)
            self.commit_push_to_github()
            print "Time to sleep ... Bye"
            time.sleep(60 * DEPLOY_TIME_INTERVAL)


def main():
    arguments = docopt(__doc__)
    my_dashboard = Dashboard()
    if arguments['--deploy']:
        my_dashboard.deploy()
    else:
        my_dashboard.run(arguments['--queryg'])


if __name__ == '__main__':
    main()
