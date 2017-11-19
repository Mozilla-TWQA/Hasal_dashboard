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
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 344.44],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 377.78],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 311.11],
			[Date.UTC(2017, 10, 7), 344.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 322.22],
			[Date.UTC(2017, 10, 8), 355.56],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 9), 255.56],
			[Date.UTC(2017, 10, 9), 255.56],
			[Date.UTC(2017, 10, 9), 266.67],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 9), 311.11],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 10), 277.78],
			[Date.UTC(2017, 10, 10), 300.0],
			[Date.UTC(2017, 10, 10), 311.11],
			[Date.UTC(2017, 10, 10), 366.67],
			[Date.UTC(2017, 10, 10), 622.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 355.56],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 355.56],
			[Date.UTC(2017, 10, 11), 366.67],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 355.56],
			[Date.UTC(2017, 10, 11), 377.78],
			[Date.UTC(2017, 10, 12), 244.44],
			[Date.UTC(2017, 10, 12), 255.56],
			[Date.UTC(2017, 10, 12), 288.89],
			[Date.UTC(2017, 10, 12), 300.0],
			[Date.UTC(2017, 10, 12), 366.67],
			[Date.UTC(2017, 10, 12), 400.0],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 14), 322.22],
			[Date.UTC(2017, 10, 14), 411.11],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 288.89],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 14), 322.22],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 16), 233.33],
			[Date.UTC(2017, 10, 16), 255.56],
			[Date.UTC(2017, 10, 16), 277.78],
			[Date.UTC(2017, 10, 16), 288.89],
			[Date.UTC(2017, 10, 16), 300.0],
			[Date.UTC(2017, 10, 16), 511.11],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 266.67],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 333.33],
			[Date.UTC(2017, 10, 17), 255.56],
			[Date.UTC(2017, 10, 17), 255.56],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 333.33],
			[Date.UTC(2017, 10, 17), 377.78],
			[Date.UTC(2017, 10, 17), 544.44],
			[Date.UTC(2017, 10, 18), 222.22],
			[Date.UTC(2017, 10, 18), 244.44],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 288.89],
			[Date.UTC(2017, 10, 18), 288.89],
			[Date.UTC(2017, 10, 18), 466.67],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 277.78],
			[Date.UTC(2017, 10, 18), 277.78],
			[Date.UTC(2017, 10, 18), 355.56],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 300.0],
			[Date.UTC(2017, 10, 19), 322.22],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
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
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 344.44],
			[Date.UTC(2017, 10, 5), 377.78],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 9), 244.44],
			[Date.UTC(2017, 10, 9), 244.44],
			[Date.UTC(2017, 10, 9), 266.67],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 9), 300.0],
			[Date.UTC(2017, 10, 10), 266.67],
			[Date.UTC(2017, 10, 10), 300.0],
			[Date.UTC(2017, 10, 10), 300.0],
			[Date.UTC(2017, 10, 10), 333.33],
			[Date.UTC(2017, 10, 10), 333.33],
			[Date.UTC(2017, 10, 10), 355.56],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 400.0],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 12), 177.78],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 244.44],
			[Date.UTC(2017, 10, 12), 266.67],
			[Date.UTC(2017, 10, 12), 288.89],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 355.56],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 288.89],
			[Date.UTC(2017, 10, 14), 288.89],
			[Date.UTC(2017, 10, 14), 355.56],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 344.44],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 388.89],
			[Date.UTC(2017, 10, 16), 266.67],
			[Date.UTC(2017, 10, 16), 266.67],
			[Date.UTC(2017, 10, 16), 266.67],
			[Date.UTC(2017, 10, 16), 288.89],
			[Date.UTC(2017, 10, 16), 288.89],
			[Date.UTC(2017, 10, 16), 300.0],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 444.44],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 266.67],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 17), 300.0],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 288.89],
			[Date.UTC(2017, 10, 18), 344.44],
			[Date.UTC(2017, 10, 18), 355.56],
			[Date.UTC(2017, 10, 18), 244.44],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 288.89],
			[Date.UTC(2017, 10, 18), 333.33],
			[Date.UTC(2017, 10, 18), 433.33],
			[Date.UTC(2017, 10, 19), 244.44],
			[Date.UTC(2017, 10, 19), 266.67],
			[Date.UTC(2017, 10, 19), 266.67],
			[Date.UTC(2017, 10, 19), 266.67],
			[Date.UTC(2017, 10, 19), 288.89],
		]    }]
}