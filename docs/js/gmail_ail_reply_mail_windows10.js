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
			[Date.UTC(2017, 8, 6), 177.78],
			[Date.UTC(2017, 8, 6), 211.11],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 244.44],
			[Date.UTC(2017, 8, 6), 244.44],
			[Date.UTC(2017, 8, 6), 255.56],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 244.44],
			[Date.UTC(2017, 8, 8), 244.44],
			[Date.UTC(2017, 8, 9), 200.0],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 233.33],
			[Date.UTC(2017, 8, 9), 233.33],
			[Date.UTC(2017, 8, 9), 244.44],
			[Date.UTC(2017, 8, 9), 255.56],
			[Date.UTC(2017, 8, 9), 255.56],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 222.22],
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 11), 222.22],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 255.56],
			[Date.UTC(2017, 8, 11), 255.56],
			[Date.UTC(2017, 8, 11), 266.67],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 244.44],
			[Date.UTC(2017, 8, 12), 277.78],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 244.44],
			[Date.UTC(2017, 8, 13), 244.44],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 244.44],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 311.11],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 344.44],
			[Date.UTC(2017, 8, 16), 344.44],
			[Date.UTC(2017, 8, 16), 344.44],
			[Date.UTC(2017, 8, 16), 344.44],
			[Date.UTC(2017, 8, 16), 355.56],
			[Date.UTC(2017, 8, 16), 355.56],
			[Date.UTC(2017, 8, 16), 355.56],
			[Date.UTC(2017, 8, 16), 355.56],
			[Date.UTC(2017, 8, 16), 366.67],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 344.44],
			[Date.UTC(2017, 8, 17), 344.44],
			[Date.UTC(2017, 8, 17), 344.44],
			[Date.UTC(2017, 8, 17), 366.67],
			[Date.UTC(2017, 8, 17), 688.89],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 6), 155.56],
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 6), 144.44],
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 8), 100.0],
			[Date.UTC(2017, 8, 8), 111.11],
			[Date.UTC(2017, 8, 8), 111.11],
			[Date.UTC(2017, 8, 8), 122.22],
			[Date.UTC(2017, 8, 8), 122.22],
			[Date.UTC(2017, 8, 8), 133.33],
			[Date.UTC(2017, 8, 9), 111.11],
			[Date.UTC(2017, 8, 9), 122.22],
			[Date.UTC(2017, 8, 9), 122.22],
			[Date.UTC(2017, 8, 9), 133.33],
			[Date.UTC(2017, 8, 9), 133.33],
			[Date.UTC(2017, 8, 9), 144.44],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 111.11],
			[Date.UTC(2017, 8, 10), 122.22],
			[Date.UTC(2017, 8, 11), 111.11],
			[Date.UTC(2017, 8, 11), 111.11],
			[Date.UTC(2017, 8, 11), 133.33],
			[Date.UTC(2017, 8, 11), 133.33],
			[Date.UTC(2017, 8, 11), 133.33],
			[Date.UTC(2017, 8, 11), 133.33],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 111.11],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 144.44],
			[Date.UTC(2017, 8, 12), 155.56],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 133.33],
			[Date.UTC(2017, 8, 13), 133.33],
			[Date.UTC(2017, 8, 13), 155.56],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 111.11],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 211.11],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 5.56],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 18), 133.33],
			[Date.UTC(2017, 8, 18), 155.56],
			[Date.UTC(2017, 8, 18), 166.67],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 155.56],
		]    }]
}