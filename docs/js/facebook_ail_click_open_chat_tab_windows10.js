var facebook_ail_click_open_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows10'
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
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 111.110000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 23), 155.560000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 200.000000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 122.220000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 177.780000],
			[Date.UTC(2017, 7, 26), 188.890000],
			[Date.UTC(2017, 7, 27), 111.110000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 7, 31), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 100.000000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 11.110000],
			[Date.UTC(2017, 7, 22), 111.110000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 11.110000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 155.560000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 25), 122.220000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 155.560000],
			[Date.UTC(2017, 7, 25), 166.670000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 155.560000],
			[Date.UTC(2017, 7, 27), 166.670000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 77.780000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 66.670000],
		]    }]
}