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
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 10), 266.67],
			[Date.UTC(2017, 8, 10), 277.78],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 244.44],
			[Date.UTC(2017, 8, 11), 255.56],
			[Date.UTC(2017, 8, 11), 266.67],
			[Date.UTC(2017, 8, 11), 266.67],
			[Date.UTC(2017, 8, 11), 300.0],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 277.78],
			[Date.UTC(2017, 8, 12), 277.78],
			[Date.UTC(2017, 8, 12), 277.78],
			[Date.UTC(2017, 8, 12), 277.78],
			[Date.UTC(2017, 8, 12), 277.78],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 255.56],
			[Date.UTC(2017, 8, 13), 255.56],
			[Date.UTC(2017, 8, 13), 266.67],
			[Date.UTC(2017, 8, 13), 266.67],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 288.89],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 277.78],
			[Date.UTC(2017, 8, 14), 277.78],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 244.44],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 266.67],
			[Date.UTC(2017, 8, 15), 266.67],
			[Date.UTC(2017, 8, 15), 300.0],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 255.56],
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
			[Date.UTC(2017, 8, 23), 255.56],
			[Date.UTC(2017, 8, 23), 266.67],
			[Date.UTC(2017, 8, 23), 288.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 10), 133.33],
			[Date.UTC(2017, 8, 10), 155.56],
			[Date.UTC(2017, 8, 10), 166.67],
			[Date.UTC(2017, 8, 10), 177.78],
			[Date.UTC(2017, 8, 10), 177.78],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 11), 144.44],
			[Date.UTC(2017, 8, 11), 155.56],
			[Date.UTC(2017, 8, 11), 155.56],
			[Date.UTC(2017, 8, 11), 155.56],
			[Date.UTC(2017, 8, 11), 177.78],
			[Date.UTC(2017, 8, 11), 177.78],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 133.33],
			[Date.UTC(2017, 8, 12), 133.33],
			[Date.UTC(2017, 8, 12), 144.44],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 13), 133.33],
			[Date.UTC(2017, 8, 13), 144.44],
			[Date.UTC(2017, 8, 13), 155.56],
			[Date.UTC(2017, 8, 13), 155.56],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 177.78],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 144.44],
			[Date.UTC(2017, 8, 15), 144.44],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
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
			[Date.UTC(2017, 8, 23), 166.67],
		]    }]
}