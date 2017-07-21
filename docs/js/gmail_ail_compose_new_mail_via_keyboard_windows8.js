var gmail_ail_compose_new_mail_via_keyboard_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows8'
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
			[Date.UTC(2017, 7, 7), 222.220000],
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 211.110000],
			[Date.UTC(2017, 7, 7), 222.220000],
			[Date.UTC(2017, 7, 8), 177.780000],
			[Date.UTC(2017, 7, 8), 200.000000],
			[Date.UTC(2017, 7, 9), 211.110000],
			[Date.UTC(2017, 7, 9), 233.330000],
			[Date.UTC(2017, 7, 10), 211.110000],
			[Date.UTC(2017, 7, 10), 266.670000],
			[Date.UTC(2017, 7, 11), 200.000000],
			[Date.UTC(2017, 7, 11), 200.000000],
			[Date.UTC(2017, 7, 11), 244.440000],
			[Date.UTC(2017, 7, 12), 200.000000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 12), 222.220000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 188.890000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 244.440000],
			[Date.UTC(2017, 7, 13), 255.560000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 14), 200.000000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 244.440000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 20), 200.000000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 122.220000],
			[Date.UTC(2017, 7, 7), 133.330000],
			[Date.UTC(2017, 7, 7), 144.440000],
			[Date.UTC(2017, 7, 7), 155.560000],
			[Date.UTC(2017, 7, 8), 122.220000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 9), 122.220000],
			[Date.UTC(2017, 7, 9), 133.330000],
			[Date.UTC(2017, 7, 10), 144.440000],
			[Date.UTC(2017, 7, 10), 144.440000],
			[Date.UTC(2017, 7, 11), 122.220000],
			[Date.UTC(2017, 7, 11), 133.330000],
			[Date.UTC(2017, 7, 11), 144.440000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 12), 133.330000],
			[Date.UTC(2017, 7, 12), 144.440000],
			[Date.UTC(2017, 7, 12), 166.670000],
			[Date.UTC(2017, 7, 13), 111.110000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 144.440000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 14), 122.220000],
			[Date.UTC(2017, 7, 14), 122.220000],
			[Date.UTC(2017, 7, 14), 144.440000],
			[Date.UTC(2017, 7, 14), 155.560000],
			[Date.UTC(2017, 7, 14), 155.560000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 20), 122.220000],
		]    }]
}