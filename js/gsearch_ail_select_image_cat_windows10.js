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
			[Date.UTC(2017, 7, 7), 77.780000],
			[Date.UTC(2017, 7, 7), 77.780000],
			[Date.UTC(2017, 7, 7), 88.890000],
			[Date.UTC(2017, 7, 8), 100.000000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 9), 144.440000],
			[Date.UTC(2017, 7, 9), 166.670000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 10), 177.780000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 11), 88.890000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 14), 144.440000],
			[Date.UTC(2017, 7, 14), 144.440000],
			[Date.UTC(2017, 7, 14), 66.670000],
			[Date.UTC(2017, 7, 14), 77.780000],
			[Date.UTC(2017, 7, 14), 77.780000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 15), 155.560000],
			[Date.UTC(2017, 7, 15), 155.560000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 15), 88.890000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 8), 155.560000],
			[Date.UTC(2017, 7, 8), 288.890000],
			[Date.UTC(2017, 7, 9), 144.440000],
			[Date.UTC(2017, 7, 9), 177.780000],
			[Date.UTC(2017, 7, 9), 244.440000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 9), 77.780000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 10), 166.670000],
			[Date.UTC(2017, 7, 10), 233.330000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 11), 244.440000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 255.560000],
			[Date.UTC(2017, 7, 13), 288.890000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 188.890000],
			[Date.UTC(2017, 7, 14), 300.000000],
			[Date.UTC(2017, 7, 14), 66.670000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 244.440000],
			[Date.UTC(2017, 7, 15), 266.670000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 266.670000],
			[Date.UTC(2017, 7, 16), 266.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 66.670000],
		]    }]
}