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
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 211.11],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 222.22],
			[Date.UTC(2017, 9, 3), 222.22],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 244.44],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 6), 222.22],
			[Date.UTC(2017, 9, 6), 222.22],
			[Date.UTC(2017, 9, 6), 233.33],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 8), 244.44],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 9), 222.22],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 211.11],
			[Date.UTC(2017, 9, 11), 211.11],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 244.44],
			[Date.UTC(2017, 9, 15), 222.22],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 211.11],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 177.78],
			[Date.UTC(2017, 9, 3), 188.89],
			[Date.UTC(2017, 9, 3), 188.89],
			[Date.UTC(2017, 9, 3), 188.89],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 4), 166.67],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 6), 177.78],
			[Date.UTC(2017, 9, 6), 188.89],
			[Date.UTC(2017, 9, 6), 188.89],
			[Date.UTC(2017, 9, 6), 200.0],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 6), 211.11],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 188.89],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 9), 155.56],
			[Date.UTC(2017, 9, 9), 177.78],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 9), 222.22],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 15), 200.0],
		]    }]
}