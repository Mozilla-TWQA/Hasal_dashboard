var facebook_ail_click_open_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows8'
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
			[Date.UTC(2017, 7, 7), 211.110000],
			[Date.UTC(2017, 7, 7), 277.780000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 255.560000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 244.440000],
			[Date.UTC(2017, 7, 12), 255.560000],
			[Date.UTC(2017, 7, 12), 566.670000],
			[Date.UTC(2017, 7, 13), 111.110000],
			[Date.UTC(2017, 7, 13), 200.000000],
			[Date.UTC(2017, 7, 13), 244.440000],
			[Date.UTC(2017, 7, 13), 300.000000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 255.560000],
			[Date.UTC(2017, 7, 14), 266.670000],
			[Date.UTC(2017, 7, 14), 277.780000],
			[Date.UTC(2017, 7, 14), 300.000000],
			[Date.UTC(2017, 7, 14), 333.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 355.560000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 266.670000],
			[Date.UTC(2017, 7, 16), 266.670000],
			[Date.UTC(2017, 7, 16), 288.890000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 288.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 311.110000],
			[Date.UTC(2017, 7, 19), 311.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 233.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 88.890000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 77.780000],
			[Date.UTC(2017, 7, 11), 66.670000],
			[Date.UTC(2017, 7, 12), 111.110000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 12), 88.890000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 455.560000],
			[Date.UTC(2017, 7, 13), 55.560000],
			[Date.UTC(2017, 7, 13), 55.560000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 111.110000],
			[Date.UTC(2017, 7, 14), 111.110000],
			[Date.UTC(2017, 7, 14), 66.670000],
			[Date.UTC(2017, 7, 14), 66.670000],
			[Date.UTC(2017, 7, 14), 66.670000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
		]    }]
}