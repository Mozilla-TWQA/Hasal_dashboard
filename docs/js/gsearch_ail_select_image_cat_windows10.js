var gsearch_ail_select_image_cat_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows10'
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
			[Date.UTC(2017, 8, 5), 144.440000],
			[Date.UTC(2017, 8, 5), 288.890000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 722.220000],
			[Date.UTC(2017, 8, 5), 88.890000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 8), 133.330000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 122.220000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 77.780000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 266.670000],
			[Date.UTC(2017, 8, 12), 66.670000],
			[Date.UTC(2017, 8, 12), 66.670000],
			[Date.UTC(2017, 8, 12), 77.780000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 66.670000],
			[Date.UTC(2017, 8, 13), 77.780000],
			[Date.UTC(2017, 8, 13), 77.780000],
			[Date.UTC(2017, 8, 13), 77.780000],
			[Date.UTC(2017, 8, 13), 88.890000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 122.220000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 100.000000],
			[Date.UTC(2017, 8, 15), 255.560000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 15), 88.890000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 66.670000],
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
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 88.890000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 7), 166.670000],
			[Date.UTC(2017, 8, 7), 166.670000],
			[Date.UTC(2017, 8, 7), 188.890000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 155.560000],
			[Date.UTC(2017, 8, 9), 166.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 166.670000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 11), 166.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 12), 177.780000],
			[Date.UTC(2017, 8, 12), 66.670000],
			[Date.UTC(2017, 8, 12), 66.670000],
			[Date.UTC(2017, 8, 12), 66.670000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 12), 88.890000],
			[Date.UTC(2017, 8, 13), 144.440000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 66.670000],
			[Date.UTC(2017, 8, 13), 66.670000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 155.560000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 14), 77.780000],
			[Date.UTC(2017, 8, 14), 88.890000],
			[Date.UTC(2017, 8, 15), 133.330000],
			[Date.UTC(2017, 8, 15), 144.440000],
			[Date.UTC(2017, 8, 15), 66.670000],
			[Date.UTC(2017, 8, 15), 77.780000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 255.560000],
			[Date.UTC(2017, 8, 18), 255.560000],
			[Date.UTC(2017, 8, 18), 66.670000],
			[Date.UTC(2017, 8, 18), 66.670000],
		]    }]
}