var gmail_ail_reply_mail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows10'
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
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 322.22],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 288.89],
			[Date.UTC(2017, 10, 7), 311.11],
			[Date.UTC(2017, 10, 7), 311.11],
			[Date.UTC(2017, 10, 7), 322.22],
			[Date.UTC(2017, 10, 7), 333.33],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 333.33],
			[Date.UTC(2017, 10, 8), 333.33],
			[Date.UTC(2017, 10, 8), 344.44],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 9), 266.67],
			[Date.UTC(2017, 10, 9), 266.67],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 9), 300.0],
			[Date.UTC(2017, 10, 9), 333.33],
			[Date.UTC(2017, 10, 10), 266.67],
			[Date.UTC(2017, 10, 10), 277.78],
			[Date.UTC(2017, 10, 10), 300.0],
			[Date.UTC(2017, 10, 10), 300.0],
			[Date.UTC(2017, 10, 10), 322.22],
			[Date.UTC(2017, 10, 10), 322.22],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 422.22],
			[Date.UTC(2017, 10, 12), 288.89],
			[Date.UTC(2017, 10, 12), 288.89],
			[Date.UTC(2017, 10, 12), 300.0],
			[Date.UTC(2017, 10, 12), 322.22],
			[Date.UTC(2017, 10, 12), 322.22],
			[Date.UTC(2017, 10, 12), 322.22],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 311.11],
			[Date.UTC(2017, 10, 13), 322.22],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 322.22],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 14), 311.11],
			[Date.UTC(2017, 10, 14), 322.22],
			[Date.UTC(2017, 10, 14), 333.33],
			[Date.UTC(2017, 10, 14), 333.33],
			[Date.UTC(2017, 10, 14), 366.67],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 288.89],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 14), 311.11],
			[Date.UTC(2017, 10, 14), 322.22],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 344.44],
			[Date.UTC(2017, 10, 15), 344.44],
			[Date.UTC(2017, 10, 16), 277.78],
			[Date.UTC(2017, 10, 16), 300.0],
			[Date.UTC(2017, 10, 16), 300.0],
			[Date.UTC(2017, 10, 16), 322.22],
			[Date.UTC(2017, 10, 16), 322.22],
			[Date.UTC(2017, 10, 16), 322.22],
			[Date.UTC(2017, 10, 17), 266.67],
			[Date.UTC(2017, 10, 17), 277.78],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 311.11],
			[Date.UTC(2017, 10, 17), 266.67],
			[Date.UTC(2017, 10, 17), 277.78],
			[Date.UTC(2017, 10, 17), 277.78],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 311.11],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 300.0],
			[Date.UTC(2017, 10, 18), 300.0],
			[Date.UTC(2017, 10, 18), 322.22],
			[Date.UTC(2017, 10, 18), 333.33],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 288.89],
			[Date.UTC(2017, 10, 18), 300.0],
			[Date.UTC(2017, 10, 18), 300.0],
			[Date.UTC(2017, 10, 18), 300.0],
			[Date.UTC(2017, 10, 18), 311.11],
			[Date.UTC(2017, 10, 19), 277.78],
			[Date.UTC(2017, 10, 19), 300.0],
			[Date.UTC(2017, 10, 19), 300.0],
			[Date.UTC(2017, 10, 19), 311.11],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 922.22],
			[Date.UTC(2017, 10, 9), 144.44],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 177.78],
			[Date.UTC(2017, 10, 9), 177.78],
			[Date.UTC(2017, 10, 9), 188.89],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 12), 144.44],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 12), 188.89],
			[Date.UTC(2017, 10, 12), 188.89],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 311.11],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 14), 377.78],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 16), 155.56],
			[Date.UTC(2017, 10, 16), 155.56],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 166.67],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 166.67],
			[Date.UTC(2017, 10, 17), 166.67],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 18), 144.44],
			[Date.UTC(2017, 10, 18), 144.44],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 177.78],
			[Date.UTC(2017, 10, 19), 144.44],
			[Date.UTC(2017, 10, 19), 155.56],
			[Date.UTC(2017, 10, 19), 166.67],
			[Date.UTC(2017, 10, 19), 166.67],
		]    }]
}