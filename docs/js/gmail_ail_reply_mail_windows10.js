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
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 244.44],
			[Date.UTC(2017, 9, 2), 244.44],
			[Date.UTC(2017, 9, 2), 255.56],
			[Date.UTC(2017, 9, 2), 266.67],
			[Date.UTC(2017, 9, 2), 277.78],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 233.33],
			[Date.UTC(2017, 9, 3), 244.44],
			[Date.UTC(2017, 9, 3), 244.44],
			[Date.UTC(2017, 9, 3), 244.44],
			[Date.UTC(2017, 9, 3), 566.67],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 244.44],
			[Date.UTC(2017, 9, 4), 255.56],
			[Date.UTC(2017, 9, 4), 311.11],
			[Date.UTC(2017, 9, 4), 333.33],
			[Date.UTC(2017, 9, 4), 355.56],
			[Date.UTC(2017, 9, 4), 211.11],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 244.44],
			[Date.UTC(2017, 9, 4), 311.11],
			[Date.UTC(2017, 9, 4), 333.33],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 366.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 277.78],
			[Date.UTC(2017, 9, 5), 277.78],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 5), 300.0],
			[Date.UTC(2017, 9, 5), 300.0],
			[Date.UTC(2017, 9, 5), 311.11],
			[Date.UTC(2017, 9, 5), 322.22],
			[Date.UTC(2017, 9, 6), 200.0],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 6), 300.0],
			[Date.UTC(2017, 9, 6), 300.0],
			[Date.UTC(2017, 9, 6), 300.0],
			[Date.UTC(2017, 9, 7), 211.11],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 233.33],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 7), 277.78],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 311.11],
			[Date.UTC(2017, 9, 7), 322.22],
			[Date.UTC(2017, 9, 7), 277.78],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 300.0],
			[Date.UTC(2017, 9, 7), 311.11],
			[Date.UTC(2017, 9, 7), 333.33],
			[Date.UTC(2017, 9, 8), 300.0],
			[Date.UTC(2017, 9, 8), 311.11],
			[Date.UTC(2017, 9, 8), 311.11],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 111.11],
			[Date.UTC(2017, 9, 3), 111.11],
			[Date.UTC(2017, 9, 3), 111.11],
			[Date.UTC(2017, 9, 3), 111.11],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 133.33],
			[Date.UTC(2017, 9, 4), 111.11],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 211.11],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 211.11],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 6), 111.11],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 177.78],
			[Date.UTC(2017, 9, 6), 188.89],
			[Date.UTC(2017, 9, 6), 200.0],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 166.67],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 244.44],
			[Date.UTC(2017, 9, 7), 177.78],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 166.67],
		]    }]
}