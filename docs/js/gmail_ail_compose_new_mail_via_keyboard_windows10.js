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
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
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
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 311.11],
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
			[Date.UTC(2017, 8, 18), 188.89],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 18), 211.11],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 333.33],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 255.56],
			[Date.UTC(2017, 8, 25), 355.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 233.33],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 255.56],
			[Date.UTC(2017, 8, 27), 188.89],
			[Date.UTC(2017, 8, 27), 188.89],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 244.44],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 8, 19), 111.11],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 111.11],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 111.11],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 111.11],
			[Date.UTC(2017, 8, 21), 122.22],
			[Date.UTC(2017, 8, 21), 122.22],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 111.11],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 111.11],
			[Date.UTC(2017, 8, 23), 111.11],
			[Date.UTC(2017, 8, 23), 122.22],
			[Date.UTC(2017, 8, 23), 133.33],
			[Date.UTC(2017, 8, 23), 144.44],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 111.11],
			[Date.UTC(2017, 8, 24), 111.11],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 111.11],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 155.56],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 27), 100.0],
			[Date.UTC(2017, 8, 27), 111.11],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
		]    }]
}