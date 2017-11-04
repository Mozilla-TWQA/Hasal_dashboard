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
			[Date.UTC(2017, 9, 21), 400.0],
			[Date.UTC(2017, 9, 21), 400.0],
			[Date.UTC(2017, 9, 21), 411.11],
			[Date.UTC(2017, 9, 21), 422.22],
			[Date.UTC(2017, 9, 21), 455.56],
			[Date.UTC(2017, 9, 21), 455.56],
			[Date.UTC(2017, 9, 21), 466.67],
			[Date.UTC(2017, 9, 21), 466.67],
			[Date.UTC(2017, 9, 21), 477.78],
			[Date.UTC(2017, 9, 21), 488.89],
			[Date.UTC(2017, 9, 21), 400.0],
			[Date.UTC(2017, 9, 21), 411.11],
			[Date.UTC(2017, 9, 21), 411.11],
			[Date.UTC(2017, 9, 21), 422.22],
			[Date.UTC(2017, 9, 21), 522.22],
			[Date.UTC(2017, 9, 22), 411.11],
			[Date.UTC(2017, 9, 22), 422.22],
			[Date.UTC(2017, 9, 22), 433.33],
			[Date.UTC(2017, 9, 22), 444.44],
			[Date.UTC(2017, 9, 22), 455.56],
			[Date.UTC(2017, 9, 22), 566.67],
			[Date.UTC(2017, 9, 22), 411.11],
			[Date.UTC(2017, 9, 22), 422.22],
			[Date.UTC(2017, 9, 22), 422.22],
			[Date.UTC(2017, 9, 22), 433.33],
			[Date.UTC(2017, 9, 23), 433.33],
			[Date.UTC(2017, 9, 23), 433.33],
			[Date.UTC(2017, 9, 23), 433.33],
			[Date.UTC(2017, 9, 23), 455.56],
			[Date.UTC(2017, 9, 23), 466.67],
			[Date.UTC(2017, 9, 23), 477.78],
			[Date.UTC(2017, 9, 23), 400.0],
			[Date.UTC(2017, 9, 23), 422.22],
			[Date.UTC(2017, 9, 23), 433.33],
			[Date.UTC(2017, 9, 23), 455.56],
			[Date.UTC(2017, 9, 23), 466.67],
			[Date.UTC(2017, 9, 23), 500.0],
			[Date.UTC(2017, 9, 24), 411.11],
			[Date.UTC(2017, 9, 24), 422.22],
			[Date.UTC(2017, 9, 24), 466.67],
			[Date.UTC(2017, 9, 24), 466.67],
			[Date.UTC(2017, 9, 24), 477.78],
			[Date.UTC(2017, 9, 24), 488.89],
			[Date.UTC(2017, 9, 24), 500.0],
			[Date.UTC(2017, 9, 24), 522.22],
			[Date.UTC(2017, 9, 24), 433.33],
			[Date.UTC(2017, 9, 25), 400.0],
			[Date.UTC(2017, 9, 25), 411.11],
			[Date.UTC(2017, 9, 25), 422.22],
			[Date.UTC(2017, 9, 25), 433.33],
			[Date.UTC(2017, 9, 25), 444.44],
			[Date.UTC(2017, 9, 25), 466.67],
			[Date.UTC(2017, 9, 25), 411.11],
			[Date.UTC(2017, 9, 25), 411.11],
			[Date.UTC(2017, 9, 25), 422.22],
			[Date.UTC(2017, 9, 25), 433.33],
			[Date.UTC(2017, 9, 25), 433.33],
			[Date.UTC(2017, 9, 25), 500.0],
			[Date.UTC(2017, 9, 26), 422.22],
			[Date.UTC(2017, 9, 26), 422.22],
			[Date.UTC(2017, 9, 26), 433.33],
			[Date.UTC(2017, 9, 26), 444.44],
			[Date.UTC(2017, 9, 26), 455.56],
			[Date.UTC(2017, 9, 26), 466.67],
			[Date.UTC(2017, 9, 26), 433.33],
			[Date.UTC(2017, 9, 26), 466.67],
			[Date.UTC(2017, 9, 26), 477.78],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 455.56],
			[Date.UTC(2017, 9, 27), 455.56],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 477.78],
			[Date.UTC(2017, 9, 27), 511.11],
			[Date.UTC(2017, 9, 28), 400.0],
			[Date.UTC(2017, 9, 28), 400.0],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 28), 433.33],
			[Date.UTC(2017, 9, 28), 433.33],
			[Date.UTC(2017, 9, 28), 433.33],
			[Date.UTC(2017, 9, 28), 455.56],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 533.33],
			[Date.UTC(2017, 9, 28), 422.22],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 522.22],
			[Date.UTC(2017, 9, 29), 411.11],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 30), 400.0],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 544.44],
			[Date.UTC(2017, 9, 30), 666.67],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 433.33],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 433.33],
			[Date.UTC(2017, 9, 31), 433.33],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 9, 31), 544.44],
			[Date.UTC(2017, 10, 1), 400.0],
			[Date.UTC(2017, 10, 1), 433.33],
			[Date.UTC(2017, 10, 1), 433.33],
			[Date.UTC(2017, 10, 1), 455.56],
			[Date.UTC(2017, 10, 1), 477.78],
			[Date.UTC(2017, 10, 1), 488.89],
			[Date.UTC(2017, 10, 1), 422.22],
			[Date.UTC(2017, 10, 1), 444.44],
			[Date.UTC(2017, 10, 1), 466.67],
			[Date.UTC(2017, 10, 2), 400.0],
			[Date.UTC(2017, 10, 2), 433.33],
			[Date.UTC(2017, 10, 2), 433.33],
			[Date.UTC(2017, 10, 2), 444.44],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 477.78],
			[Date.UTC(2017, 10, 2), 411.11],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 433.33],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 3), 400.0],
			[Date.UTC(2017, 10, 3), 411.11],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 433.33],
			[Date.UTC(2017, 10, 3), 433.33],
			[Date.UTC(2017, 10, 3), 444.44],
			[Date.UTC(2017, 10, 3), 544.44],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 21), 444.44],
			[Date.UTC(2017, 9, 21), 466.67],
			[Date.UTC(2017, 9, 21), 466.67],
			[Date.UTC(2017, 9, 21), 488.89],
			[Date.UTC(2017, 9, 21), 488.89],
			[Date.UTC(2017, 9, 21), 511.11],
			[Date.UTC(2017, 9, 21), 466.67],
			[Date.UTC(2017, 9, 21), 477.78],
			[Date.UTC(2017, 9, 21), 477.78],
			[Date.UTC(2017, 9, 21), 511.11],
			[Date.UTC(2017, 9, 21), 511.11],
			[Date.UTC(2017, 9, 22), 466.67],
			[Date.UTC(2017, 9, 22), 466.67],
			[Date.UTC(2017, 9, 22), 488.89],
			[Date.UTC(2017, 9, 22), 488.89],
			[Date.UTC(2017, 9, 22), 500.0],
			[Date.UTC(2017, 9, 22), 511.11],
			[Date.UTC(2017, 9, 22), 533.33],
			[Date.UTC(2017, 9, 22), 455.56],
			[Date.UTC(2017, 9, 22), 455.56],
			[Date.UTC(2017, 9, 22), 466.67],
			[Date.UTC(2017, 9, 22), 500.0],
			[Date.UTC(2017, 9, 23), 455.56],
			[Date.UTC(2017, 9, 23), 466.67],
			[Date.UTC(2017, 9, 23), 477.78],
			[Date.UTC(2017, 9, 23), 500.0],
			[Date.UTC(2017, 9, 23), 500.0],
			[Date.UTC(2017, 9, 23), 533.33],
			[Date.UTC(2017, 9, 23), 455.56],
			[Date.UTC(2017, 9, 23), 466.67],
			[Date.UTC(2017, 9, 23), 477.78],
			[Date.UTC(2017, 9, 23), 477.78],
			[Date.UTC(2017, 9, 23), 533.33],
			[Date.UTC(2017, 9, 23), 533.33],
			[Date.UTC(2017, 9, 24), 466.67],
			[Date.UTC(2017, 9, 24), 511.11],
			[Date.UTC(2017, 9, 24), 511.11],
			[Date.UTC(2017, 9, 24), 533.33],
			[Date.UTC(2017, 9, 24), 533.33],
			[Date.UTC(2017, 9, 24), 533.33],
			[Date.UTC(2017, 9, 24), 566.67],
			[Date.UTC(2017, 9, 24), 455.56],
			[Date.UTC(2017, 9, 25), 455.56],
			[Date.UTC(2017, 9, 25), 466.67],
			[Date.UTC(2017, 9, 25), 466.67],
			[Date.UTC(2017, 9, 25), 477.78],
			[Date.UTC(2017, 9, 25), 477.78],
			[Date.UTC(2017, 9, 25), 500.0],
			[Date.UTC(2017, 9, 25), 500.0],
			[Date.UTC(2017, 9, 25), 500.0],
			[Date.UTC(2017, 9, 25), 455.56],
			[Date.UTC(2017, 9, 25), 466.67],
			[Date.UTC(2017, 9, 25), 466.67],
			[Date.UTC(2017, 9, 25), 477.78],
			[Date.UTC(2017, 9, 25), 477.78],
			[Date.UTC(2017, 9, 25), 500.0],
			[Date.UTC(2017, 9, 26), 466.67],
			[Date.UTC(2017, 9, 26), 477.78],
			[Date.UTC(2017, 9, 26), 477.78],
			[Date.UTC(2017, 9, 26), 488.89],
			[Date.UTC(2017, 9, 26), 488.89],
			[Date.UTC(2017, 9, 26), 500.0],
			[Date.UTC(2017, 9, 26), 533.33],
			[Date.UTC(2017, 9, 26), 644.44],
			[Date.UTC(2017, 9, 26), 966.67],
			[Date.UTC(2017, 9, 26), 433.33],
			[Date.UTC(2017, 9, 26), 455.56],
			[Date.UTC(2017, 9, 26), 500.0],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 477.78],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 511.11],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 488.89],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 511.11],
			[Date.UTC(2017, 9, 27), 522.22],
			[Date.UTC(2017, 9, 28), 466.67],
			[Date.UTC(2017, 9, 28), 466.67],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 28), 500.0],
			[Date.UTC(2017, 9, 28), 544.44],
			[Date.UTC(2017, 9, 28), 555.56],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 28), 500.0],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 29), 522.22],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 522.22],
			[Date.UTC(2017, 9, 29), 566.67],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 522.22],
			[Date.UTC(2017, 9, 30), 533.33],
			[Date.UTC(2017, 9, 30), 533.33],
			[Date.UTC(2017, 9, 30), 533.33],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 522.22],
			[Date.UTC(2017, 9, 31), 522.22],
			[Date.UTC(2017, 9, 31), 533.33],
			[Date.UTC(2017, 9, 31), 533.33],
			[Date.UTC(2017, 10, 1), 455.56],
			[Date.UTC(2017, 10, 1), 466.67],
			[Date.UTC(2017, 10, 1), 466.67],
			[Date.UTC(2017, 10, 1), 488.89],
			[Date.UTC(2017, 10, 1), 522.22],
			[Date.UTC(2017, 10, 1), 533.33],
			[Date.UTC(2017, 10, 1), 477.78],
			[Date.UTC(2017, 10, 1), 500.0],
			[Date.UTC(2017, 10, 1), 500.0],
			[Date.UTC(2017, 10, 2), 466.67],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 2), 500.0],
			[Date.UTC(2017, 10, 2), 500.0],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 466.67],
			[Date.UTC(2017, 10, 2), 466.67],
			[Date.UTC(2017, 10, 2), 466.67],
			[Date.UTC(2017, 10, 2), 500.0],
			[Date.UTC(2017, 10, 3), 444.44],
			[Date.UTC(2017, 10, 3), 466.67],
			[Date.UTC(2017, 10, 3), 477.78],
			[Date.UTC(2017, 10, 3), 488.89],
			[Date.UTC(2017, 10, 3), 500.0],
			[Date.UTC(2017, 10, 3), 500.0],
			[Date.UTC(2017, 10, 3), 522.22],
			[Date.UTC(2017, 10, 3), 466.67],
		]    }]
}