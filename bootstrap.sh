#!/bin/bash

virtualenv -p python2.7 ~/.dashboardenv
pip install -r requirements.txt

source ~/.dashboardenv/bin/activate
