var facebook_ail_click_close_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows8'
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
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 16), 44.440000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 26), 44.440000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 66.670000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 27), 44.440000],
			[Date.UTC(2017, 7, 27), 44.440000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 77.780000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 21), 77.780000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 66.670000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 66.670000],
		]    }]
}