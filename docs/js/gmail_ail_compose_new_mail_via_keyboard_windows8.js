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
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 244.44],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 555.56],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 222.22],
			[Date.UTC(2017, 9, 18), 222.22],
			[Date.UTC(2017, 9, 18), 255.56],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 333.33],
			[Date.UTC(2017, 9, 18), 244.44],
			[Date.UTC(2017, 9, 18), 288.89],
			[Date.UTC(2017, 9, 18), 488.89],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 200.0],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 244.44],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 19), 255.56],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 266.67],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 20), 200.0],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 222.22],
			[Date.UTC(2017, 9, 22), 222.22],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 200.0],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 255.56],
			[Date.UTC(2017, 9, 23), 311.11],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 266.67],
			[Date.UTC(2017, 9, 24), 266.67],
			[Date.UTC(2017, 9, 24), 244.44],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 288.89],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 255.56],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 88.89],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 144.44],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 144.44],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 21), 111.11],
			[Date.UTC(2017, 9, 21), 111.11],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 22), 111.11],
			[Date.UTC(2017, 9, 22), 111.11],
			[Date.UTC(2017, 9, 22), 122.22],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 144.44],
			[Date.UTC(2017, 9, 22), 144.44],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 23), 111.11],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 155.56],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 144.44],
			[Date.UTC(2017, 9, 23), 144.44],
			[Date.UTC(2017, 9, 24), 111.11],
			[Date.UTC(2017, 9, 24), 111.11],
			[Date.UTC(2017, 9, 24), 122.22],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 144.44],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 26), 111.11],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 144.44],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 133.33],
			[Date.UTC(2017, 9, 28), 133.33],
			[Date.UTC(2017, 9, 28), 144.44],
			[Date.UTC(2017, 9, 28), 144.44],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 111.11],
			[Date.UTC(2017, 9, 29), 111.11],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
		]    }]
}