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
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 8), 100.0],
			[Date.UTC(2017, 8, 8), 100.0],
			[Date.UTC(2017, 8, 8), 100.0],
			[Date.UTC(2017, 8, 8), 77.78],
			[Date.UTC(2017, 8, 8), 77.78],
			[Date.UTC(2017, 8, 8), 88.89],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 77.78],
			[Date.UTC(2017, 8, 10), 88.89],
			[Date.UTC(2017, 8, 10), 88.89],
			[Date.UTC(2017, 8, 10), 88.89],
			[Date.UTC(2017, 8, 11), 100.0],
			[Date.UTC(2017, 8, 11), 77.78],
			[Date.UTC(2017, 8, 11), 88.89],
			[Date.UTC(2017, 8, 11), 88.89],
			[Date.UTC(2017, 8, 11), 88.89],
			[Date.UTC(2017, 8, 11), 88.89],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 77.78],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
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
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 88.89],
			[Date.UTC(2017, 8, 18), 88.89],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 88.89],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 133.33],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 100.0],
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 188.89],
			[Date.UTC(2017, 8, 6), 211.11],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 222.22],
			[Date.UTC(2017, 8, 6), 233.33],
			[Date.UTC(2017, 8, 8), 188.89],
			[Date.UTC(2017, 8, 8), 188.89],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 211.11],
			[Date.UTC(2017, 8, 8), 233.33],
			[Date.UTC(2017, 8, 8), 88.89],
			[Date.UTC(2017, 8, 9), 100.0],
			[Date.UTC(2017, 8, 9), 111.11],
			[Date.UTC(2017, 8, 9), 188.89],
			[Date.UTC(2017, 8, 9), 188.89],
			[Date.UTC(2017, 8, 9), 200.0],
			[Date.UTC(2017, 8, 9), 200.0],
			[Date.UTC(2017, 8, 9), 211.11],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 111.11],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 200.0],
			[Date.UTC(2017, 8, 10), 211.11],
			[Date.UTC(2017, 8, 11), 100.0],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 200.0],
			[Date.UTC(2017, 8, 11), 88.89],
			[Date.UTC(2017, 8, 12), 188.89],
			[Date.UTC(2017, 8, 12), 200.0],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 211.11],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 200.0],
			[Date.UTC(2017, 8, 13), 211.11],
			[Date.UTC(2017, 8, 13), 222.22],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 211.11],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 100.0],
			[Date.UTC(2017, 8, 14), 111.11],
			[Date.UTC(2017, 8, 14), 177.78],
			[Date.UTC(2017, 8, 14), 188.89],
			[Date.UTC(2017, 8, 14), 188.89],
			[Date.UTC(2017, 8, 14), 200.0],
			[Date.UTC(2017, 8, 14), 222.22],
			[Date.UTC(2017, 8, 14), 222.22],
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
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 211.11],
			[Date.UTC(2017, 8, 16), 222.22],
			[Date.UTC(2017, 8, 16), 222.22],
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
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 188.89],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 200.0],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 211.11],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 222.22],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 166.67],
			[Date.UTC(2017, 8, 18), 177.78],
			[Date.UTC(2017, 8, 18), 177.78],
			[Date.UTC(2017, 8, 18), 188.89],
			[Date.UTC(2017, 8, 18), 188.89],
			[Date.UTC(2017, 8, 18), 200.0],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 200.0],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 166.67],
			[Date.UTC(2017, 8, 19), 188.89],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 177.78],
		]    }]
}