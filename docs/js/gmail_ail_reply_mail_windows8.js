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
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
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
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
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
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 9, 31), 255.56],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 9, 31), 255.56],
			[Date.UTC(2017, 9, 31), 255.56],
			[Date.UTC(2017, 9, 31), 255.56],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 288.89],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 288.89],
			[Date.UTC(2017, 10, 1), 288.89],
			[Date.UTC(2017, 10, 1), 288.89],
			[Date.UTC(2017, 10, 1), 288.89],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 30), 122.22],
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
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
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
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 31), 144.44],
			[Date.UTC(2017, 9, 31), 144.44],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 122.22],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 144.44],
			[Date.UTC(2017, 9, 31), 144.44],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 10, 1), 122.22],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 133.33],
			[Date.UTC(2017, 10, 1), 133.33],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 2), 122.22],
			[Date.UTC(2017, 10, 2), 144.44],
			[Date.UTC(2017, 10, 2), 155.56],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 177.78],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 133.33],
			[Date.UTC(2017, 10, 2), 133.33],
			[Date.UTC(2017, 10, 2), 144.44],
			[Date.UTC(2017, 10, 2), 144.44],
			[Date.UTC(2017, 10, 2), 155.56],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 3), 122.22],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 144.44],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
		]    }]
}