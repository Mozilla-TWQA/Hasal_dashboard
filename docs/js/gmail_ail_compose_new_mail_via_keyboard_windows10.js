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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 12), 222.22],
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
		]    }]
}