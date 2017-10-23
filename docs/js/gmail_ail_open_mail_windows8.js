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
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 211.11],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 222.22],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 244.44],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 200.0],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 244.44],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 23), 200.0],
			[Date.UTC(2017, 9, 23), 233.33],
			[Date.UTC(2017, 9, 23), 244.44],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 188.89],
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
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 211.11],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 20), 200.0],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 21), 188.89],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 23), 200.0],
			[Date.UTC(2017, 9, 23), 233.33],
		]    }]
}