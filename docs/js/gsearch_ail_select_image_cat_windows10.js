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
			[Date.UTC(2017, 9, 9), 100.0],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 355.56],
			[Date.UTC(2017, 9, 10), 611.11],
			[Date.UTC(2017, 9, 10), 644.44],
			[Date.UTC(2017, 9, 10), 100.0],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 333.33],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 166.67],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 13), 100.0],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 355.56],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 444.44],
			[Date.UTC(2017, 9, 16), 100.0],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 166.67],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 122.22],
			[Date.UTC(2017, 9, 17), 133.33],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 100.0],
			[Date.UTC(2017, 9, 17), 111.11],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 333.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 133.33],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 344.44],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 100.0],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 111.11],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 122.22],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 20), 111.11],
			[Date.UTC(2017, 9, 20), 122.22],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 133.33],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 466.67],
			[Date.UTC(2017, 9, 21), 111.11],
			[Date.UTC(2017, 9, 21), 122.22],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 144.44],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 23), 122.22],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 133.33],
			[Date.UTC(2017, 9, 23), 133.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 200.0],
			[Date.UTC(2017, 9, 9), 233.33],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 222.22],
			[Date.UTC(2017, 9, 10), 233.33],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 211.11],
			[Date.UTC(2017, 9, 11), 222.22],
			[Date.UTC(2017, 9, 11), 233.33],
			[Date.UTC(2017, 9, 12), 177.78],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 222.22],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 233.33],
			[Date.UTC(2017, 9, 12), 233.33],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 200.0],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 211.11],
			[Date.UTC(2017, 9, 15), 222.22],
			[Date.UTC(2017, 9, 16), 177.78],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 200.0],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 16), 222.22],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 166.67],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 19), 133.33],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 155.56],
			[Date.UTC(2017, 9, 19), 166.67],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 20), 144.44],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 166.67],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 20), 188.89],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 133.33],
			[Date.UTC(2017, 9, 21), 144.44],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 155.56],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 22), 133.33],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 177.78],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 22), 188.89],
			[Date.UTC(2017, 9, 23), 155.56],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 166.67],
			[Date.UTC(2017, 9, 23), 177.78],
			[Date.UTC(2017, 9, 23), 188.89],
		]    }]
}