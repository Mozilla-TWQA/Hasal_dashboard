var gmail_ail_type_in_reply_field_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_type_in_reply_field_windows10'
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
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 21), 11.11],
			[Date.UTC(2017, 8, 21), 22.22],
			[Date.UTC(2017, 8, 21), 22.22],
			[Date.UTC(2017, 8, 21), 22.22],
			[Date.UTC(2017, 8, 21), 22.22],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 22), 11.11],
			[Date.UTC(2017, 8, 22), 11.11],
			[Date.UTC(2017, 8, 22), 11.11],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 11.11],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 27), 11.11],
			[Date.UTC(2017, 8, 27), 11.11],
			[Date.UTC(2017, 8, 27), 11.11],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 11.11],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
		]    }]
}