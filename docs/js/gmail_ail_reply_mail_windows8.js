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
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 255.56],
			[Date.UTC(2017, 9, 18), 255.56],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 288.89],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 255.56],
			[Date.UTC(2017, 9, 20), 255.56],
			[Date.UTC(2017, 9, 20), 255.56],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 255.56],
			[Date.UTC(2017, 9, 20), 255.56],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 21), 244.44],
			[Date.UTC(2017, 9, 21), 266.67],
			[Date.UTC(2017, 9, 21), 266.67],
			[Date.UTC(2017, 9, 21), 266.67],
			[Date.UTC(2017, 9, 21), 277.78],
			[Date.UTC(2017, 9, 21), 277.78],
			[Date.UTC(2017, 9, 22), 222.22],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 266.67],
			[Date.UTC(2017, 9, 22), 266.67],
			[Date.UTC(2017, 9, 22), 288.89],
			[Date.UTC(2017, 9, 22), 288.89],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 255.56],
			[Date.UTC(2017, 9, 23), 266.67],
			[Date.UTC(2017, 9, 23), 266.67],
			[Date.UTC(2017, 9, 23), 277.78],
			[Date.UTC(2017, 9, 23), 311.11],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 266.67],
			[Date.UTC(2017, 9, 24), 277.78],
			[Date.UTC(2017, 9, 24), 277.78],
			[Date.UTC(2017, 9, 24), 277.78],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 288.89],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 255.56],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 277.78],
			[Date.UTC(2017, 9, 25), 277.78],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 255.56],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 288.89],
			[Date.UTC(2017, 9, 26), 300.0],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 255.56],
			[Date.UTC(2017, 9, 26), 277.78],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 244.44],
			[Date.UTC(2017, 9, 28), 244.44],
			[Date.UTC(2017, 9, 28), 255.56],
			[Date.UTC(2017, 9, 28), 255.56],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 244.44],
			[Date.UTC(2017, 9, 28), 255.56],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 288.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 144.44],
			[Date.UTC(2017, 9, 19), 144.44],
			[Date.UTC(2017, 9, 19), 144.44],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 155.56],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 155.56],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 188.89],
			[Date.UTC(2017, 9, 24), 144.44],
			[Date.UTC(2017, 9, 24), 122.22],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 144.44],
			[Date.UTC(2017, 9, 24), 155.56],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 144.44],
			[Date.UTC(2017, 9, 26), 144.44],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 133.33],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
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
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
		]    }]
}