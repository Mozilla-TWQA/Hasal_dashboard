var gmail_ail_compose_new_mail_via_keyboard_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows8'
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
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 522.22],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 188.89],
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
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 288.89],
			[Date.UTC(2017, 10, 7), 322.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
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
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 322.22],
			[Date.UTC(2017, 10, 8), 355.56],
			[Date.UTC(2017, 10, 8), 355.56],
			[Date.UTC(2017, 10, 8), 366.67],
			[Date.UTC(2017, 10, 8), 400.0],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 222.22],
			[Date.UTC(2017, 10, 9), 222.22],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 9), 277.78],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 10), 255.56],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 200.0],
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
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 255.56],
			[Date.UTC(2017, 10, 12), 255.56],
			[Date.UTC(2017, 10, 12), 255.56],
			[Date.UTC(2017, 10, 12), 266.67],
			[Date.UTC(2017, 10, 12), 288.89],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 500.0],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 400.0],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 16), 211.11],
			[Date.UTC(2017, 10, 16), 244.44],
			[Date.UTC(2017, 10, 16), 255.56],
			[Date.UTC(2017, 10, 16), 255.56],
			[Date.UTC(2017, 10, 16), 288.89],
			[Date.UTC(2017, 10, 16), 288.89],
			[Date.UTC(2017, 10, 17), 188.89],
			[Date.UTC(2017, 10, 17), 200.0],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 244.44],
			[Date.UTC(2017, 10, 17), 244.44],
			[Date.UTC(2017, 10, 17), 244.44],
			[Date.UTC(2017, 10, 17), 266.67],
			[Date.UTC(2017, 10, 18), 222.22],
			[Date.UTC(2017, 10, 18), 244.44],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
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
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
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
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
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
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
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
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 10), 122.22],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 144.44],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 16), 111.11],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 133.33],
			[Date.UTC(2017, 10, 17), 133.33],
			[Date.UTC(2017, 10, 17), 133.33],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 122.22],
			[Date.UTC(2017, 10, 18), 133.33],
			[Date.UTC(2017, 10, 18), 133.33],
		]    }]
}