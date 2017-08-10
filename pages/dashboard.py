import os
import csv
import datetime
from lib.common.logConfig import get_logger
from lib.common.nameConfig import *
from lib.common.processcallConfig import call_subprocess
from lib.common.sutieConfig import *
from pages.progressPage import ProgressPage
from pages.graphPage import GraphPage
from pages.indexPage import IndexPage
from pages.pendingList import PendingList


class Dashboard(object):
    def __init__(self, enable_advance):
        self.progress_page = ProgressPage(self, enable_advance)
        self.graph_page = GraphPage(self, enable_advance)
        self.index_page = IndexPage(self, enable_advance)
        self.pending_list = PendingList(self, enable_advance)
        self.queryRange = 2419200 # one month

        self.value_ds = dict()
        self.count_ds = dict()
        self.set_page_dict = dict()
        self.ref_date = (datetime.date.today() -
                         datetime.timedelta(days=1)).strftime("%Y-%m-%d")
        self.schedule_space = list()

        # init logger
        self.logger = get_logger(__file__, enable_advance)

        for x in task_schedule.values():
            self.schedule_space.extend(x)
        self.schedule_space = sorted(self.schedule_space)

        # create dir
        if not os.path.exists(BUILD_DIR):
            os.makedirs(BUILD_DIR)
        if not os.path.exists(os.path.join(BUILD_DIR, JS_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, JS_DIR))
        if not os.path.exists(os.path.join(BUILD_DIR, CSS_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, CSS_DIR))
        if not os.path.exists(os.path.join(BUILD_DIR, IMG_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, IMG_DIR))

    def reset_ds(self):
        self.value_ds.clear()
        self.count_ds.clear()

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
                _d = row['date']
                # _t = '{} {}'.format(row['date'], row['time'])
                _v = row['value']

                if row['suite_name'] == 'suite_name':
                    continue
                elif _m not in MACHINE_SET or _b not in BROWSER_SET:
                    continue

                # initialize structure
                if _s not in self.value_ds.keys():
                    self.value_ds[_s] = {}
                    self.count_ds[_s] = {}

                    for _m in MACHINE_SET:
                        self.value_ds[_s][_m] = {}
                        self.count_ds[_s][_m] = {}

                        for _b in BROWSER_SET:
                            self.value_ds[_s][_m][_b] = {}
                            self.count_ds[_s][_m][_b] = {}

                # TODO: fix date
                if _d not in self.value_ds[_s][_m][_b].keys():
                    self.value_ds[_s][_m][_b][_d] = []
                    self.count_ds[_s][_m][_b][_d] = 1
                else:
                    self.count_ds[_s][_m][_b][_d] += 1

                self.value_ds[_s][_m][_b][_d].append(_v)

    def query_data(self, interval):
        """ query data and gen a csv file """
        tmp_file = 'tmp.txt'

        self.logger.info("Start query data from pf, might takes a while ...")
        cmd = 'python tools/query_data_from_perfherder.py --interval={} > {}'.format(interval, tmp_file)
        call_subprocess(cmd)

        with open(tmp_file) as fin, open(HASAL_CSV, 'w') as fout:
            o = csv.writer(fout)
            o.writerow(['suite_name', '_', 'browser_type', 'machine_platform', 'date', 'time', 'value'])
            for line in fin:
                o.writerow(line.split())
        os.remove(tmp_file)
        self.logger.info("Done query data!")

    def run(self, query_data):
        """ generate website """

        # read csv and analyze
        if query_data or not os.path.isfile(HASAL_CSV):
            self.query_data(self.queryRange)
        self.reset_ds()
        self.analyze_csv()

        # create web-pages
        # self.graph_page.create_page()
        self.progress_page.create_page()
        self.index_page.create_page()
        self.pending_list.create_page()
