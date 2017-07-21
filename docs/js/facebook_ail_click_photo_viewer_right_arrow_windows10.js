var facebook_ail_click_photo_viewer_right_arrow_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_photo_viewer_right_arrow_windows10'
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
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 9), 177.780000],
			[Date.UTC(2017, 7, 9), 44.440000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 10), 144.440000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 11), 100.000000],
			[Date.UTC(2017, 7, 11), 255.560000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 12), 211.110000],
			[Date.UTC(2017, 7, 13), 122.220000],
			[Date.UTC(2017, 7, 13), 200.000000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 14), 122.220000],
			[Date.UTC(2017, 7, 14), 133.330000],
			[Date.UTC(2017, 7, 14), 155.560000],
			[Date.UTC(2017, 7, 14), 188.890000],
			[Date.UTC(2017, 7, 14), 311.110000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 144.440000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 388.890000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 155.560000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 55.560000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 155.560000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 66.670000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 122.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 9), 144.440000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 13), 100.000000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 14), 100.000000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 55.560000],
			[Date.UTC(2017, 7, 14), 55.560000],
			[Date.UTC(2017, 7, 14), 88.890000],
			[Date.UTC(2017, 7, 15), 111.110000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 66.670000],
			[Date.UTC(2017, 7, 16), 77.780000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 111.110000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 55.560000],
		]    }]
}