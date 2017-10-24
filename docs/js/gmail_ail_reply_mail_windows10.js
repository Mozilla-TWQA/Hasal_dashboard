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
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 288.89],
			[Date.UTC(2017, 9, 11), 300.0],
			[Date.UTC(2017, 9, 11), 311.11],
			[Date.UTC(2017, 9, 11), 311.11],
			[Date.UTC(2017, 9, 11), 244.44],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 277.78],
			[Date.UTC(2017, 9, 11), 300.0],
			[Date.UTC(2017, 9, 11), 322.22],
			[Date.UTC(2017, 9, 11), 333.33],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 288.89],
			[Date.UTC(2017, 9, 12), 333.33],
			[Date.UTC(2017, 9, 12), 288.89],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 333.33],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 311.11],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 311.11],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 14), 277.78],
			[Date.UTC(2017, 9, 14), 288.89],
			[Date.UTC(2017, 9, 14), 288.89],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 14), 311.11],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 14), 288.89],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 14), 311.11],
			[Date.UTC(2017, 9, 14), 322.22],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 300.0],
			[Date.UTC(2017, 9, 15), 311.11],
			[Date.UTC(2017, 9, 15), 311.11],
			[Date.UTC(2017, 9, 15), 300.0],
			[Date.UTC(2017, 9, 15), 322.22],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 300.0],
			[Date.UTC(2017, 9, 16), 300.0],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 311.11],
			[Date.UTC(2017, 9, 18), 322.22],
			[Date.UTC(2017, 9, 18), 322.22],
			[Date.UTC(2017, 9, 18), 322.22],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 288.89],
			[Date.UTC(2017, 9, 18), 288.89],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 322.22],
			[Date.UTC(2017, 9, 18), 322.22],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 277.78],
			[Date.UTC(2017, 9, 19), 277.78],
			[Date.UTC(2017, 9, 19), 277.78],
			[Date.UTC(2017, 9, 19), 288.89],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 19), 311.11],
			[Date.UTC(2017, 9, 19), 311.11],
			[Date.UTC(2017, 9, 19), 311.11],
			[Date.UTC(2017, 9, 19), 322.22],
			[Date.UTC(2017, 9, 19), 322.22],
			[Date.UTC(2017, 9, 19), 322.22],
			[Date.UTC(2017, 9, 19), 322.22],
			[Date.UTC(2017, 9, 19), 400.0],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 20), 300.0],
			[Date.UTC(2017, 9, 20), 300.0],
			[Date.UTC(2017, 9, 20), 300.0],
			[Date.UTC(2017, 9, 20), 322.22],
			[Date.UTC(2017, 9, 20), 300.0],
			[Date.UTC(2017, 9, 20), 311.11],
			[Date.UTC(2017, 9, 21), 244.44],
			[Date.UTC(2017, 9, 21), 288.89],
			[Date.UTC(2017, 9, 21), 300.0],
			[Date.UTC(2017, 9, 21), 300.0],
			[Date.UTC(2017, 9, 21), 300.0],
			[Date.UTC(2017, 9, 21), 300.0],
			[Date.UTC(2017, 9, 21), 288.89],
			[Date.UTC(2017, 9, 21), 288.89],
			[Date.UTC(2017, 9, 21), 311.11],
			[Date.UTC(2017, 9, 21), 322.22],
			[Date.UTC(2017, 9, 22), 288.89],
			[Date.UTC(2017, 9, 22), 288.89],
			[Date.UTC(2017, 9, 22), 288.89],
			[Date.UTC(2017, 9, 22), 300.0],
			[Date.UTC(2017, 9, 22), 311.11],
			[Date.UTC(2017, 9, 22), 311.11],
			[Date.UTC(2017, 9, 22), 333.33],
			[Date.UTC(2017, 9, 22), 277.78],
			[Date.UTC(2017, 9, 22), 277.78],
			[Date.UTC(2017, 9, 22), 288.89],
			[Date.UTC(2017, 9, 22), 300.0],
			[Date.UTC(2017, 9, 23), 266.67],
			[Date.UTC(2017, 9, 23), 288.89],
			[Date.UTC(2017, 9, 23), 300.0],
			[Date.UTC(2017, 9, 23), 300.0],
			[Date.UTC(2017, 9, 23), 300.0],
			[Date.UTC(2017, 9, 23), 322.22],
			[Date.UTC(2017, 9, 24), 266.67],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 322.22],
			[Date.UTC(2017, 9, 24), 333.33],
			[Date.UTC(2017, 9, 24), 466.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 322.22],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 177.78],
			[Date.UTC(2017, 9, 20), 177.78],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 20), 200.0],
			[Date.UTC(2017, 9, 20), 177.78],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 21), 166.67],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 21), 188.89],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 21), 188.89],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 22), 200.0],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 22), 222.22],
			[Date.UTC(2017, 9, 23), 144.44],
			[Date.UTC(2017, 9, 23), 144.44],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 177.78],
			[Date.UTC(2017, 9, 23), 188.89],
			[Date.UTC(2017, 9, 23), 188.89],
		]    }]
}