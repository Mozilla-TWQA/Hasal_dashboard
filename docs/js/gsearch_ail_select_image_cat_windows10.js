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
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 88.89],
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
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 122.22],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 133.33],
			[Date.UTC(2017, 8, 20), 188.89],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 144.44],
			[Date.UTC(2017, 8, 21), 77.78],
			[Date.UTC(2017, 8, 21), 88.89],
			[Date.UTC(2017, 8, 21), 88.89],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 100.0],
			[Date.UTC(2017, 8, 22), 111.11],
			[Date.UTC(2017, 8, 22), 222.22],
			[Date.UTC(2017, 8, 22), 77.78],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 122.22],
			[Date.UTC(2017, 8, 22), 77.78],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 88.89],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 133.33],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 111.11],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 211.11],
			[Date.UTC(2017, 8, 25), 222.22],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 27), 100.0],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 111.11],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 29), 77.78],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 8, 18), 111.11],
			[Date.UTC(2017, 8, 18), 133.33],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 77.78],
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
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 155.56],
			[Date.UTC(2017, 8, 20), 166.67],
			[Date.UTC(2017, 8, 20), 177.78],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 21), 133.33],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 77.78],
			[Date.UTC(2017, 8, 21), 88.89],
			[Date.UTC(2017, 8, 22), 144.44],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 177.78],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 155.56],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 77.78],
			[Date.UTC(2017, 8, 23), 100.0],
			[Date.UTC(2017, 8, 23), 144.44],
			[Date.UTC(2017, 8, 23), 155.56],
			[Date.UTC(2017, 8, 23), 177.78],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 88.89],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 155.56],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 155.56],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 166.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 133.33],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 166.67],
			[Date.UTC(2017, 8, 25), 177.78],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 26), 133.33],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 144.44],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 155.56],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 133.33],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 155.56],
			[Date.UTC(2017, 8, 27), 166.67],
			[Date.UTC(2017, 8, 27), 166.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 133.33],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 29), 88.89],
		]    }]
}