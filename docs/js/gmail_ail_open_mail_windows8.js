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
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 188.89],
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
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 555.56],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 244.44],
			[Date.UTC(2017, 8, 21), 255.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 233.33],
			[Date.UTC(2017, 8, 23), 233.33],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 24), 233.33],
			[Date.UTC(2017, 8, 24), 244.44],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 25), 244.44],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 233.33],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 200.0],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 27), 211.11],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 28), 233.33],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 200.0],
			[Date.UTC(2017, 8, 29), 211.11],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 233.33],
			[Date.UTC(2017, 8, 30), 266.67],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 9, 1), 188.89],
			[Date.UTC(2017, 9, 1), 211.11],
			[Date.UTC(2017, 9, 1), 222.22],
			[Date.UTC(2017, 9, 1), 244.44],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 18), 211.11],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 222.22],
			[Date.UTC(2017, 8, 18), 244.44],
			[Date.UTC(2017, 8, 18), 255.56],
			[Date.UTC(2017, 8, 18), 544.44],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 211.11],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 211.11],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 300.0],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 23), 122.22],
			[Date.UTC(2017, 8, 23), 166.67],
			[Date.UTC(2017, 8, 23), 166.67],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 188.89],
			[Date.UTC(2017, 8, 23), 200.0],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 211.11],
			[Date.UTC(2017, 8, 23), 222.22],
			[Date.UTC(2017, 8, 23), 233.33],
			[Date.UTC(2017, 8, 23), 244.44],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 177.78],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 188.89],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 200.0],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 211.11],
			[Date.UTC(2017, 8, 24), 222.22],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 188.89],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 211.11],
			[Date.UTC(2017, 8, 26), 222.22],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 27), 177.78],
			[Date.UTC(2017, 8, 27), 188.89],
			[Date.UTC(2017, 8, 27), 188.89],
			[Date.UTC(2017, 8, 27), 200.0],
			[Date.UTC(2017, 8, 27), 211.11],
			[Date.UTC(2017, 8, 27), 222.22],
			[Date.UTC(2017, 8, 28), 166.67],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 188.89],
			[Date.UTC(2017, 8, 28), 200.0],
			[Date.UTC(2017, 8, 28), 211.11],
			[Date.UTC(2017, 8, 28), 222.22],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 177.78],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 188.89],
			[Date.UTC(2017, 8, 29), 222.22],
			[Date.UTC(2017, 8, 29), 233.33],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 177.78],
			[Date.UTC(2017, 8, 30), 188.89],
			[Date.UTC(2017, 8, 30), 200.0],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 8, 30), 166.67],
			[Date.UTC(2017, 8, 30), 222.22],
			[Date.UTC(2017, 9, 1), 188.89],
			[Date.UTC(2017, 9, 1), 188.89],
		]    }]
}