var gsearch_ail_select_image_cat_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows8'
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Asynchronize Input latency (ms)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ms'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    // Define the data points. All series have a dummy year
    // of 1970/7/1 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
		name: 'firefox',
		data: [
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 7), 100.000000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 111.110000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 88.890000],
			[Date.UTC(2017, 7, 12), 100.000000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 111.110000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 111.110000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 77.780000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 211.110000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 9), 100.000000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 10), 100.000000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 88.890000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 111.110000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 111.110000],
			[Date.UTC(2017, 7, 14), 122.220000],
			[Date.UTC(2017, 7, 14), 200.000000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 200.000000],
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 188.890000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 88.890000],
		]    }]
}