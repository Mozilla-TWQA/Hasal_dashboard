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
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 277.78],
			[Date.UTC(2017, 9, 29), 322.22],
			[Date.UTC(2017, 9, 29), 355.56],
			[Date.UTC(2017, 9, 29), 366.67],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 388.89],
			[Date.UTC(2017, 9, 29), 388.89],
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
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 9, 31), 333.33],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 288.89],
			[Date.UTC(2017, 9, 31), 600.0],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 277.78],
			[Date.UTC(2017, 10, 1), 411.11],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 300.0],
			[Date.UTC(2017, 10, 2), 333.33],
			[Date.UTC(2017, 10, 2), 388.89],
			[Date.UTC(2017, 10, 2), 433.33],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 355.56],
			[Date.UTC(2017, 10, 2), 366.67],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 288.89],
			[Date.UTC(2017, 10, 3), 311.11],
			[Date.UTC(2017, 10, 3), 511.11],
			[Date.UTC(2017, 10, 3), 633.33],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 377.78],
			[Date.UTC(2017, 10, 3), 388.89],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 344.44],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 322.22],
			[Date.UTC(2017, 10, 4), 366.67],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 288.89],
			[Date.UTC(2017, 9, 29), 288.89],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 244.44],
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
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 400.0],
			[Date.UTC(2017, 9, 31), 255.56],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 588.89],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 266.67],
			[Date.UTC(2017, 9, 31), 288.89],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 277.78],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 344.44],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 288.89],
			[Date.UTC(2017, 10, 2), 300.0],
			[Date.UTC(2017, 10, 2), 300.0],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 277.78],
			[Date.UTC(2017, 10, 3), 311.11],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 366.67],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 311.11],
			[Date.UTC(2017, 10, 4), 366.67],
			[Date.UTC(2017, 10, 4), 500.0],
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
		]    }]
}