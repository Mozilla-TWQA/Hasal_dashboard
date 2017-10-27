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
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 266.67],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 13), 322.22],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 277.78],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 244.44],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 266.67],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 255.56],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 266.67],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 15), 288.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 233.33],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 244.44],
			[Date.UTC(2017, 9, 16), 266.67],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 222.22],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 244.44],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 244.44],
			[Date.UTC(2017, 9, 18), 244.44],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 277.78],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 266.67],
			[Date.UTC(2017, 9, 20), 300.0],
			[Date.UTC(2017, 9, 20), 366.67],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 244.44],
			[Date.UTC(2017, 9, 21), 288.89],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 244.44],
			[Date.UTC(2017, 9, 22), 244.44],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 266.67],
			[Date.UTC(2017, 9, 23), 277.78],
			[Date.UTC(2017, 9, 24), 211.11],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 277.78],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 388.89],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 311.11],
			[Date.UTC(2017, 9, 25), 322.22],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 277.78],
			[Date.UTC(2017, 9, 25), 288.89],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 277.78],
			[Date.UTC(2017, 9, 26), 322.22],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 144.44],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 144.44],
			[Date.UTC(2017, 9, 15), 144.44],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 322.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 18), 111.11],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 21), 111.11],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 22), 111.11],
			[Date.UTC(2017, 9, 22), 122.22],
			[Date.UTC(2017, 9, 22), 122.22],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 144.44],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 155.56],
			[Date.UTC(2017, 9, 23), 233.33],
			[Date.UTC(2017, 9, 24), 122.22],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 155.56],
			[Date.UTC(2017, 9, 24), 200.0],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 111.11],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 144.44],
			[Date.UTC(2017, 9, 26), 144.44],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 144.44],
		]    }]
}