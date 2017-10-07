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
			[Date.UTC(2017, 8, 23), 166.67],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 422.22],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 244.44],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 27), 188.89],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 211.11],
			[Date.UTC(2017, 8, 27), 211.11],
			[Date.UTC(2017, 8, 27), 211.11],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 244.44],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 233.33],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 211.11],
			[Date.UTC(2017, 9, 1), 166.67],
			[Date.UTC(2017, 9, 1), 177.78],
			[Date.UTC(2017, 9, 1), 188.89],
			[Date.UTC(2017, 9, 1), 200.0],
			[Date.UTC(2017, 9, 1), 200.0],
			[Date.UTC(2017, 9, 1), 200.0],
			[Date.UTC(2017, 9, 1), 233.33],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 211.11],
			[Date.UTC(2017, 9, 2), 211.11],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 255.56],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 211.11],
			[Date.UTC(2017, 9, 2), 211.11],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 177.78],
			[Date.UTC(2017, 9, 3), 188.89],
			[Date.UTC(2017, 9, 3), 188.89],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 222.22],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 277.78],
			[Date.UTC(2017, 9, 4), 177.78],
			[Date.UTC(2017, 9, 4), 177.78],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 23), 133.33],
			[Date.UTC(2017, 8, 23), 144.44],
			[Date.UTC(2017, 8, 23), 144.44],
			[Date.UTC(2017, 8, 23), 166.67],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 266.67],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 322.22],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 322.22],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 177.78],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 177.78],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 311.11],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 300.0],
			[Date.UTC(2017, 8, 26), 333.33],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 355.56],
			[Date.UTC(2017, 8, 27), 166.67],
			[Date.UTC(2017, 8, 27), 188.89],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 244.44],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 144.44],
			[Date.UTC(2017, 8, 28), 155.56],
			[Date.UTC(2017, 8, 28), 166.67],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 266.67],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 377.78],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 244.44],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 300.0],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 155.56],
			[Date.UTC(2017, 8, 30), 155.56],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 311.11],
			[Date.UTC(2017, 9, 1), 166.67],
			[Date.UTC(2017, 9, 1), 166.67],
			[Date.UTC(2017, 9, 1), 177.78],
			[Date.UTC(2017, 9, 1), 188.89],
			[Date.UTC(2017, 9, 1), 200.0],
			[Date.UTC(2017, 9, 1), 233.33],
			[Date.UTC(2017, 9, 2), 133.33],
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 255.56],
			[Date.UTC(2017, 9, 2), 133.33],
			[Date.UTC(2017, 9, 2), 166.67],
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 188.89],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 3), 133.33],
			[Date.UTC(2017, 9, 3), 133.33],
			[Date.UTC(2017, 9, 3), 133.33],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 177.78],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 255.56],
			[Date.UTC(2017, 9, 3), 333.33],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 166.67],
			[Date.UTC(2017, 9, 4), 166.67],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
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
		]    }]
}