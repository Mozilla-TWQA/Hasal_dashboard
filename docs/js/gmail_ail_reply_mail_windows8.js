var gmail_ail_reply_mail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_reply_mail_windows8'
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
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 244.440000],
			[Date.UTC(2017, 7, 16), 255.560000],
			[Date.UTC(2017, 7, 16), 255.560000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 255.560000],
			[Date.UTC(2017, 7, 17), 277.780000],
			[Date.UTC(2017, 7, 17), 277.780000],
			[Date.UTC(2017, 7, 17), 288.890000],
			[Date.UTC(2017, 7, 17), 300.000000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 322.220000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 300.000000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 255.560000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 22), 277.780000],
			[Date.UTC(2017, 7, 22), 277.780000],
			[Date.UTC(2017, 7, 22), 277.780000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 255.560000],
			[Date.UTC(2017, 7, 23), 277.780000],
			[Date.UTC(2017, 7, 24), 277.780000],
			[Date.UTC(2017, 7, 24), 288.890000],
			[Date.UTC(2017, 7, 24), 288.890000],
			[Date.UTC(2017, 7, 24), 300.000000],
			[Date.UTC(2017, 7, 24), 300.000000],
			[Date.UTC(2017, 7, 24), 322.220000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 25), 277.780000],
			[Date.UTC(2017, 7, 25), 311.110000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 26), 266.670000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 27), 255.560000],
			[Date.UTC(2017, 7, 27), 288.890000],
			[Date.UTC(2017, 7, 27), 300.000000],
			[Date.UTC(2017, 7, 27), 322.220000],
			[Date.UTC(2017, 7, 27), 333.330000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 244.440000],
			[Date.UTC(2017, 7, 28), 244.440000],
			[Date.UTC(2017, 7, 28), 266.670000],
			[Date.UTC(2017, 7, 28), 266.670000],
			[Date.UTC(2017, 7, 28), 288.890000],
			[Date.UTC(2017, 7, 29), 255.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 16), 188.890000],
			[Date.UTC(2017, 7, 16), 188.890000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 133.330000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 21), 144.440000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 166.670000],
			[Date.UTC(2017, 7, 21), 166.670000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 144.440000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 23), 122.220000],
			[Date.UTC(2017, 7, 23), 155.560000],
			[Date.UTC(2017, 7, 23), 155.560000],
			[Date.UTC(2017, 7, 23), 166.670000],
			[Date.UTC(2017, 7, 23), 177.780000],
			[Date.UTC(2017, 7, 23), 177.780000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 188.890000],
			[Date.UTC(2017, 7, 24), 188.890000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 200.000000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 177.780000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 166.670000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 28), 144.440000],
			[Date.UTC(2017, 7, 28), 155.560000],
			[Date.UTC(2017, 7, 28), 155.560000],
			[Date.UTC(2017, 7, 28), 166.670000],
			[Date.UTC(2017, 7, 28), 177.780000],
			[Date.UTC(2017, 7, 28), 177.780000],
			[Date.UTC(2017, 7, 28), 177.780000],
			[Date.UTC(2017, 7, 28), 188.890000],
		]    }]
}