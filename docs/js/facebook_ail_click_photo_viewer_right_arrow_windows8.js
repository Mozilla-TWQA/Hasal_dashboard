var facebook_ail_click_photo_viewer_right_arrow_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_photo_viewer_right_arrow_windows8'
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
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 77.78],
			[Date.UTC(2017, 9, 1), 77.78],
			[Date.UTC(2017, 9, 1), 88.89],
			[Date.UTC(2017, 9, 1), 88.89],
			[Date.UTC(2017, 9, 1), 100.0],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 77.78],
			[Date.UTC(2017, 9, 1), 77.78],
			[Date.UTC(2017, 9, 1), 88.89],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 3), 88.89],
			[Date.UTC(2017, 9, 3), 88.89],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
		]    }]
}