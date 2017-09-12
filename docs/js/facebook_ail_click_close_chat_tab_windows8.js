var facebook_ail_click_close_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows8'
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
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 77.780000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 77.780000],
			[Date.UTC(2017, 8, 10), 77.780000],
			[Date.UTC(2017, 8, 11), 44.440000],
			[Date.UTC(2017, 8, 11), 55.560000],
			[Date.UTC(2017, 8, 11), 55.560000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 77.780000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 44.440000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 66.670000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 7), 44.440000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 55.560000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 66.670000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 10), 44.440000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 10), 77.780000],
			[Date.UTC(2017, 8, 11), 44.440000],
			[Date.UTC(2017, 8, 11), 55.560000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 66.670000],
			[Date.UTC(2017, 8, 11), 77.780000],
			[Date.UTC(2017, 8, 11), 77.780000],
			[Date.UTC(2017, 8, 12), 66.670000],
		]    }]
}