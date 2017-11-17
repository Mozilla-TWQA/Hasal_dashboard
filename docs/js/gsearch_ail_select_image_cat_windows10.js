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
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
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
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 355.56],
			[Date.UTC(2017, 10, 5), 788.89],
			[Date.UTC(2017, 10, 7), 111.11],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 655.56],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 388.89],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 111.11],
			[Date.UTC(2017, 10, 9), 111.11],
			[Date.UTC(2017, 10, 9), 122.22],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 9), 133.33],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 111.11],
			[Date.UTC(2017, 10, 10), 111.11],
			[Date.UTC(2017, 10, 10), 122.22],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 266.67],
			[Date.UTC(2017, 10, 10), 777.78],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 12), 100.0],
			[Date.UTC(2017, 10, 12), 111.11],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 222.22],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 122.22],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 122.22],
			[Date.UTC(2017, 10, 14), 133.33],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 133.33],
			[Date.UTC(2017, 10, 16), 311.11],
			[Date.UTC(2017, 10, 17), 111.11],
			[Date.UTC(2017, 10, 17), 133.33],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 8), 1055.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 566.67],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 177.78],
			[Date.UTC(2017, 10, 9), 177.78],
			[Date.UTC(2017, 10, 9), 188.89],
			[Date.UTC(2017, 10, 9), 188.89],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 10), 344.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 12), 177.78],
			[Date.UTC(2017, 10, 12), 177.78],
			[Date.UTC(2017, 10, 12), 188.89],
			[Date.UTC(2017, 10, 12), 222.22],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 200.0],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 16), 144.44],
			[Date.UTC(2017, 10, 16), 144.44],
			[Date.UTC(2017, 10, 16), 155.56],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 300.0],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 155.56],
		]    }]
}