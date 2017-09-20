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
			[Date.UTC(2017, 8, 6), 188.89],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 6), 244.44],
			[Date.UTC(2017, 8, 8), 200.0],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 222.22],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 9), 200.0],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 222.22],
			[Date.UTC(2017, 8, 9), 222.22],
			[Date.UTC(2017, 8, 9), 222.22],
			[Date.UTC(2017, 8, 9), 255.56],
			[Date.UTC(2017, 8, 10), 211.11],
			[Date.UTC(2017, 8, 10), 211.11],
			[Date.UTC(2017, 8, 10), 222.22],
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 233.33],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 10), 255.56],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 11), 222.22],
			[Date.UTC(2017, 8, 11), 222.22],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 233.33],
			[Date.UTC(2017, 8, 11), 244.44],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 266.67],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 233.33],
			[Date.UTC(2017, 8, 13), 244.44],
			[Date.UTC(2017, 8, 13), 244.44],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 244.44],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 266.67],
			[Date.UTC(2017, 8, 14), 277.78],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
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
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 18), 266.67],
			[Date.UTC(2017, 8, 18), 266.67],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 277.78],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 355.56],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 6), 144.44],
			[Date.UTC(2017, 8, 6), 155.56],
			[Date.UTC(2017, 8, 6), 177.78],
			[Date.UTC(2017, 8, 6), 177.78],
			[Date.UTC(2017, 8, 8), 122.22],
			[Date.UTC(2017, 8, 8), 122.22],
			[Date.UTC(2017, 8, 8), 133.33],
			[Date.UTC(2017, 8, 8), 144.44],
			[Date.UTC(2017, 8, 8), 144.44],
			[Date.UTC(2017, 8, 8), 144.44],
			[Date.UTC(2017, 8, 8), 155.56],
			[Date.UTC(2017, 8, 8), 155.56],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 111.11],
			[Date.UTC(2017, 8, 9), 111.11],
			[Date.UTC(2017, 8, 9), 133.33],
			[Date.UTC(2017, 8, 9), 133.33],
			[Date.UTC(2017, 8, 9), 144.44],
			[Date.UTC(2017, 8, 9), 144.44],
			[Date.UTC(2017, 8, 9), 144.44],
			[Date.UTC(2017, 8, 9), 177.78],
			[Date.UTC(2017, 8, 10), 122.22],
			[Date.UTC(2017, 8, 10), 144.44],
			[Date.UTC(2017, 8, 10), 144.44],
			[Date.UTC(2017, 8, 10), 144.44],
			[Date.UTC(2017, 8, 10), 144.44],
			[Date.UTC(2017, 8, 10), 144.44],
			[Date.UTC(2017, 8, 10), 155.56],
			[Date.UTC(2017, 8, 10), 155.56],
			[Date.UTC(2017, 8, 10), 166.67],
			[Date.UTC(2017, 8, 11), 122.22],
			[Date.UTC(2017, 8, 11), 122.22],
			[Date.UTC(2017, 8, 11), 133.33],
			[Date.UTC(2017, 8, 11), 144.44],
			[Date.UTC(2017, 8, 11), 144.44],
			[Date.UTC(2017, 8, 11), 155.56],
			[Date.UTC(2017, 8, 11), 177.78],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 133.33],
			[Date.UTC(2017, 8, 12), 144.44],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 13), 111.11],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 133.33],
			[Date.UTC(2017, 8, 13), 133.33],
			[Date.UTC(2017, 8, 13), 144.44],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
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
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
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
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 18), 122.22],
			[Date.UTC(2017, 8, 18), 133.33],
			[Date.UTC(2017, 8, 18), 133.33],
			[Date.UTC(2017, 8, 18), 133.33],
			[Date.UTC(2017, 8, 18), 144.44],
			[Date.UTC(2017, 8, 18), 155.56],
			[Date.UTC(2017, 8, 18), 177.78],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 155.56],
		]    }]
}