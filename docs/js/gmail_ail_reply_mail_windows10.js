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
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 311.110000],
			[Date.UTC(2017, 7, 17), 311.110000],
			[Date.UTC(2017, 7, 17), 333.330000],
			[Date.UTC(2017, 7, 17), 422.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 344.440000],
			[Date.UTC(2017, 7, 18), 366.670000],
			[Date.UTC(2017, 7, 18), 366.670000],
			[Date.UTC(2017, 7, 18), 366.670000],
			[Date.UTC(2017, 7, 18), 366.670000],
			[Date.UTC(2017, 7, 18), 377.780000],
			[Date.UTC(2017, 7, 18), 388.890000],
			[Date.UTC(2017, 7, 18), 388.890000],
			[Date.UTC(2017, 7, 18), 400.000000],
			[Date.UTC(2017, 7, 18), 444.440000],
			[Date.UTC(2017, 7, 18), 555.560000],
			[Date.UTC(2017, 7, 18), 555.560000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 311.110000],
			[Date.UTC(2017, 7, 19), 311.110000],
			[Date.UTC(2017, 7, 19), 333.330000],
			[Date.UTC(2017, 7, 19), 344.440000],
			[Date.UTC(2017, 7, 19), 355.560000],
			[Date.UTC(2017, 7, 19), 388.890000],
			[Date.UTC(2017, 7, 19), 388.890000],
			[Date.UTC(2017, 7, 19), 444.440000],
			[Date.UTC(2017, 7, 19), 622.220000],
			[Date.UTC(2017, 7, 19), 633.330000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 333.330000],
			[Date.UTC(2017, 7, 20), 344.440000],
			[Date.UTC(2017, 7, 20), 355.560000],
			[Date.UTC(2017, 7, 20), 366.670000],
			[Date.UTC(2017, 7, 20), 388.890000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 300.000000],
			[Date.UTC(2017, 7, 21), 344.440000],
			[Date.UTC(2017, 7, 21), 377.780000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 288.890000],
			[Date.UTC(2017, 7, 22), 333.330000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 300.000000],
			[Date.UTC(2017, 7, 23), 355.560000],
			[Date.UTC(2017, 7, 23), 366.670000],
			[Date.UTC(2017, 7, 23), 455.560000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 266.670000],
			[Date.UTC(2017, 7, 24), 277.780000],
			[Date.UTC(2017, 7, 24), 288.890000],
			[Date.UTC(2017, 7, 24), 366.670000],
			[Date.UTC(2017, 7, 24), 377.780000],
			[Date.UTC(2017, 7, 24), 377.780000],
			[Date.UTC(2017, 7, 24), 388.890000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 25), 300.000000],
			[Date.UTC(2017, 7, 25), 311.110000],
			[Date.UTC(2017, 7, 25), 333.330000],
			[Date.UTC(2017, 7, 25), 555.560000],
			[Date.UTC(2017, 7, 26), 333.330000],
			[Date.UTC(2017, 7, 26), 333.330000],
			[Date.UTC(2017, 7, 26), 333.330000],
			[Date.UTC(2017, 7, 26), 333.330000],
			[Date.UTC(2017, 7, 26), 344.440000],
			[Date.UTC(2017, 7, 26), 377.780000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 277.780000],
			[Date.UTC(2017, 7, 27), 344.440000],
			[Date.UTC(2017, 7, 27), 355.560000],
			[Date.UTC(2017, 7, 27), 366.670000],
			[Date.UTC(2017, 7, 27), 377.780000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 266.670000],
			[Date.UTC(2017, 7, 29), 222.220000],
			[Date.UTC(2017, 7, 29), 233.330000],
			[Date.UTC(2017, 7, 29), 233.330000],
			[Date.UTC(2017, 7, 29), 255.560000],
			[Date.UTC(2017, 7, 29), 255.560000],
			[Date.UTC(2017, 7, 29), 277.780000],
			[Date.UTC(2017, 7, 30), 233.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 20), 111.110000],
			[Date.UTC(2017, 7, 20), 122.220000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 166.670000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 23), 122.220000],
			[Date.UTC(2017, 7, 23), 133.330000],
			[Date.UTC(2017, 7, 23), 133.330000],
			[Date.UTC(2017, 7, 23), 166.670000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 24), 111.110000],
			[Date.UTC(2017, 7, 24), 111.110000],
			[Date.UTC(2017, 7, 24), 122.220000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 155.560000],
			[Date.UTC(2017, 7, 24), 166.670000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 122.220000],
			[Date.UTC(2017, 7, 25), 122.220000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 255.560000],
			[Date.UTC(2017, 7, 28), 111.110000],
			[Date.UTC(2017, 7, 28), 111.110000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 133.330000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 155.560000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 122.220000],
			[Date.UTC(2017, 7, 29), 133.330000],
			[Date.UTC(2017, 7, 29), 144.440000],
			[Date.UTC(2017, 7, 29), 155.560000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 155.560000],
		]    }]
}