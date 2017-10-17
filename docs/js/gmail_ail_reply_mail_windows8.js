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
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 244.44],
			[Date.UTC(2017, 9, 4), 244.44],
			[Date.UTC(2017, 9, 4), 244.44],
			[Date.UTC(2017, 9, 4), 255.56],
			[Date.UTC(2017, 9, 4), 255.56],
			[Date.UTC(2017, 9, 4), 266.67],
			[Date.UTC(2017, 9, 4), 266.67],
			[Date.UTC(2017, 9, 4), 288.89],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 277.78],
			[Date.UTC(2017, 9, 5), 277.78],
			[Date.UTC(2017, 9, 5), 277.78],
			[Date.UTC(2017, 9, 5), 277.78],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 6), 244.44],
			[Date.UTC(2017, 9, 6), 244.44],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 6), 288.89],
			[Date.UTC(2017, 9, 6), 300.0],
			[Date.UTC(2017, 9, 6), 300.0],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 244.44],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 277.78],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 244.44],
			[Date.UTC(2017, 9, 9), 244.44],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 9), 277.78],
			[Date.UTC(2017, 9, 9), 288.89],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 255.56],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 255.56],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 10), 288.89],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 244.44],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 12), 233.33],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 255.56],
			[Date.UTC(2017, 9, 12), 233.33],
			[Date.UTC(2017, 9, 12), 255.56],
			[Date.UTC(2017, 9, 12), 255.56],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 14), 244.44],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 15), 244.44],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 16), 211.11],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 3), 144.44],
			[Date.UTC(2017, 9, 3), 144.44],
			[Date.UTC(2017, 9, 3), 144.44],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 155.56],
			[Date.UTC(2017, 9, 4), 166.67],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 6), 122.22],
			[Date.UTC(2017, 9, 6), 122.22],
			[Date.UTC(2017, 9, 6), 133.33],
			[Date.UTC(2017, 9, 6), 155.56],
			[Date.UTC(2017, 9, 6), 155.56],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 177.78],
			[Date.UTC(2017, 9, 7), 133.33],
			[Date.UTC(2017, 9, 7), 166.67],
			[Date.UTC(2017, 9, 7), 166.67],
			[Date.UTC(2017, 9, 7), 166.67],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 166.67],
			[Date.UTC(2017, 9, 8), 122.22],
			[Date.UTC(2017, 9, 8), 144.44],
			[Date.UTC(2017, 9, 8), 155.56],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 188.89],
			[Date.UTC(2017, 9, 8), 188.89],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 144.44],
			[Date.UTC(2017, 9, 9), 155.56],
			[Date.UTC(2017, 9, 9), 155.56],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 177.78],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 144.44],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 144.44],
			[Date.UTC(2017, 9, 11), 144.44],
			[Date.UTC(2017, 9, 11), 155.56],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 144.44],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 144.44],
			[Date.UTC(2017, 9, 15), 144.44],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
		]    }]
}