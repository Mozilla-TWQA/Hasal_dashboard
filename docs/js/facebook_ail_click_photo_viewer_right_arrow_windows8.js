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
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 66.67],
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
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 88.89],
			[Date.UTC(2017, 9, 6), 88.89],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 88.89],
			[Date.UTC(2017, 9, 8), 100.0],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 77.78],
			[Date.UTC(2017, 9, 9), 88.89],
			[Date.UTC(2017, 9, 9), 88.89],
			[Date.UTC(2017, 9, 9), 88.89],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 88.89],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 77.78],
			[Date.UTC(2017, 9, 11), 77.78],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 12), 88.89],
			[Date.UTC(2017, 9, 12), 88.89],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 66.67],
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
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 9), 44.44],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 12), 55.56],
		]    }]
}