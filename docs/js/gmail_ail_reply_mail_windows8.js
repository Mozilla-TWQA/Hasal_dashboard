var gmail_ail_reply_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows8'
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
			[Date.UTC(2017, 7, 7), 233.330000],
			[Date.UTC(2017, 7, 7), 244.440000],
			[Date.UTC(2017, 7, 7), 255.560000],
			[Date.UTC(2017, 7, 7), 277.780000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 9), 244.440000],
			[Date.UTC(2017, 7, 9), 288.890000],
			[Date.UTC(2017, 7, 10), 222.220000],
			[Date.UTC(2017, 7, 10), 244.440000],
			[Date.UTC(2017, 7, 10), 255.560000],
			[Date.UTC(2017, 7, 11), 233.330000],
			[Date.UTC(2017, 7, 11), 266.670000],
			[Date.UTC(2017, 7, 12), 277.780000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 244.440000],
			[Date.UTC(2017, 7, 13), 244.440000],
			[Date.UTC(2017, 7, 13), 255.560000],
			[Date.UTC(2017, 7, 13), 288.890000],
			[Date.UTC(2017, 7, 14), 211.110000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 14), 222.220000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 244.440000],
			[Date.UTC(2017, 7, 14), 266.670000],
			[Date.UTC(2017, 7, 15), 244.440000],
			[Date.UTC(2017, 7, 15), 244.440000],
			[Date.UTC(2017, 7, 15), 244.440000],
			[Date.UTC(2017, 7, 15), 255.560000],
			[Date.UTC(2017, 7, 15), 255.560000],
			[Date.UTC(2017, 7, 15), 266.670000],
			[Date.UTC(2017, 7, 16), 255.560000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 266.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 133.330000],
			[Date.UTC(2017, 7, 7), 155.560000],
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 8), 155.560000],
			[Date.UTC(2017, 7, 9), 122.220000],
			[Date.UTC(2017, 7, 9), 144.440000],
			[Date.UTC(2017, 7, 10), 144.440000],
			[Date.UTC(2017, 7, 10), 166.670000],
			[Date.UTC(2017, 7, 10), 188.890000],
			[Date.UTC(2017, 7, 11), 122.220000],
			[Date.UTC(2017, 7, 11), 144.440000],
			[Date.UTC(2017, 7, 12), 122.220000],
			[Date.UTC(2017, 7, 13), 122.220000],
			[Date.UTC(2017, 7, 13), 122.220000],
			[Date.UTC(2017, 7, 13), 122.220000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 144.440000],
			[Date.UTC(2017, 7, 13), 155.560000],
			[Date.UTC(2017, 7, 14), 133.330000],
			[Date.UTC(2017, 7, 14), 133.330000],
			[Date.UTC(2017, 7, 14), 144.440000],
			[Date.UTC(2017, 7, 14), 144.440000],
			[Date.UTC(2017, 7, 14), 155.560000],
			[Date.UTC(2017, 7, 14), 166.670000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 15), 155.560000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 144.440000],
		]    }]
}