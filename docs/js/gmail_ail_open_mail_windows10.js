var gmail_ail_open_mail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_open_mail_windows10'
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
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 288.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 333.33],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 388.89],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 6), 222.22],
			[Date.UTC(2017, 9, 6), 233.33],
			[Date.UTC(2017, 9, 6), 255.56],
			[Date.UTC(2017, 9, 6), 266.67],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 7), 166.67],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 277.78],
			[Date.UTC(2017, 9, 7), 288.89],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 311.11],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 244.44],
			[Date.UTC(2017, 9, 8), 255.56],
			[Date.UTC(2017, 9, 9), 244.44],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 244.44],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 411.11],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 255.56],
			[Date.UTC(2017, 9, 10), 255.56],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 10), 333.33],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 344.44],
			[Date.UTC(2017, 9, 10), 355.56],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 244.44],
			[Date.UTC(2017, 9, 11), 333.33],
			[Date.UTC(2017, 9, 11), 388.89],
			[Date.UTC(2017, 9, 11), 211.11],
			[Date.UTC(2017, 9, 11), 222.22],
			[Date.UTC(2017, 9, 11), 277.78],
			[Date.UTC(2017, 9, 11), 277.78],
			[Date.UTC(2017, 9, 11), 655.56],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 255.56],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 322.22],
			[Date.UTC(2017, 9, 12), 322.22],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 311.11],
			[Date.UTC(2017, 9, 13), 366.67],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 277.78],
			[Date.UTC(2017, 9, 14), 277.78],
			[Date.UTC(2017, 9, 14), 333.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 344.44],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 444.44],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 255.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 177.78],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 266.67],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 322.22],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 177.78],
			[Date.UTC(2017, 9, 6), 188.89],
			[Date.UTC(2017, 9, 6), 188.89],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 244.44],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 7), 388.89],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 244.44],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 277.78],
			[Date.UTC(2017, 9, 8), 277.78],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 244.44],
			[Date.UTC(2017, 9, 8), 244.44],
			[Date.UTC(2017, 9, 8), 433.33],
			[Date.UTC(2017, 9, 9), 177.78],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 277.78],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 388.89],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 266.67],
			[Date.UTC(2017, 9, 9), 288.89],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 255.56],
			[Date.UTC(2017, 9, 10), 255.56],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 10), 400.0],
			[Date.UTC(2017, 9, 10), 422.22],
			[Date.UTC(2017, 9, 10), 444.44],
			[Date.UTC(2017, 9, 10), 488.89],
			[Date.UTC(2017, 9, 10), 533.33],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 277.78],
			[Date.UTC(2017, 9, 10), 288.89],
			[Date.UTC(2017, 9, 10), 400.0],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 288.89],
			[Date.UTC(2017, 9, 11), 288.89],
			[Date.UTC(2017, 9, 11), 322.22],
			[Date.UTC(2017, 9, 11), 377.78],
			[Date.UTC(2017, 9, 11), 244.44],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 288.89],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 233.33],
			[Date.UTC(2017, 9, 12), 255.56],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 277.78],
			[Date.UTC(2017, 9, 12), 366.67],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 288.89],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 466.67],
			[Date.UTC(2017, 9, 15), 244.44],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 300.0],
			[Date.UTC(2017, 9, 15), 366.67],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 244.44],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 277.78],
			[Date.UTC(2017, 9, 16), 300.0],
			[Date.UTC(2017, 9, 16), 388.89],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 366.67],
		]    }]
}