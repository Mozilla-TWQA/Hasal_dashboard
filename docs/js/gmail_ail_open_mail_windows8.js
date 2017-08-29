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
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 444.440000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 266.670000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 366.670000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
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
			[Date.UTC(2017, 7, 20), 288.890000],
			[Date.UTC(2017, 7, 20), 366.670000],
			[Date.UTC(2017, 7, 20), 377.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 21), 244.440000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 22), 266.670000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 200.000000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 211.110000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 266.670000],
			[Date.UTC(2017, 7, 24), 266.670000],
			[Date.UTC(2017, 7, 25), 200.000000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 25), 255.560000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 222.220000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 222.220000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 288.890000],
			[Date.UTC(2017, 7, 28), 200.000000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 244.440000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 28), 266.670000],
			[Date.UTC(2017, 7, 29), 188.890000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 244.440000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 16), 188.890000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 16), 255.560000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
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
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 244.440000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 22), 166.670000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 233.330000],
			[Date.UTC(2017, 7, 22), 244.440000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 200.000000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 222.220000],
			[Date.UTC(2017, 7, 23), 244.440000],
			[Date.UTC(2017, 7, 24), 211.110000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 24), 288.890000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 211.110000],
			[Date.UTC(2017, 7, 26), 222.220000],
			[Date.UTC(2017, 7, 26), 255.560000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 211.110000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 28), 244.440000],
			[Date.UTC(2017, 7, 28), 255.560000],
			[Date.UTC(2017, 7, 29), 177.780000],
			[Date.UTC(2017, 7, 29), 177.780000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 255.560000],
		]    }]
}