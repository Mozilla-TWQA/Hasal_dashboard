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
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 244.44],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 211.11],
			[Date.UTC(2017, 8, 28), 211.11],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 255.56],
			[Date.UTC(2017, 8, 28), 288.89],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 266.67],
			[Date.UTC(2017, 8, 28), 266.67],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 166.67],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 29), 255.56],
			[Date.UTC(2017, 8, 29), 277.78],
			[Date.UTC(2017, 8, 29), 300.0],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 211.11],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 244.44],
			[Date.UTC(2017, 8, 30), 255.56],
			[Date.UTC(2017, 8, 30), 277.78],
			[Date.UTC(2017, 9, 1), 188.89],
			[Date.UTC(2017, 9, 1), 188.89],
			[Date.UTC(2017, 9, 1), 200.0],
			[Date.UTC(2017, 9, 1), 211.11],
			[Date.UTC(2017, 9, 1), 222.22],
			[Date.UTC(2017, 9, 1), 233.33],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 244.44],
			[Date.UTC(2017, 9, 2), 255.56],
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 177.78],
			[Date.UTC(2017, 9, 2), 200.0],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 222.22],
			[Date.UTC(2017, 9, 2), 266.67],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 200.0],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 211.11],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 255.56],
			[Date.UTC(2017, 9, 4), 266.67],
			[Date.UTC(2017, 9, 4), 200.0],
			[Date.UTC(2017, 9, 4), 211.11],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 300.0],
			[Date.UTC(2017, 9, 4), 300.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 333.33],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 122.22],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 111.11],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 122.22],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 111.11],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 144.44],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 122.22],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 133.33],
			[Date.UTC(2017, 8, 30), 155.56],
			[Date.UTC(2017, 9, 1), 100.0],
			[Date.UTC(2017, 9, 1), 100.0],
			[Date.UTC(2017, 9, 1), 100.0],
			[Date.UTC(2017, 9, 1), 111.11],
			[Date.UTC(2017, 9, 1), 111.11],
			[Date.UTC(2017, 9, 1), 122.22],
			[Date.UTC(2017, 9, 1), 122.22],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 2), 133.33],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 111.11],
			[Date.UTC(2017, 9, 2), 122.22],
			[Date.UTC(2017, 9, 2), 133.33],
			[Date.UTC(2017, 9, 2), 155.56],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 111.11],
			[Date.UTC(2017, 9, 3), 111.11],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 133.33],
			[Date.UTC(2017, 9, 3), 133.33],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 111.11],
			[Date.UTC(2017, 9, 4), 111.11],
			[Date.UTC(2017, 9, 4), 111.11],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 177.78],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 122.22],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 233.33],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 255.56],
		]    }]
}