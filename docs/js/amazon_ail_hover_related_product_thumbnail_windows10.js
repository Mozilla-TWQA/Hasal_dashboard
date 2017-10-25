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
			[Date.UTC(2017, 9, 11), 422.22],
			[Date.UTC(2017, 9, 11), 433.33],
			[Date.UTC(2017, 9, 11), 444.44],
			[Date.UTC(2017, 9, 11), 455.56],
			[Date.UTC(2017, 9, 11), 533.33],
			[Date.UTC(2017, 9, 12), 388.89],
			[Date.UTC(2017, 9, 12), 422.22],
			[Date.UTC(2017, 9, 12), 433.33],
			[Date.UTC(2017, 9, 12), 433.33],
			[Date.UTC(2017, 9, 12), 444.44],
			[Date.UTC(2017, 9, 12), 511.11],
			[Date.UTC(2017, 9, 12), 377.78],
			[Date.UTC(2017, 9, 12), 400.0],
			[Date.UTC(2017, 9, 12), 455.56],
			[Date.UTC(2017, 9, 12), 466.67],
			[Date.UTC(2017, 9, 13), 422.22],
			[Date.UTC(2017, 9, 13), 422.22],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 444.44],
			[Date.UTC(2017, 9, 13), 444.44],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 477.78],
			[Date.UTC(2017, 9, 13), 422.22],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 455.56],
			[Date.UTC(2017, 9, 14), 400.0],
			[Date.UTC(2017, 9, 14), 422.22],
			[Date.UTC(2017, 9, 14), 422.22],
			[Date.UTC(2017, 9, 14), 433.33],
			[Date.UTC(2017, 9, 14), 433.33],
			[Date.UTC(2017, 9, 14), 477.78],
			[Date.UTC(2017, 9, 14), 400.0],
			[Date.UTC(2017, 9, 14), 411.11],
			[Date.UTC(2017, 9, 14), 411.11],
			[Date.UTC(2017, 9, 14), 422.22],
			[Date.UTC(2017, 9, 14), 466.67],
			[Date.UTC(2017, 9, 15), 400.0],
			[Date.UTC(2017, 9, 15), 422.22],
			[Date.UTC(2017, 9, 15), 433.33],
			[Date.UTC(2017, 9, 15), 444.44],
			[Date.UTC(2017, 9, 15), 444.44],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 488.89],
			[Date.UTC(2017, 9, 15), 500.0],
			[Date.UTC(2017, 9, 15), 500.0],
			[Date.UTC(2017, 9, 15), 500.0],
			[Date.UTC(2017, 9, 16), 400.0],
			[Date.UTC(2017, 9, 16), 422.22],
			[Date.UTC(2017, 9, 16), 433.33],
			[Date.UTC(2017, 9, 16), 444.44],
			[Date.UTC(2017, 9, 16), 455.56],
			[Date.UTC(2017, 9, 16), 455.56],
			[Date.UTC(2017, 9, 16), 466.67],
			[Date.UTC(2017, 9, 17), 400.0],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 400.0],
			[Date.UTC(2017, 9, 17), 400.0],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 444.44],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 511.11],
			[Date.UTC(2017, 9, 17), 588.89],
			[Date.UTC(2017, 9, 18), 400.0],
			[Date.UTC(2017, 9, 18), 400.0],
			[Date.UTC(2017, 9, 18), 400.0],
			[Date.UTC(2017, 9, 18), 400.0],
			[Date.UTC(2017, 9, 18), 411.11],
			[Date.UTC(2017, 9, 18), 422.22],
			[Date.UTC(2017, 9, 18), 422.22],
			[Date.UTC(2017, 9, 18), 433.33],
			[Date.UTC(2017, 9, 18), 433.33],
			[Date.UTC(2017, 9, 18), 433.33],
			[Date.UTC(2017, 9, 18), 444.44],
			[Date.UTC(2017, 9, 18), 444.44],
			[Date.UTC(2017, 9, 18), 455.56],
			[Date.UTC(2017, 9, 18), 455.56],
			[Date.UTC(2017, 9, 18), 455.56],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 477.78],
			[Date.UTC(2017, 9, 19), 411.11],
			[Date.UTC(2017, 9, 19), 422.22],
			[Date.UTC(2017, 9, 19), 422.22],
			[Date.UTC(2017, 9, 19), 433.33],
			[Date.UTC(2017, 9, 19), 455.56],
			[Date.UTC(2017, 9, 19), 466.67],
			[Date.UTC(2017, 9, 19), 466.67],
			[Date.UTC(2017, 9, 20), 400.0],
			[Date.UTC(2017, 9, 20), 400.0],
			[Date.UTC(2017, 9, 20), 400.0],
			[Date.UTC(2017, 9, 20), 433.33],
			[Date.UTC(2017, 9, 20), 433.33],
			[Date.UTC(2017, 9, 20), 433.33],
			[Date.UTC(2017, 9, 20), 488.89],
			[Date.UTC(2017, 9, 20), 500.0],
			[Date.UTC(2017, 9, 20), 411.11],
			[Date.UTC(2017, 9, 20), 422.22],
			[Date.UTC(2017, 9, 20), 422.22],
			[Date.UTC(2017, 9, 20), 444.44],
			[Date.UTC(2017, 9, 20), 455.56],
			[Date.UTC(2017, 9, 20), 477.78],
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
			[Date.UTC(2017, 9, 25), 433.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 11), 466.67],
			[Date.UTC(2017, 9, 11), 466.67],
			[Date.UTC(2017, 9, 11), 477.78],
			[Date.UTC(2017, 9, 11), 522.22],
			[Date.UTC(2017, 9, 11), 522.22],
			[Date.UTC(2017, 9, 12), 488.89],
			[Date.UTC(2017, 9, 12), 488.89],
			[Date.UTC(2017, 9, 12), 500.0],
			[Date.UTC(2017, 9, 12), 500.0],
			[Date.UTC(2017, 9, 12), 522.22],
			[Date.UTC(2017, 9, 12), 555.56],
			[Date.UTC(2017, 9, 12), 488.89],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 500.0],
			[Date.UTC(2017, 9, 12), 533.33],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 477.78],
			[Date.UTC(2017, 9, 13), 488.89],
			[Date.UTC(2017, 9, 13), 533.33],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 500.0],
			[Date.UTC(2017, 9, 13), 511.11],
			[Date.UTC(2017, 9, 14), 455.56],
			[Date.UTC(2017, 9, 14), 477.78],
			[Date.UTC(2017, 9, 14), 488.89],
			[Date.UTC(2017, 9, 14), 488.89],
			[Date.UTC(2017, 9, 14), 500.0],
			[Date.UTC(2017, 9, 14), 500.0],
			[Date.UTC(2017, 9, 14), 522.22],
			[Date.UTC(2017, 9, 14), 522.22],
			[Date.UTC(2017, 9, 14), 544.44],
			[Date.UTC(2017, 9, 14), 477.78],
			[Date.UTC(2017, 9, 14), 488.89],
			[Date.UTC(2017, 9, 14), 500.0],
			[Date.UTC(2017, 9, 14), 500.0],
			[Date.UTC(2017, 9, 14), 544.44],
			[Date.UTC(2017, 9, 15), 444.44],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 477.78],
			[Date.UTC(2017, 9, 15), 477.78],
			[Date.UTC(2017, 9, 15), 488.89],
			[Date.UTC(2017, 9, 15), 500.0],
			[Date.UTC(2017, 9, 15), 533.33],
			[Date.UTC(2017, 9, 15), 544.44],
			[Date.UTC(2017, 9, 15), 555.56],
			[Date.UTC(2017, 9, 16), 466.67],
			[Date.UTC(2017, 9, 16), 488.89],
			[Date.UTC(2017, 9, 16), 488.89],
			[Date.UTC(2017, 9, 16), 488.89],
			[Date.UTC(2017, 9, 16), 500.0],
			[Date.UTC(2017, 9, 16), 533.33],
			[Date.UTC(2017, 9, 16), 533.33],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 500.0],
			[Date.UTC(2017, 9, 17), 511.11],
			[Date.UTC(2017, 9, 17), 522.22],
			[Date.UTC(2017, 9, 17), 533.33],
			[Date.UTC(2017, 9, 17), 444.44],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 500.0],
			[Date.UTC(2017, 9, 17), 522.22],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 522.22],
			[Date.UTC(2017, 9, 17), 544.44],
			[Date.UTC(2017, 9, 18), 444.44],
			[Date.UTC(2017, 9, 18), 455.56],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 466.67],
			[Date.UTC(2017, 9, 18), 488.89],
			[Date.UTC(2017, 9, 18), 500.0],
			[Date.UTC(2017, 9, 18), 500.0],
			[Date.UTC(2017, 9, 18), 511.11],
			[Date.UTC(2017, 9, 18), 522.22],
			[Date.UTC(2017, 9, 18), 544.44],
			[Date.UTC(2017, 9, 19), 500.0],
			[Date.UTC(2017, 9, 19), 522.22],
			[Date.UTC(2017, 9, 19), 444.44],
			[Date.UTC(2017, 9, 19), 466.67],
			[Date.UTC(2017, 9, 19), 477.78],
			[Date.UTC(2017, 9, 19), 477.78],
			[Date.UTC(2017, 9, 19), 477.78],
			[Date.UTC(2017, 9, 19), 477.78],
			[Date.UTC(2017, 9, 19), 488.89],
			[Date.UTC(2017, 9, 19), 500.0],
			[Date.UTC(2017, 9, 20), 444.44],
			[Date.UTC(2017, 9, 20), 455.56],
			[Date.UTC(2017, 9, 20), 466.67],
			[Date.UTC(2017, 9, 20), 466.67],
			[Date.UTC(2017, 9, 20), 477.78],
			[Date.UTC(2017, 9, 20), 488.89],
			[Date.UTC(2017, 9, 20), 500.0],
			[Date.UTC(2017, 9, 20), 455.56],
			[Date.UTC(2017, 9, 20), 466.67],
			[Date.UTC(2017, 9, 20), 466.67],
			[Date.UTC(2017, 9, 20), 500.0],
			[Date.UTC(2017, 9, 20), 500.0],
			[Date.UTC(2017, 9, 20), 500.0],
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
			[Date.UTC(2017, 9, 25), 477.78],
			[Date.UTC(2017, 9, 25), 477.78],
			[Date.UTC(2017, 9, 25), 500.0],
			[Date.UTC(2017, 9, 25), 500.0],
		]    }]
}