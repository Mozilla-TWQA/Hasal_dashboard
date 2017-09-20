var gmail_ail_compose_new_mail_via_keyboard_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows10'
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
			[Date.UTC(2017, 8, 6), 144.44],
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 8), 166.67],
			[Date.UTC(2017, 8, 8), 177.78],
			[Date.UTC(2017, 8, 8), 188.89],
			[Date.UTC(2017, 8, 8), 188.89],
			[Date.UTC(2017, 8, 8), 200.0],
			[Date.UTC(2017, 8, 8), 200.0],
			[Date.UTC(2017, 8, 8), 200.0],
			[Date.UTC(2017, 8, 9), 188.89],
			[Date.UTC(2017, 8, 9), 188.89],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 9), 222.22],
			[Date.UTC(2017, 8, 9), 666.67],
			[Date.UTC(2017, 8, 10), 177.78],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 11), 166.67],
			[Date.UTC(2017, 8, 11), 188.89],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 11), 477.78],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 13), 188.89],
			[Date.UTC(2017, 8, 13), 188.89],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 244.44],
			[Date.UTC(2017, 8, 13), 344.44],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 14), 522.22],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 233.33],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 311.11],
			[Date.UTC(2017, 8, 16), 166.67],
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
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
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
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 300.0],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 633.33],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 100.0],
			[Date.UTC(2017, 8, 6), 100.0],
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 100.0],
			[Date.UTC(2017, 8, 6), 100.0],
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 122.22],
			[Date.UTC(2017, 8, 6), 133.33],
			[Date.UTC(2017, 8, 8), 100.0],
			[Date.UTC(2017, 8, 8), 111.11],
			[Date.UTC(2017, 8, 8), 111.11],
			[Date.UTC(2017, 8, 8), 111.11],
			[Date.UTC(2017, 8, 8), 122.22],
			[Date.UTC(2017, 8, 8), 122.22],
			[Date.UTC(2017, 8, 8), 77.78],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 122.22],
			[Date.UTC(2017, 8, 9), 133.33],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 111.11],
			[Date.UTC(2017, 8, 10), 111.11],
			[Date.UTC(2017, 8, 11), 100.0],
			[Date.UTC(2017, 8, 11), 100.0],
			[Date.UTC(2017, 8, 11), 111.11],
			[Date.UTC(2017, 8, 11), 111.11],
			[Date.UTC(2017, 8, 11), 111.11],
			[Date.UTC(2017, 8, 11), 122.22],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 111.11],
			[Date.UTC(2017, 8, 12), 111.11],
			[Date.UTC(2017, 8, 12), 111.11],
			[Date.UTC(2017, 8, 12), 122.22],
			[Date.UTC(2017, 8, 12), 133.33],
			[Date.UTC(2017, 8, 13), 111.11],
			[Date.UTC(2017, 8, 13), 111.11],
			[Date.UTC(2017, 8, 13), 111.11],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 133.33],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 111.11],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 144.44],
			[Date.UTC(2017, 8, 15), 166.67],
			[Date.UTC(2017, 8, 15), 177.78],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 211.11],
			[Date.UTC(2017, 8, 15), 288.89],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 111.11],
			[Date.UTC(2017, 8, 18), 122.22],
			[Date.UTC(2017, 8, 18), 122.22],
			[Date.UTC(2017, 8, 18), 122.22],
			[Date.UTC(2017, 8, 18), 133.33],
		]    }]
}