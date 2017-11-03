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
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 244.44],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 200.0],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 244.44],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 23), 200.0],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 233.33],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 255.56],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 244.44],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 255.56],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
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
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 28), 211.11],
			[Date.UTC(2017, 9, 28), 211.11],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 211.11],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
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
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 366.67],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 255.56],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 277.78],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 233.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 21), 188.89],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 200.0],
			[Date.UTC(2017, 9, 23), 200.0],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 233.33],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 200.0],
			[Date.UTC(2017, 9, 24), 211.11],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 244.44],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 211.11],
			[Date.UTC(2017, 9, 28), 211.11],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 366.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 222.22],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 10, 1), 155.56],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 222.22],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 3), 188.89],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 211.11],
		]    }]
}