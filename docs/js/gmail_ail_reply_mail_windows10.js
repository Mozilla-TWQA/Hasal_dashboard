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
			[Date.UTC(2017, 9, 24), 311.11],
			[Date.UTC(2017, 9, 25), 277.78],
			[Date.UTC(2017, 9, 25), 288.89],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 311.11],
			[Date.UTC(2017, 9, 25), 355.56],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 322.22],
			[Date.UTC(2017, 9, 25), 322.22],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 288.89],
			[Date.UTC(2017, 9, 26), 300.0],
			[Date.UTC(2017, 9, 26), 300.0],
			[Date.UTC(2017, 9, 26), 322.22],
			[Date.UTC(2017, 9, 26), 344.44],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 288.89],
			[Date.UTC(2017, 9, 26), 311.11],
			[Date.UTC(2017, 9, 26), 333.33],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 311.11],
			[Date.UTC(2017, 9, 27), 322.22],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 322.22],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 277.78],
			[Date.UTC(2017, 9, 28), 277.78],
			[Date.UTC(2017, 9, 28), 277.78],
			[Date.UTC(2017, 9, 28), 288.89],
			[Date.UTC(2017, 9, 28), 300.0],
			[Date.UTC(2017, 9, 28), 300.0],
			[Date.UTC(2017, 9, 28), 300.0],
			[Date.UTC(2017, 9, 28), 300.0],
			[Date.UTC(2017, 9, 28), 277.78],
			[Date.UTC(2017, 9, 28), 288.89],
			[Date.UTC(2017, 9, 28), 366.67],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 277.78],
			[Date.UTC(2017, 9, 29), 288.89],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 322.22],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 277.78],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 322.22],
			[Date.UTC(2017, 9, 29), 355.56],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 333.33],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 24), 166.67],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 200.0],
			[Date.UTC(2017, 9, 24), 166.67],
			[Date.UTC(2017, 9, 24), 166.67],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 255.56],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 277.78],
		]    }]
}