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
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 5), 88.890000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 77.780000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 11), 100.000000],
			[Date.UTC(2017, 8, 11), 77.780000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 77.780000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 77.780000],
			[Date.UTC(2017, 8, 13), 77.780000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 77.780000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 77.780000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 88.890000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 211.110000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 100.000000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 188.890000],
			[Date.UTC(2017, 8, 7), 211.110000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 111.110000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 11), 100.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 12), 200.000000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 100.000000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 211.110000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 211.110000],
			[Date.UTC(2017, 8, 14), 211.110000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 111.110000],
			[Date.UTC(2017, 8, 15), 177.780000],
			[Date.UTC(2017, 8, 15), 188.890000],
			[Date.UTC(2017, 8, 15), 188.890000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 222.220000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 17), 100.000000],
			[Date.UTC(2017, 8, 17), 100.000000],
			[Date.UTC(2017, 8, 17), 100.000000],
			[Date.UTC(2017, 8, 17), 111.110000],
			[Date.UTC(2017, 8, 17), 200.000000],
			[Date.UTC(2017, 8, 17), 211.110000],
			[Date.UTC(2017, 8, 17), 88.890000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
			[Date.UTC(2017, 8, 18), 88.890000],
		]    }]
}