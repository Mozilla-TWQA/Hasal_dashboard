var gmail_ail_reply_mail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows10'
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
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 233.330000],
			[Date.UTC(2017, 8, 5), 244.440000],
			[Date.UTC(2017, 8, 5), 244.440000],
			[Date.UTC(2017, 8, 5), 277.780000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 211.110000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 244.440000],
			[Date.UTC(2017, 8, 7), 244.440000],
			[Date.UTC(2017, 8, 7), 255.560000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 244.440000],
			[Date.UTC(2017, 8, 8), 244.440000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 233.330000],
			[Date.UTC(2017, 8, 9), 233.330000],
			[Date.UTC(2017, 8, 9), 244.440000],
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 222.220000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 11), 222.220000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 255.560000],
			[Date.UTC(2017, 8, 11), 255.560000],
			[Date.UTC(2017, 8, 11), 266.670000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 233.330000],
			[Date.UTC(2017, 8, 12), 244.440000],
			[Date.UTC(2017, 8, 12), 277.780000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 233.330000],
			[Date.UTC(2017, 8, 13), 244.440000],
			[Date.UTC(2017, 8, 13), 244.440000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 244.440000],
			[Date.UTC(2017, 8, 14), 244.440000],
			[Date.UTC(2017, 8, 14), 244.440000],
			[Date.UTC(2017, 8, 14), 255.560000],
			[Date.UTC(2017, 8, 14), 255.560000],
			[Date.UTC(2017, 8, 15), 211.110000],
			[Date.UTC(2017, 8, 15), 233.330000],
			[Date.UTC(2017, 8, 15), 244.440000],
			[Date.UTC(2017, 8, 15), 244.440000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 17), 311.110000],
			[Date.UTC(2017, 8, 17), 344.440000],
			[Date.UTC(2017, 8, 17), 355.560000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 244.440000],
			[Date.UTC(2017, 8, 18), 244.440000],
			[Date.UTC(2017, 8, 18), 255.560000],
			[Date.UTC(2017, 8, 18), 266.670000],
			[Date.UTC(2017, 8, 18), 344.440000],
			[Date.UTC(2017, 8, 18), 344.440000],
			[Date.UTC(2017, 8, 18), 344.440000],
			[Date.UTC(2017, 8, 18), 366.670000],
			[Date.UTC(2017, 8, 18), 688.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 133.330000],
			[Date.UTC(2017, 8, 5), 155.560000],
			[Date.UTC(2017, 8, 5), 155.560000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 155.560000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 122.220000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 144.440000],
			[Date.UTC(2017, 8, 7), 166.670000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 133.330000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 122.220000],
			[Date.UTC(2017, 8, 9), 122.220000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 111.110000],
			[Date.UTC(2017, 8, 10), 122.220000],
			[Date.UTC(2017, 8, 11), 111.110000],
			[Date.UTC(2017, 8, 11), 111.110000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 111.110000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 155.560000],
			[Date.UTC(2017, 8, 12), 166.670000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 13), 155.560000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 111.110000],
			[Date.UTC(2017, 8, 14), 122.220000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 133.330000],
			[Date.UTC(2017, 8, 14), 155.560000],
			[Date.UTC(2017, 8, 15), 122.220000],
			[Date.UTC(2017, 8, 16), 111.110000],
			[Date.UTC(2017, 8, 16), 111.110000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 16), 133.330000],
			[Date.UTC(2017, 8, 16), 200.000000],
			[Date.UTC(2017, 8, 16), 200.000000],
			[Date.UTC(2017, 8, 16), 222.220000],
			[Date.UTC(2017, 8, 16), 233.330000],
			[Date.UTC(2017, 8, 16), 233.330000],
			[Date.UTC(2017, 8, 17), 111.110000],
			[Date.UTC(2017, 8, 17), 111.110000],
			[Date.UTC(2017, 8, 17), 122.220000],
			[Date.UTC(2017, 8, 17), 122.220000],
			[Date.UTC(2017, 8, 17), 177.780000],
			[Date.UTC(2017, 8, 17), 222.220000],
			[Date.UTC(2017, 8, 17), 233.330000],
			[Date.UTC(2017, 8, 18), 100.000000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 144.440000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 222.220000],
			[Date.UTC(2017, 8, 18), 233.330000],
			[Date.UTC(2017, 8, 18), 233.330000],
		]    }]
}