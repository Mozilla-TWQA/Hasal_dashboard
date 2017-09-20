var gsearch_ail_select_image_cat_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows10'
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
			[Date.UTC(2017, 8, 6), 200.0],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 8), 133.33],
			[Date.UTC(2017, 8, 8), 66.67],
			[Date.UTC(2017, 8, 8), 66.67],
			[Date.UTC(2017, 8, 8), 66.67],
			[Date.UTC(2017, 8, 8), 77.78],
			[Date.UTC(2017, 8, 8), 77.78],
			[Date.UTC(2017, 8, 9), 133.33],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 122.22],
			[Date.UTC(2017, 8, 10), 88.89],
			[Date.UTC(2017, 8, 11), 133.33],
			[Date.UTC(2017, 8, 11), 155.56],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 77.78],
			[Date.UTC(2017, 8, 11), 88.89],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 233.33],
			[Date.UTC(2017, 8, 12), 266.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 77.78],
			[Date.UTC(2017, 8, 13), 122.22],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 122.22],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 255.56],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 266.67],
			[Date.UTC(2017, 8, 16), 333.33],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 277.78],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 88.89],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 111.11],
			[Date.UTC(2017, 8, 19), 111.11],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 166.67],
			[Date.UTC(2017, 8, 6), 188.89],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 8), 166.67],
			[Date.UTC(2017, 8, 8), 166.67],
			[Date.UTC(2017, 8, 8), 77.78],
			[Date.UTC(2017, 8, 8), 88.89],
			[Date.UTC(2017, 8, 8), 88.89],
			[Date.UTC(2017, 8, 8), 88.89],
			[Date.UTC(2017, 8, 9), 155.56],
			[Date.UTC(2017, 8, 9), 166.67],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 10), 144.44],
			[Date.UTC(2017, 8, 10), 166.67],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 88.89],
			[Date.UTC(2017, 8, 10), 88.89],
			[Date.UTC(2017, 8, 11), 166.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 166.67],
			[Date.UTC(2017, 8, 12), 177.78],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 13), 144.44],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 166.67],
			[Date.UTC(2017, 8, 13), 188.89],
			[Date.UTC(2017, 8, 13), 188.89],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 155.56],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 166.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 144.44],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 15), 77.78],
			[Date.UTC(2017, 8, 15), 77.78],
			[Date.UTC(2017, 8, 15), 211.11],
			[Date.UTC(2017, 8, 15), 211.11],
			[Date.UTC(2017, 8, 15), 211.11],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 255.56],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 77.78],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 16), 88.89],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 233.33],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 255.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 18), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 144.44],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 177.78],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 233.33],
			[Date.UTC(2017, 8, 19), 255.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 177.78],
		]    }]
}