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
			[Date.UTC(2017, 8, 10), 177.78],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 266.67],
			[Date.UTC(2017, 8, 11), 188.89],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 11), 311.11],
			[Date.UTC(2017, 8, 11), 355.56],
			[Date.UTC(2017, 8, 11), 466.67],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 244.44],
			[Date.UTC(2017, 8, 12), 255.56],
			[Date.UTC(2017, 8, 13), 177.78],
			[Date.UTC(2017, 8, 13), 188.89],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 244.44],
			[Date.UTC(2017, 8, 13), 277.78],
			[Date.UTC(2017, 8, 13), 277.78],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 311.11],
			[Date.UTC(2017, 8, 14), 400.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 177.78],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 277.78],
			[Date.UTC(2017, 8, 15), 300.0],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
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
			[Date.UTC(2017, 8, 16), 211.11],
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
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 255.56],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 288.89],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 300.0],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 311.11],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 355.56],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
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
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 288.89],
			[Date.UTC(2017, 8, 17), 300.0],
			[Date.UTC(2017, 8, 17), 300.0],
			[Date.UTC(2017, 8, 17), 300.0],
			[Date.UTC(2017, 8, 17), 311.11],
			[Date.UTC(2017, 8, 17), 333.33],
			[Date.UTC(2017, 8, 17), 355.56],
			[Date.UTC(2017, 8, 18), 188.89],
			[Date.UTC(2017, 8, 18), 233.33],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 277.78],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 511.11],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 700.0],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 188.89],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 266.67],
			[Date.UTC(2017, 8, 21), 300.0],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 333.33],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 23), 211.11],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 10), 133.33],
			[Date.UTC(2017, 8, 10), 177.78],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 188.89],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 222.22],
			[Date.UTC(2017, 8, 11), 144.44],
			[Date.UTC(2017, 8, 11), 155.56],
			[Date.UTC(2017, 8, 11), 177.78],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 11), 211.11],
			[Date.UTC(2017, 8, 12), 133.33],
			[Date.UTC(2017, 8, 12), 144.44],
			[Date.UTC(2017, 8, 12), 144.44],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 388.89],
			[Date.UTC(2017, 8, 12), 133.33],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 222.22],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 255.56],
			[Date.UTC(2017, 8, 12), 355.56],
			[Date.UTC(2017, 8, 13), 177.78],
			[Date.UTC(2017, 8, 13), 188.89],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 188.89],
			[Date.UTC(2017, 8, 14), 188.89],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 15), 166.67],
			[Date.UTC(2017, 8, 15), 177.78],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 166.67],
			[Date.UTC(2017, 8, 15), 166.67],
			[Date.UTC(2017, 8, 15), 177.78],
			[Date.UTC(2017, 8, 15), 177.78],
			[Date.UTC(2017, 8, 15), 177.78],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 188.89],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 211.11],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 244.44],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 266.67],
			[Date.UTC(2017, 8, 15), 266.67],
			[Date.UTC(2017, 8, 15), 266.67],
			[Date.UTC(2017, 8, 15), 266.67],
			[Date.UTC(2017, 8, 15), 311.11],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 244.44],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 266.67],
			[Date.UTC(2017, 8, 17), 300.0],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 222.22],
			[Date.UTC(2017, 8, 19), 244.44],
			[Date.UTC(2017, 8, 19), 266.67],
			[Date.UTC(2017, 8, 19), 288.89],
			[Date.UTC(2017, 8, 20), 144.44],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 388.89],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 200.0],
			[Date.UTC(2017, 8, 20), 211.11],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 233.33],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 255.56],
			[Date.UTC(2017, 8, 20), 300.0],
			[Date.UTC(2017, 8, 20), 344.44],
			[Date.UTC(2017, 8, 20), 400.0],
			[Date.UTC(2017, 8, 21), 155.56],
			[Date.UTC(2017, 8, 21), 166.67],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 177.78],
			[Date.UTC(2017, 8, 21), 200.0],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 222.22],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 233.33],
			[Date.UTC(2017, 8, 21), 322.22],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 233.33],
			[Date.UTC(2017, 8, 22), 133.33],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 188.89],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 22), 200.0],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 188.89],
		]    }]
}