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
			[Date.UTC(2017, 9, 18), 111.11],
			[Date.UTC(2017, 9, 18), 111.11],
			[Date.UTC(2017, 9, 18), 111.11],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 144.44],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 177.78],
			[Date.UTC(2017, 9, 19), 188.89],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 177.78],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 166.67],
			[Date.UTC(2017, 9, 22), 144.44],
			[Date.UTC(2017, 9, 22), 155.56],
			[Date.UTC(2017, 9, 22), 155.56],
			[Date.UTC(2017, 9, 22), 155.56],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 200.0],
			[Date.UTC(2017, 9, 23), 144.44],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 144.44],
			[Date.UTC(2017, 9, 24), 155.56],
			[Date.UTC(2017, 9, 24), 155.56],
			[Date.UTC(2017, 9, 24), 166.67],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 200.0],
			[Date.UTC(2017, 9, 25), 111.11],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 155.56],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 111.11],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 133.33],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 133.33],
			[Date.UTC(2017, 9, 28), 144.44],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 200.0],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 122.22],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 66.67],
			[Date.UTC(2017, 9, 18), 66.67],
			[Date.UTC(2017, 9, 18), 77.78],
			[Date.UTC(2017, 9, 18), 77.78],
			[Date.UTC(2017, 9, 18), 77.78],
			[Date.UTC(2017, 9, 18), 77.78],
			[Date.UTC(2017, 9, 18), 77.78],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 20), 100.0],
			[Date.UTC(2017, 9, 20), 100.0],
			[Date.UTC(2017, 9, 20), 100.0],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 88.89],
			[Date.UTC(2017, 9, 20), 88.89],
			[Date.UTC(2017, 9, 20), 111.11],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 21), 100.0],
			[Date.UTC(2017, 9, 21), 100.0],
			[Date.UTC(2017, 9, 21), 111.11],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 77.78],
			[Date.UTC(2017, 9, 21), 88.89],
			[Date.UTC(2017, 9, 21), 100.0],
			[Date.UTC(2017, 9, 21), 100.0],
			[Date.UTC(2017, 9, 21), 100.0],
			[Date.UTC(2017, 9, 21), 77.78],
			[Date.UTC(2017, 9, 22), 100.0],
			[Date.UTC(2017, 9, 22), 100.0],
			[Date.UTC(2017, 9, 22), 111.11],
			[Date.UTC(2017, 9, 22), 77.78],
			[Date.UTC(2017, 9, 22), 77.78],
			[Date.UTC(2017, 9, 22), 77.78],
			[Date.UTC(2017, 9, 23), 100.0],
			[Date.UTC(2017, 9, 23), 100.0],
			[Date.UTC(2017, 9, 23), 100.0],
			[Date.UTC(2017, 9, 23), 77.78],
			[Date.UTC(2017, 9, 23), 77.78],
			[Date.UTC(2017, 9, 23), 77.78],
			[Date.UTC(2017, 9, 23), 88.89],
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 24), 111.11],
			[Date.UTC(2017, 9, 24), 55.56],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 24), 88.89],
			[Date.UTC(2017, 9, 25), 111.11],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 88.89],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 77.78],
			[Date.UTC(2017, 9, 28), 77.78],
			[Date.UTC(2017, 9, 28), 88.89],
			[Date.UTC(2017, 9, 28), 88.89],
			[Date.UTC(2017, 9, 28), 88.89],
			[Date.UTC(2017, 9, 28), 77.78],
			[Date.UTC(2017, 9, 28), 88.89],
			[Date.UTC(2017, 9, 28), 88.89],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 88.89],
			[Date.UTC(2017, 9, 29), 88.89],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
		]    }]
}