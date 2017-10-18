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
			[Date.UTC(2017, 9, 8), 300.0],
			[Date.UTC(2017, 9, 8), 300.0],
			[Date.UTC(2017, 9, 8), 300.0],
			[Date.UTC(2017, 9, 8), 311.11],
			[Date.UTC(2017, 9, 8), 311.11],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 266.67],
			[Date.UTC(2017, 9, 8), 300.0],
			[Date.UTC(2017, 9, 8), 311.11],
			[Date.UTC(2017, 9, 8), 322.22],
			[Date.UTC(2017, 9, 8), 322.22],
			[Date.UTC(2017, 9, 9), 277.78],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 311.11],
			[Date.UTC(2017, 9, 9), 311.11],
			[Date.UTC(2017, 9, 9), 311.11],
			[Date.UTC(2017, 9, 9), 322.22],
			[Date.UTC(2017, 9, 9), 322.22],
			[Date.UTC(2017, 9, 9), 322.22],
			[Date.UTC(2017, 9, 9), 288.89],
			[Date.UTC(2017, 9, 9), 288.89],
			[Date.UTC(2017, 9, 9), 300.0],
			[Date.UTC(2017, 9, 9), 322.22],
			[Date.UTC(2017, 9, 10), 288.89],
			[Date.UTC(2017, 9, 10), 288.89],
			[Date.UTC(2017, 9, 10), 288.89],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 10), 322.22],
			[Date.UTC(2017, 9, 10), 322.22],
			[Date.UTC(2017, 9, 10), 333.33],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 300.0],
			[Date.UTC(2017, 9, 10), 311.11],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 288.89],
			[Date.UTC(2017, 9, 11), 300.0],
			[Date.UTC(2017, 9, 11), 311.11],
			[Date.UTC(2017, 9, 11), 311.11],
			[Date.UTC(2017, 9, 11), 244.44],
			[Date.UTC(2017, 9, 11), 266.67],
			[Date.UTC(2017, 9, 11), 277.78],
			[Date.UTC(2017, 9, 11), 300.0],
			[Date.UTC(2017, 9, 11), 322.22],
			[Date.UTC(2017, 9, 11), 333.33],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 288.89],
			[Date.UTC(2017, 9, 12), 333.33],
			[Date.UTC(2017, 9, 12), 288.89],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 333.33],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 311.11],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 13), 277.78],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 311.11],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 14), 277.78],
			[Date.UTC(2017, 9, 14), 288.89],
			[Date.UTC(2017, 9, 14), 288.89],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 14), 311.11],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 14), 288.89],
			[Date.UTC(2017, 9, 14), 300.0],
			[Date.UTC(2017, 9, 14), 311.11],
			[Date.UTC(2017, 9, 14), 322.22],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 277.78],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 300.0],
			[Date.UTC(2017, 9, 15), 311.11],
			[Date.UTC(2017, 9, 15), 311.11],
			[Date.UTC(2017, 9, 15), 300.0],
			[Date.UTC(2017, 9, 15), 322.22],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 300.0],
			[Date.UTC(2017, 9, 16), 300.0],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 300.0],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 322.22],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 188.89],
			[Date.UTC(2017, 9, 8), 188.89],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 222.22],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 188.89],
			[Date.UTC(2017, 9, 9), 188.89],
			[Date.UTC(2017, 9, 9), 188.89],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 177.78],
			[Date.UTC(2017, 9, 9), 211.11],
			[Date.UTC(2017, 9, 10), 144.44],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 12), 188.89],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 177.78],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 166.67],
		]    }]
}