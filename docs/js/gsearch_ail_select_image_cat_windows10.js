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
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 24), 122.22],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 400.0],
			[Date.UTC(2017, 9, 24), 411.11],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 111.11],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 277.78],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 133.33],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 111.11],
			[Date.UTC(2017, 9, 26), 111.11],
			[Date.UTC(2017, 9, 26), 122.22],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 122.22],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 133.33],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 511.11],
			[Date.UTC(2017, 9, 28), 1088.89],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 133.33],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 133.33],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 111.11],
			[Date.UTC(2017, 9, 31), 122.22],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 111.11],
			[Date.UTC(2017, 9, 31), 122.22],
			[Date.UTC(2017, 9, 31), 122.22],
			[Date.UTC(2017, 9, 31), 122.22],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 300.0],
			[Date.UTC(2017, 9, 31), 544.44],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 111.11],
			[Date.UTC(2017, 10, 1), 122.22],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 266.67],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 111.11],
			[Date.UTC(2017, 10, 1), 111.11],
			[Date.UTC(2017, 10, 1), 244.44],
			[Date.UTC(2017, 10, 2), 111.11],
			[Date.UTC(2017, 10, 2), 133.33],
			[Date.UTC(2017, 10, 2), 133.33],
			[Date.UTC(2017, 10, 2), 177.78],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 100.0],
			[Date.UTC(2017, 10, 2), 122.22],
			[Date.UTC(2017, 10, 2), 133.33],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 3), 122.22],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 144.44],
			[Date.UTC(2017, 10, 3), 144.44],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 122.22],
			[Date.UTC(2017, 10, 3), 122.22],
			[Date.UTC(2017, 10, 3), 122.22],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 122.22],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 788.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 24), 144.44],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 211.11],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 28), 155.56],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 344.44],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 10, 1), 155.56],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 422.22],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 177.78],
			[Date.UTC(2017, 10, 2), 177.78],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
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
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
		]    }]
}