var amazon_ail_hover_related_product_thumbnail_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'amazon_ail_hover_related_product_thumbnail_windows10'
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
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 25), 400.0],
			[Date.UTC(2017, 8, 25), 411.11],
			[Date.UTC(2017, 8, 25), 411.11],
			[Date.UTC(2017, 8, 25), 411.11],
			[Date.UTC(2017, 8, 25), 422.22],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 455.56],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 400.0],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 544.44],
			[Date.UTC(2017, 8, 27), 400.0],
			[Date.UTC(2017, 8, 27), 400.0],
			[Date.UTC(2017, 8, 27), 400.0],
			[Date.UTC(2017, 8, 27), 411.11],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 433.33],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 28), 400.0],
			[Date.UTC(2017, 8, 28), 411.11],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 500.0],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 29), 400.0],
			[Date.UTC(2017, 8, 29), 400.0],
			[Date.UTC(2017, 8, 29), 400.0],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 30), 388.89],
			[Date.UTC(2017, 8, 30), 400.0],
			[Date.UTC(2017, 8, 30), 400.0],
			[Date.UTC(2017, 8, 30), 422.22],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 455.56],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 488.89],
			[Date.UTC(2017, 9, 1), 400.0],
			[Date.UTC(2017, 9, 1), 400.0],
			[Date.UTC(2017, 9, 1), 411.11],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 466.67],
			[Date.UTC(2017, 9, 1), 466.67],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 411.11],
			[Date.UTC(2017, 9, 2), 422.22],
			[Date.UTC(2017, 9, 2), 422.22],
			[Date.UTC(2017, 9, 2), 422.22],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 455.56],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 2), 477.78],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 411.11],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 3), 388.89],
			[Date.UTC(2017, 9, 3), 400.0],
			[Date.UTC(2017, 9, 3), 400.0],
			[Date.UTC(2017, 9, 3), 400.0],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 466.67],
			[Date.UTC(2017, 9, 3), 466.67],
			[Date.UTC(2017, 9, 3), 477.78],
			[Date.UTC(2017, 9, 3), 477.78],
			[Date.UTC(2017, 9, 3), 588.89],
			[Date.UTC(2017, 9, 4), 388.89],
			[Date.UTC(2017, 9, 4), 400.0],
			[Date.UTC(2017, 9, 4), 411.11],
			[Date.UTC(2017, 9, 4), 433.33],
			[Date.UTC(2017, 9, 4), 444.44],
			[Date.UTC(2017, 9, 4), 455.56],
			[Date.UTC(2017, 9, 4), 455.56],
			[Date.UTC(2017, 9, 4), 566.67],
			[Date.UTC(2017, 9, 4), 400.0],
			[Date.UTC(2017, 9, 4), 400.0],
			[Date.UTC(2017, 9, 4), 411.11],
			[Date.UTC(2017, 9, 4), 422.22],
			[Date.UTC(2017, 9, 4), 422.22],
			[Date.UTC(2017, 9, 4), 433.33],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 511.11],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 466.67],
			[Date.UTC(2017, 8, 24), 466.67],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 488.89],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 444.44],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 533.33],
			[Date.UTC(2017, 8, 25), 444.44],
			[Date.UTC(2017, 8, 25), 488.89],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 522.22],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 444.44],
			[Date.UTC(2017, 8, 26), 444.44],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 511.11],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 488.89],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 488.89],
			[Date.UTC(2017, 8, 27), 488.89],
			[Date.UTC(2017, 8, 27), 500.0],
			[Date.UTC(2017, 8, 27), 500.0],
			[Date.UTC(2017, 8, 28), 400.0],
			[Date.UTC(2017, 8, 28), 411.11],
			[Date.UTC(2017, 8, 28), 433.33],
			[Date.UTC(2017, 8, 28), 433.33],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 922.22],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 500.0],
			[Date.UTC(2017, 8, 29), 511.11],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 500.0],
			[Date.UTC(2017, 8, 29), 500.0],
			[Date.UTC(2017, 8, 30), 400.0],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 455.56],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 488.89],
			[Date.UTC(2017, 8, 30), 488.89],
			[Date.UTC(2017, 8, 30), 488.89],
			[Date.UTC(2017, 8, 30), 488.89],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 444.44],
			[Date.UTC(2017, 9, 1), 455.56],
			[Date.UTC(2017, 9, 1), 455.56],
			[Date.UTC(2017, 9, 1), 466.67],
			[Date.UTC(2017, 9, 2), 422.22],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 444.44],
			[Date.UTC(2017, 9, 2), 444.44],
			[Date.UTC(2017, 9, 2), 455.56],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 2), 488.89],
			[Date.UTC(2017, 9, 2), 488.89],
			[Date.UTC(2017, 9, 2), 422.22],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 455.56],
			[Date.UTC(2017, 9, 2), 455.56],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 2), 466.67],
			[Date.UTC(2017, 9, 3), 411.11],
			[Date.UTC(2017, 9, 3), 411.11],
			[Date.UTC(2017, 9, 3), 411.11],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 444.44],
			[Date.UTC(2017, 9, 3), 455.56],
			[Date.UTC(2017, 9, 3), 466.67],
			[Date.UTC(2017, 9, 3), 477.78],
			[Date.UTC(2017, 9, 3), 477.78],
			[Date.UTC(2017, 9, 4), 400.0],
			[Date.UTC(2017, 9, 4), 422.22],
			[Date.UTC(2017, 9, 4), 466.67],
			[Date.UTC(2017, 9, 4), 466.67],
			[Date.UTC(2017, 9, 4), 466.67],
			[Date.UTC(2017, 9, 4), 477.78],
			[Date.UTC(2017, 9, 4), 488.89],
			[Date.UTC(2017, 9, 4), 422.22],
			[Date.UTC(2017, 9, 4), 433.33],
			[Date.UTC(2017, 9, 4), 466.67],
			[Date.UTC(2017, 9, 4), 466.67],
			[Date.UTC(2017, 9, 4), 500.0],
			[Date.UTC(2017, 9, 4), 500.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 511.11],
			[Date.UTC(2017, 9, 5), 955.56],
			[Date.UTC(2017, 9, 6), 400.0],
			[Date.UTC(2017, 9, 6), 411.11],
			[Date.UTC(2017, 9, 6), 466.67],
			[Date.UTC(2017, 9, 6), 466.67],
			[Date.UTC(2017, 9, 6), 466.67],
			[Date.UTC(2017, 9, 6), 477.78],
			[Date.UTC(2017, 9, 6), 500.0],
			[Date.UTC(2017, 9, 7), 422.22],
			[Date.UTC(2017, 9, 7), 444.44],
			[Date.UTC(2017, 9, 7), 477.78],
			[Date.UTC(2017, 9, 7), 488.89],
			[Date.UTC(2017, 9, 7), 488.89],
			[Date.UTC(2017, 9, 7), 488.89],
			[Date.UTC(2017, 9, 7), 500.0],
			[Date.UTC(2017, 9, 7), 511.11],
			[Date.UTC(2017, 9, 7), 522.22],
			[Date.UTC(2017, 9, 7), 533.33],
			[Date.UTC(2017, 9, 7), 533.33],
			[Date.UTC(2017, 9, 7), 455.56],
			[Date.UTC(2017, 9, 7), 466.67],
			[Date.UTC(2017, 9, 7), 466.67],
			[Date.UTC(2017, 9, 7), 466.67],
			[Date.UTC(2017, 9, 7), 500.0],
			[Date.UTC(2017, 9, 7), 522.22],
			[Date.UTC(2017, 9, 7), 555.56],
			[Date.UTC(2017, 9, 8), 477.78],
			[Date.UTC(2017, 9, 8), 500.0],
		]    }]
}