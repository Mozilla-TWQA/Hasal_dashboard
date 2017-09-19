var gmail_ail_open_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_open_mail_windows8'
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
			[Date.UTC(2017, 8, 6), 211.11],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 188.89],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 255.56],
			[Date.UTC(2017, 8, 8), 188.89],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 311.11],
			[Date.UTC(2017, 8, 9), 200.0],
			[Date.UTC(2017, 8, 9), 200.0],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 233.33],
			[Date.UTC(2017, 8, 9), 233.33],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 222.22],
			[Date.UTC(2017, 8, 10), 222.22],
			[Date.UTC(2017, 8, 10), 222.22],
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 244.44],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 11), 222.22],
			[Date.UTC(2017, 8, 11), 222.22],
			[Date.UTC(2017, 8, 11), 244.44],
			[Date.UTC(2017, 8, 11), 244.44],
			[Date.UTC(2017, 8, 11), 255.56],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 255.56],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 255.56],
			[Date.UTC(2017, 8, 13), 255.56],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 255.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 177.78],
			[Date.UTC(2017, 8, 6), 188.89],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 177.78],
			[Date.UTC(2017, 8, 6), 177.78],
			[Date.UTC(2017, 8, 6), 188.89],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 211.11],
			[Date.UTC(2017, 8, 6), 211.11],
			[Date.UTC(2017, 8, 6), 244.44],
			[Date.UTC(2017, 8, 8), 177.78],
			[Date.UTC(2017, 8, 8), 177.78],
			[Date.UTC(2017, 8, 8), 188.89],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 9), 177.78],
			[Date.UTC(2017, 8, 9), 177.78],
			[Date.UTC(2017, 8, 9), 188.89],
			[Date.UTC(2017, 8, 9), 188.89],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 222.22],
			[Date.UTC(2017, 8, 10), 177.78],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 211.11],
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 244.44],
			[Date.UTC(2017, 8, 11), 177.78],
			[Date.UTC(2017, 8, 11), 188.89],
			[Date.UTC(2017, 8, 11), 188.89],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 244.44],
			[Date.UTC(2017, 8, 12), 244.44],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 177.78],
			[Date.UTC(2017, 8, 13), 211.11],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 188.89],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 18), 211.11],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 244.44],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 18), 544.44],
		]    }]
}