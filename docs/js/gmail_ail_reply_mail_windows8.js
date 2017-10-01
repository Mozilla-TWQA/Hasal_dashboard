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
			[Date.UTC(2017, 8, 17), 200.0],
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
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 333.33],
			[Date.UTC(2017, 8, 18), 244.44],
			[Date.UTC(2017, 8, 18), 266.67],
			[Date.UTC(2017, 8, 18), 266.67],
			[Date.UTC(2017, 8, 18), 277.78],
			[Date.UTC(2017, 8, 18), 300.0],
			[Date.UTC(2017, 8, 18), 333.33],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 277.78],
			[Date.UTC(2017, 8, 19), 277.78],
			[Date.UTC(2017, 8, 19), 288.89],
			[Date.UTC(2017, 8, 19), 300.0],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 266.67],
			[Date.UTC(2017, 8, 20), 266.67],
			[Date.UTC(2017, 8, 20), 266.67],
			[Date.UTC(2017, 8, 20), 266.67],
			[Date.UTC(2017, 8, 20), 277.78],
			[Date.UTC(2017, 8, 20), 311.11],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 277.78],
			[Date.UTC(2017, 8, 20), 288.89],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 244.44],
			[Date.UTC(2017, 8, 21), 244.44],
			[Date.UTC(2017, 8, 21), 255.56],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 277.78],
			[Date.UTC(2017, 8, 21), 277.78],
			[Date.UTC(2017, 8, 21), 288.89],
			[Date.UTC(2017, 8, 21), 300.0],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 255.56],
			[Date.UTC(2017, 8, 22), 255.56],
			[Date.UTC(2017, 8, 22), 266.67],
			[Date.UTC(2017, 8, 22), 266.67],
			[Date.UTC(2017, 8, 22), 266.67],
			[Date.UTC(2017, 8, 22), 288.89],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 266.67],
			[Date.UTC(2017, 8, 22), 266.67],
			[Date.UTC(2017, 8, 22), 277.78],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 255.56],
			[Date.UTC(2017, 8, 23), 266.67],
			[Date.UTC(2017, 8, 23), 266.67],
			[Date.UTC(2017, 8, 23), 266.67],
			[Date.UTC(2017, 8, 23), 266.67],
			[Date.UTC(2017, 8, 23), 277.78],
			[Date.UTC(2017, 8, 23), 288.89],
			[Date.UTC(2017, 8, 23), 288.89],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 244.44],
			[Date.UTC(2017, 8, 24), 244.44],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 277.78],
			[Date.UTC(2017, 8, 24), 277.78],
			[Date.UTC(2017, 8, 24), 288.89],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 255.56],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 266.67],
			[Date.UTC(2017, 8, 24), 277.78],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 244.44],
			[Date.UTC(2017, 8, 25), 255.56],
			[Date.UTC(2017, 8, 25), 255.56],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 277.78],
			[Date.UTC(2017, 8, 25), 277.78],
			[Date.UTC(2017, 8, 25), 277.78],
			[Date.UTC(2017, 8, 25), 288.89],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 255.56],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 266.67],
			[Date.UTC(2017, 8, 25), 288.89],
			[Date.UTC(2017, 8, 25), 288.89],
			[Date.UTC(2017, 8, 25), 288.89],
			[Date.UTC(2017, 8, 25), 288.89],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 288.89],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 244.44],
			[Date.UTC(2017, 8, 27), 255.56],
			[Date.UTC(2017, 8, 27), 255.56],
			[Date.UTC(2017, 8, 27), 255.56],
			[Date.UTC(2017, 8, 27), 255.56],
			[Date.UTC(2017, 8, 27), 266.67],
			[Date.UTC(2017, 8, 27), 266.67],
			[Date.UTC(2017, 8, 27), 277.78],
			[Date.UTC(2017, 8, 27), 277.78],
			[Date.UTC(2017, 8, 27), 277.78],
			[Date.UTC(2017, 8, 27), 288.89],
			[Date.UTC(2017, 8, 28), 244.44],
			[Date.UTC(2017, 8, 28), 244.44],
			[Date.UTC(2017, 8, 28), 244.44],
			[Date.UTC(2017, 8, 28), 244.44],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 288.89],
			[Date.UTC(2017, 8, 28), 288.89],
			[Date.UTC(2017, 8, 29), 244.44],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 29), 266.67],
			[Date.UTC(2017, 8, 29), 277.78],
			[Date.UTC(2017, 8, 29), 288.89],
			[Date.UTC(2017, 8, 29), 288.89],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 255.56],
			[Date.UTC(2017, 8, 30), 255.56],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 288.89],
			[Date.UTC(2017, 9, 1), 244.44],
			[Date.UTC(2017, 9, 1), 244.44],
			[Date.UTC(2017, 9, 1), 255.56],
			[Date.UTC(2017, 9, 1), 255.56],
			[Date.UTC(2017, 9, 1), 266.67],
			[Date.UTC(2017, 9, 1), 266.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 18), 166.67],
			[Date.UTC(2017, 8, 18), 166.67],
			[Date.UTC(2017, 8, 18), 166.67],
			[Date.UTC(2017, 8, 18), 177.78],
			[Date.UTC(2017, 8, 18), 177.78],
			[Date.UTC(2017, 8, 18), 188.89],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 21), 155.56],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 21), 144.44],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 144.44],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 23), 122.22],
			[Date.UTC(2017, 8, 23), 144.44],
			[Date.UTC(2017, 8, 23), 144.44],
			[Date.UTC(2017, 8, 23), 166.67],
			[Date.UTC(2017, 8, 23), 166.67],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 177.78],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 144.44],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 166.67],
			[Date.UTC(2017, 8, 27), 177.78],
			[Date.UTC(2017, 8, 27), 177.78],
			[Date.UTC(2017, 8, 27), 177.78],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 155.56],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 144.44],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 155.56],
			[Date.UTC(2017, 8, 30), 155.56],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 9, 1), 133.33],
			[Date.UTC(2017, 9, 1), 133.33],
			[Date.UTC(2017, 9, 1), 133.33],
			[Date.UTC(2017, 9, 1), 133.33],
			[Date.UTC(2017, 9, 1), 155.56],
		]    }]
}