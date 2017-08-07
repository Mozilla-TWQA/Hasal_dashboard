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
			[Date.UTC(2017, 7, 5), 277.780000],
			[Date.UTC(2017, 7, 5), 355.560000],
			[Date.UTC(2017, 7, 5), 200.000000],
			[Date.UTC(2017, 7, 5), 233.330000],
			[Date.UTC(2017, 7, 5), 266.670000],
			[Date.UTC(2017, 7, 5), 288.890000],
			[Date.UTC(2017, 7, 5), 300.000000],
			[Date.UTC(2017, 7, 6), 188.890000],
			[Date.UTC(2017, 7, 6), 322.220000],
			[Date.UTC(2017, 7, 6), 366.670000],
			[Date.UTC(2017, 7, 6), 366.670000],
			[Date.UTC(2017, 7, 6), 400.000000],
			[Date.UTC(2017, 7, 6), 433.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 5), 244.440000],
			[Date.UTC(2017, 7, 5), 244.440000],
			[Date.UTC(2017, 7, 5), 255.560000],
			[Date.UTC(2017, 7, 5), 300.000000],
			[Date.UTC(2017, 7, 5), 211.110000],
			[Date.UTC(2017, 7, 5), 211.110000],
			[Date.UTC(2017, 7, 5), 266.670000],
			[Date.UTC(2017, 7, 5), 322.220000],
			[Date.UTC(2017, 7, 5), 633.330000],
			[Date.UTC(2017, 7, 6), 166.670000],
			[Date.UTC(2017, 7, 6), 177.780000],
			[Date.UTC(2017, 7, 6), 188.890000],
			[Date.UTC(2017, 7, 6), 244.440000],
			[Date.UTC(2017, 7, 6), 277.780000],
			[Date.UTC(2017, 7, 6), 300.000000],
		]    }]
}