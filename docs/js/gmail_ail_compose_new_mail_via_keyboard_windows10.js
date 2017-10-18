var gmail_ail_compose_new_mail_via_keyboard_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows10'
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
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 211.11],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 300.0],
			[Date.UTC(2017, 9, 4), 300.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 333.33],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 222.22],
			[Date.UTC(2017, 9, 6), 233.33],
			[Date.UTC(2017, 9, 6), 233.33],
			[Date.UTC(2017, 9, 6), 233.33],
			[Date.UTC(2017, 9, 6), 322.22],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 355.56],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 288.89],
			[Date.UTC(2017, 9, 7), 288.89],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 211.11],
			[Date.UTC(2017, 9, 8), 222.22],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 211.11],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 244.44],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 8), 300.0],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 9), 222.22],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 222.22],
			[Date.UTC(2017, 9, 11), 222.22],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 244.44],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 277.78],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 233.33],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 277.78],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 244.44],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 200.0],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 6), 100.0],
			[Date.UTC(2017, 9, 6), 100.0],
			[Date.UTC(2017, 9, 6), 122.22],
			[Date.UTC(2017, 9, 6), 122.22],
			[Date.UTC(2017, 9, 6), 133.33],
			[Date.UTC(2017, 9, 6), 144.44],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 133.33],
			[Date.UTC(2017, 9, 7), 144.44],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 133.33],
			[Date.UTC(2017, 9, 7), 144.44],
			[Date.UTC(2017, 9, 7), 155.56],
			[Date.UTC(2017, 9, 7), 155.56],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 155.56],
			[Date.UTC(2017, 9, 8), 155.56],
			[Date.UTC(2017, 9, 8), 155.56],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 122.22],
			[Date.UTC(2017, 9, 8), 122.22],
			[Date.UTC(2017, 9, 8), 122.22],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 144.44],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 144.44],
			[Date.UTC(2017, 9, 9), 155.56],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 144.44],
			[Date.UTC(2017, 9, 11), 155.56],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 144.44],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 144.44],
			[Date.UTC(2017, 9, 15), 144.44],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 133.33],
		]    }]
}