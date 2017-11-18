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
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 633.33],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 122.22],
			[Date.UTC(2017, 10, 9), 88.89],
			[Date.UTC(2017, 10, 9), 88.89],
			[Date.UTC(2017, 10, 9), 88.89],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 111.11],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 12), 100.0],
			[Date.UTC(2017, 10, 12), 100.0],
			[Date.UTC(2017, 10, 12), 111.11],
			[Date.UTC(2017, 10, 12), 111.11],
			[Date.UTC(2017, 10, 12), 111.11],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 111.11],
			[Date.UTC(2017, 10, 13), 111.11],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 111.11],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 111.11],
			[Date.UTC(2017, 10, 16), 111.11],
			[Date.UTC(2017, 10, 16), 111.11],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 88.89],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 9), 55.56],
			[Date.UTC(2017, 10, 9), 55.56],
			[Date.UTC(2017, 10, 9), 55.56],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 66.67],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 77.78],
			[Date.UTC(2017, 10, 12), 77.78],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 55.56],
			[Date.UTC(2017, 10, 13), 55.56],
			[Date.UTC(2017, 10, 13), 55.56],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 16), 55.56],
			[Date.UTC(2017, 10, 16), 55.56],
			[Date.UTC(2017, 10, 16), 66.67],
			[Date.UTC(2017, 10, 16), 66.67],
			[Date.UTC(2017, 10, 16), 66.67],
			[Date.UTC(2017, 10, 16), 66.67],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 77.78],
			[Date.UTC(2017, 10, 17), 77.78],
		]    }]
}