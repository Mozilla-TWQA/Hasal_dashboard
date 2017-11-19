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
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 522.22],
			[Date.UTC(2017, 10, 9), 122.22],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 144.44],
			[Date.UTC(2017, 10, 9), 144.44],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 10), 122.22],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 10), 188.89],
			[Date.UTC(2017, 10, 10), 188.89],
			[Date.UTC(2017, 10, 10), 188.89],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 12), 200.0],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 333.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 144.44],
			[Date.UTC(2017, 10, 16), 144.44],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 200.0],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 366.67],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 177.78],
			[Date.UTC(2017, 10, 18), 177.78],
			[Date.UTC(2017, 10, 18), 188.89],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 177.78],
			[Date.UTC(2017, 10, 18), 211.11],
			[Date.UTC(2017, 10, 18), 277.78],
			[Date.UTC(2017, 10, 18), 500.0],
			[Date.UTC(2017, 10, 19), 155.56],
			[Date.UTC(2017, 10, 19), 166.67],
			[Date.UTC(2017, 10, 19), 177.78],
			[Date.UTC(2017, 10, 19), 200.0],
			[Date.UTC(2017, 10, 19), 566.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 66.67],
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
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 111.11],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
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
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 111.11],
			[Date.UTC(2017, 10, 9), 111.11],
			[Date.UTC(2017, 10, 9), 77.78],
			[Date.UTC(2017, 10, 9), 77.78],
			[Date.UTC(2017, 10, 9), 77.78],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 12), 100.0],
			[Date.UTC(2017, 10, 12), 100.0],
			[Date.UTC(2017, 10, 12), 100.0],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 77.78],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 111.11],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 111.11],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 44.44],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 111.11],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 88.89],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 77.78],
			[Date.UTC(2017, 10, 18), 100.0],
			[Date.UTC(2017, 10, 18), 100.0],
			[Date.UTC(2017, 10, 18), 100.0],
			[Date.UTC(2017, 10, 18), 100.0],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 77.78],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 122.22],
			[Date.UTC(2017, 10, 18), 133.33],
			[Date.UTC(2017, 10, 18), 133.33],
			[Date.UTC(2017, 10, 18), 266.67],
			[Date.UTC(2017, 10, 18), 644.44],
			[Date.UTC(2017, 10, 19), 122.22],
			[Date.UTC(2017, 10, 19), 133.33],
			[Date.UTC(2017, 10, 19), 133.33],
			[Date.UTC(2017, 10, 19), 144.44],
			[Date.UTC(2017, 10, 19), 144.44],
		]    }]
}