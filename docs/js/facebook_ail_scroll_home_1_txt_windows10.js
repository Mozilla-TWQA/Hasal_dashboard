var facebook_ail_scroll_home_1_txt_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_scroll_home_1_txt_windows10'
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
			[Date.UTC(2017, 7, 23), 11.110000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 44.440000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 55.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 29), 55.560000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 44.440000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 5), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 11.110000],
			[Date.UTC(2017, 7, 26), 111.110000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 66.670000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 33.330000],
			[Date.UTC(2017, 7, 27), 44.440000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 8, 1), 22.220000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 44.440000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 3), 11.110000],
			[Date.UTC(2017, 8, 3), 11.110000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 5), 11.110000],
			[Date.UTC(2017, 8, 5), 11.110000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 66.670000],
		]    }]
}