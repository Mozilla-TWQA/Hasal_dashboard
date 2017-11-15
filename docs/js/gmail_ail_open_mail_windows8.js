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
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 277.78],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
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
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 222.22],
			[Date.UTC(2017, 10, 9), 222.22],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 9), 266.67],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 10), 188.89],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 12), 200.0],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 244.44],
			[Date.UTC(2017, 10, 12), 255.56],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 233.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 1), 155.56],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 188.89],
			[Date.UTC(2017, 10, 3), 188.89],
			[Date.UTC(2017, 10, 3), 188.89],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 188.89],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 211.11],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 200.0],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 10), 200.0],
			[Date.UTC(2017, 10, 10), 200.0],
			[Date.UTC(2017, 10, 10), 200.0],
			[Date.UTC(2017, 10, 10), 200.0],
			[Date.UTC(2017, 10, 10), 200.0],
			[Date.UTC(2017, 10, 10), 200.0],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 12), 177.78],
			[Date.UTC(2017, 10, 12), 188.89],
			[Date.UTC(2017, 10, 12), 188.89],
			[Date.UTC(2017, 10, 12), 200.0],
			[Date.UTC(2017, 10, 12), 211.11],
			[Date.UTC(2017, 10, 12), 211.11],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 222.22],
		]    }]
}