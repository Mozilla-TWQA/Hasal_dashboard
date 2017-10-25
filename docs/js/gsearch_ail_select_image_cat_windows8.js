var gsearch_ail_select_image_cat_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows8'
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 12), 100.0],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 15), 100.0],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 166.67],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 16), 188.89],
			[Date.UTC(2017, 9, 17), 100.0],
			[Date.UTC(2017, 9, 17), 100.0],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 88.89],
			[Date.UTC(2017, 9, 17), 88.89],
			[Date.UTC(2017, 9, 17), 88.89],
			[Date.UTC(2017, 9, 18), 100.0],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 19), 88.89],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 155.56],
			[Date.UTC(2017, 9, 20), 88.89],
			[Date.UTC(2017, 9, 21), 100.0],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 88.89],
			[Date.UTC(2017, 9, 21), 88.89],
			[Date.UTC(2017, 9, 22), 122.22],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 88.89],
			[Date.UTC(2017, 9, 22), 88.89],
			[Date.UTC(2017, 9, 22), 88.89],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 144.44],
			[Date.UTC(2017, 9, 23), 88.89],
			[Date.UTC(2017, 9, 23), 88.89],
			[Date.UTC(2017, 9, 24), 122.22],
			[Date.UTC(2017, 9, 24), 144.44],
			[Date.UTC(2017, 9, 24), 166.67],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 24), 88.89],
			[Date.UTC(2017, 9, 24), 88.89],
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 111.11],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 88.89],
			[Date.UTC(2017, 9, 25), 88.89],
			[Date.UTC(2017, 9, 25), 88.89],
			[Date.UTC(2017, 9, 25), 88.89],
		]    }]
}