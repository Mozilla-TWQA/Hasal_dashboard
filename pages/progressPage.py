import os
import datetime
from lib.common.nameConfig import *
from shutil import copyfile
from lib.common.logConfig import get_logger
from lib.common.timeRange import in_time_range
from lib.common.sutieConfig import *


def is_under_execution(suite):
    """ Input suite name and check if in under execution """
    ret = False
    s_set = sorted(task_schedule.keys(), key=lambda x: task_schedule[x][0])
    if suite == s_set[-1]:
        next_suite = s_set[0]
        _t1 = task_schedule[suite][0]
        _t2 = task_schedule[next_suite][1]
        _t3 = task_schedule[suite][1]
        _t4 = task_schedule[next_suite][0]
        if in_time_range(_t1, _t2, 'now') or in_time_range(_t3, _t4, 'now'):
            ret = True
        else:
            ret = False
    else:
        next_suite = s_set[s_set.index(suite) + 1]
        for (_t1, _t2) in zip(task_schedule[suite], task_schedule[next_suite]):
            if in_time_range(_t1, _t2, 'now'):
                ret = True
                break
            else:
                ret = False
    return ret


class ProgressPage(object):
    def __init__(self, dashboard, enable_advance):
        self.dashboard = dashboard

        # init logger
        self.logger = get_logger(__file__, enable_advance)

        self.img_set = ["d2_bkg.jpg", "d1_bkg.jpg", "d3_bkg.jpg", "d4_bkg.jpg", "d5_bkg.jpg"]

    def copy_img(self):
        for img in self.img_set:
            copyfile(os.path.join(TEMPLATE_DIR, IMG_DIR, img), os.path.join(BUILD_DIR, IMG_DIR, img))

    def get_suite_status(self, count, suite):
        color = {'Error': '#ff0000', 'OK': '#33cc33', 'Pending': '#ffff00',
                 'Waiting': '#595959'}
        check_dict = {"0330": 3, "1530": 6}

        s1_hm = task_schedule[suite][0]
        s2_hm = task_schedule[suite][1]

        if check_dict.keys()[0] > s1_hm:
            ft_hm = s2_hm
            sd_hm = s1_hm
        else:
            ft_hm = s1_hm
            sd_hm = s2_hm

        status = ''
        if in_time_range(check_dict.keys()[0], ft_hm, 'now'):
            standard = 0
            status = 'Waiting'
        elif in_time_range(ft_hm, sd_hm, 'now'):
            standard = 3
        else:
            standard = 6

        if status != 'Waiting':
            if count >= standard:
                status = 'OK'
            elif standard > count > 0:
                status = 'Pending'
            else:
                status = 'Error'
        return status, color[status]

    def print_work_prgress_row(self, outfile):
        _rt = self.dashboard.ref_date
        sk_set = ["youtube", "gmail", "gdoc", "amazon", "gsearch", "facebook"]
        highlight_bkg = "rgb(0, 153, 255, 0.5)"
        running_color = "#00ccff"

        for _sk in sk_set:
            print_sk = True
            _rows = len(suite_contain[_sk])
            s_set = sorted(suite_contain[_sk], key=lambda x: task_schedule[x][0])

            _sk_now = False
            for _s in s_set:
                if is_under_execution(_s):
                    _sk_now = True
                    break

            for i in range(len(s_set)):
                outfile.write('<tr>')
                if print_sk:
                    if _sk_now:
                        outfile.write('<td rowspan="{}" style="background-color: {}">{}</td>'.format(
                            _rows, highlight_bkg, _sk.capitalize()))
                    else:
                        outfile.write('<td rowspan="{}">{}</td>'.format(_rows, _sk.capitalize()))
                    print_sk = False

                _is_exe = is_under_execution(s_set[i])

                # print trigger time
                for j in range(len(task_schedule[s_set[i]])):
                    _tt = task_schedule[s_set[i]][j]
                    _tth = _tt[:2]
                    _ttm = _tt[2:]

                    if _tt == self.dashboard.schedule_space[-1]:
                        _next = self.dashboard.schedule_space[0]
                    else:
                        _next = self.dashboard.schedule_space[self.dashboard.schedule_space.index(_tt)+1]

                    if _is_exe and in_time_range(_tt, _next, 'now'):
                        outfile.write('<td style="color: {}; background-color: {};">{}:{}</td>'.format(
                            running_color, highlight_bkg, _tth, _ttm))
                    elif _is_exe:
                        outfile.write('<td style="background-color: {};">{}:{}</td>'.format(
                            highlight_bkg, _tth, _ttm))
                    else:
                        outfile.write('<td>{}:{}</td>'.format(_tth, _ttm))

                # print suite name also check if execute
                if _is_exe:
                    outfile.write('<td style="background-color: {}; text-align: left; color: {}">{}</td>'.format(
                        highlight_bkg, running_color, task_dict[s_set[i]]))
                else:
                    outfile.write('<td style="text-align: left">{}</td>'.format(task_dict[s_set[i]]))

                # win7 and win10
                for _m in MACHINE_SET:
                    # firefox and chrome
                    for _b in BROWSER_SET:

                        # get count
                        if _rt in self.dashboard.count_ds[s_set[i]][_m][_b].keys():
                            _val = self.dashboard.count_ds[s_set[i]][_m][_b][_rt]
                        else:
                            _val = 0

                        # print status
                        st, col = self.get_suite_status(_val, s_set[i])
                        if _is_exe:
                            if st == 'OK':
                                outfile.write(
                                    '<td style="background-color: {}; color: {}">{} ({})</td>'.format(
                                        highlight_bkg, col, st, _val))
                            else:
                                outfile.write(
                                    '<td style="background-color: {}; color: {}">\
                                    <marquee width=100px scrollamount="3">Running ({})</marquee>\
                                    </td>'.format(
                                        highlight_bkg, running_color, _val))
                        else:
                            outfile.write('<td style="color: {}">{} ({})</td>'.format(col, st, _val))
                outfile.write('</tr>')

    def create_page(self):
        self.copy_img()
        copyfile(os.path.join(TEMPLATE_DIR, CSS_DIR, 'daily_progress.css'), os.path.join(
            BUILD_DIR, CSS_DIR, 'daily_progress.css'))

        suites_out = os.path.join(BUILD_DIR, 'daily_progress_all.html')
        suites_template = './template/daily_progress_all.html'
        with open(suites_out, 'w') as outfile, open(suites_template, 'r') as infile:
            for row in infile:
                if '<!--rows go here-->' in row:
                    self.print_work_prgress_row(outfile)
                elif '{{REFRESH_TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{REFRESH_TIME}}', '{}'.format(now)))

                elif '{{LATEST_DATA_TIME}}' in row:
                    ref_date = self.dashboard.ref_date
                    latest_date = datetime.datetime.strptime(ref_date, "%Y-%m-%d %H-%M-%S-000000").strftime(
                        "%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{LATEST_DATA_TIME}}', '{}').format(latest_date))
                else:
                    outfile.write(row)
