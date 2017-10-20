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
			[Date.UTC(2017, 9, 6), 100.0],
			[Date.UTC(2017, 9, 6), 133.33],
			[Date.UTC(2017, 9, 6), 322.22],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 100.0],
			[Date.UTC(2017, 9, 8), 144.44],
			[Date.UTC(2017, 9, 8), 144.44],
			[Date.UTC(2017, 9, 8), 155.56],
			[Date.UTC(2017, 9, 8), 188.89],
			[Date.UTC(2017, 9, 9), 100.0],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 100.0],
			[Date.UTC(2017, 9, 9), 100.0],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 144.44],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 144.44],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 155.56],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 11), 100.0],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 155.56],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 16), 100.0],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 155.56],
			[Date.UTC(2017, 9, 17), 100.0],
			[Date.UTC(2017, 9, 17), 111.11],
			[Date.UTC(2017, 9, 17), 111.11],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 166.67],
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
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 177.78],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 6), 100.0],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 88.89],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 8), 100.0],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 8), 100.0],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 88.89],
			[Date.UTC(2017, 9, 9), 88.89],
			[Date.UTC(2017, 9, 9), 100.0],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 88.89],
			[Date.UTC(2017, 9, 10), 100.0],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 100.0],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 88.89],
			[Date.UTC(2017, 9, 11), 100.0],
			[Date.UTC(2017, 9, 11), 100.0],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 77.78],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 12), 100.0],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 12), 100.0],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 77.78],
			[Date.UTC(2017, 9, 13), 88.89],
			[Date.UTC(2017, 9, 13), 88.89],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 88.89],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 16), 100.0],
			[Date.UTC(2017, 9, 16), 100.0],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 88.89],
			[Date.UTC(2017, 9, 17), 100.0],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 77.78],
			[Date.UTC(2017, 9, 17), 111.11],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 77.78],
			[Date.UTC(2017, 9, 17), 77.78],
			[Date.UTC(2017, 9, 17), 88.89],
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
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 122.22],
		]    }]
}