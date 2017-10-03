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
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 288.89],
			[Date.UTC(2017, 8, 19), 288.89],
			[Date.UTC(2017, 8, 19), 300.0],
			[Date.UTC(2017, 8, 19), 300.0],
			[Date.UTC(2017, 8, 19), 300.0],
			[Date.UTC(2017, 8, 19), 311.11],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 266.67],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 244.44],
			[Date.UTC(2017, 8, 21), 244.44],
			[Date.UTC(2017, 8, 21), 255.56],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 255.56],
			[Date.UTC(2017, 8, 22), 255.56],
			[Date.UTC(2017, 8, 22), 255.56],
			[Date.UTC(2017, 8, 22), 277.78],
			[Date.UTC(2017, 8, 22), 277.78],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 255.56],
			[Date.UTC(2017, 8, 22), 277.78],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 233.33],
			[Date.UTC(2017, 8, 23), 233.33],
			[Date.UTC(2017, 8, 23), 233.33],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 255.56],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 244.44],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 255.56],
			[Date.UTC(2017, 8, 24), 255.56],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 288.89],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 255.56],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 244.44],
			[Date.UTC(2017, 8, 25), 255.56],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 277.78],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 533.33],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 244.44],
			[Date.UTC(2017, 8, 27), 244.44],
			[Date.UTC(2017, 8, 27), 255.56],
			[Date.UTC(2017, 8, 27), 266.67],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 211.11],
			[Date.UTC(2017, 8, 28), 211.11],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 266.67],
			[Date.UTC(2017, 8, 28), 266.67],
			[Date.UTC(2017, 8, 28), 277.78],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 29), 244.44],
			[Date.UTC(2017, 8, 29), 244.44],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 29), 266.67],
			[Date.UTC(2017, 8, 29), 277.78],
			[Date.UTC(2017, 8, 29), 288.89],
			[Date.UTC(2017, 8, 29), 288.89],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 29), 244.44],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 233.33],
			[Date.UTC(2017, 8, 30), 233.33],
			[Date.UTC(2017, 8, 30), 233.33],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 255.56],
			[Date.UTC(2017, 8, 30), 233.33],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 255.56],
			[Date.UTC(2017, 8, 30), 255.56],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 311.11],
			[Date.UTC(2017, 9, 1), 211.11],
			[Date.UTC(2017, 9, 1), 222.22],
			[Date.UTC(2017, 9, 1), 233.33],
			[Date.UTC(2017, 9, 1), 233.33],
			[Date.UTC(2017, 9, 1), 233.33],
			[Date.UTC(2017, 9, 1), 244.44],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 233.33],
			[Date.UTC(2017, 9, 2), 244.44],
			[Date.UTC(2017, 9, 2), 255.56],
			[Date.UTC(2017, 9, 2), 255.56],
			[Date.UTC(2017, 9, 2), 266.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 21), 111.11],
			[Date.UTC(2017, 8, 21), 111.11],
			[Date.UTC(2017, 8, 21), 111.11],
			[Date.UTC(2017, 8, 21), 122.22],
			[Date.UTC(2017, 8, 21), 122.22],
			[Date.UTC(2017, 8, 21), 122.22],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 21), 144.44],
			[Date.UTC(2017, 8, 21), 144.44],
			[Date.UTC(2017, 8, 21), 155.56],
			[Date.UTC(2017, 8, 21), 155.56],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 111.11],
			[Date.UTC(2017, 8, 22), 111.11],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 144.44],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 144.44],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 111.11],
			[Date.UTC(2017, 8, 23), 111.11],
			[Date.UTC(2017, 8, 23), 111.11],
			[Date.UTC(2017, 8, 23), 122.22],
			[Date.UTC(2017, 8, 23), 122.22],
			[Date.UTC(2017, 8, 23), 122.22],
			[Date.UTC(2017, 8, 23), 133.33],
			[Date.UTC(2017, 8, 23), 133.33],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 155.56],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 144.44],
			[Date.UTC(2017, 8, 27), 144.44],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 155.56],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 9, 1), 100.0],
			[Date.UTC(2017, 9, 1), 111.11],
			[Date.UTC(2017, 9, 1), 122.22],
			[Date.UTC(2017, 9, 1), 133.33],
			[Date.UTC(2017, 9, 1), 144.44],
			[Date.UTC(2017, 9, 1), 155.56],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 2), 133.33],
			[Date.UTC(2017, 9, 2), 133.33],
			[Date.UTC(2017, 9, 2), 111.11],
		]    }]
}