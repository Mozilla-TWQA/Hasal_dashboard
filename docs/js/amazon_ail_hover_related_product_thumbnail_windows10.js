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
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 588.89],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 522.22],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 777.78],
			[Date.UTC(2017, 10, 7), 400.0],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 422.22],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 466.67],
			[Date.UTC(2017, 10, 7), 477.78],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 666.67],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 444.44],
			[Date.UTC(2017, 10, 7), 466.67],
			[Date.UTC(2017, 10, 8), 1222.22],
			[Date.UTC(2017, 10, 8), 400.0],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 422.22],
			[Date.UTC(2017, 10, 8), 422.22],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 466.67],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 511.11],
			[Date.UTC(2017, 10, 9), 400.0],
			[Date.UTC(2017, 10, 9), 411.11],
			[Date.UTC(2017, 10, 9), 411.11],
			[Date.UTC(2017, 10, 9), 433.33],
			[Date.UTC(2017, 10, 9), 433.33],
			[Date.UTC(2017, 10, 9), 444.44],
			[Date.UTC(2017, 10, 9), 455.56],
			[Date.UTC(2017, 10, 10), 400.0],
			[Date.UTC(2017, 10, 10), 411.11],
			[Date.UTC(2017, 10, 10), 411.11],
			[Date.UTC(2017, 10, 10), 433.33],
			[Date.UTC(2017, 10, 10), 433.33],
			[Date.UTC(2017, 10, 10), 433.33],
			[Date.UTC(2017, 10, 10), 433.33],
			[Date.UTC(2017, 10, 10), 444.44],
			[Date.UTC(2017, 10, 10), 444.44],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 422.22],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 588.89],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 444.44],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 488.89],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 422.22],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 444.44],
			[Date.UTC(2017, 10, 11), 444.44],
			[Date.UTC(2017, 10, 11), 444.44],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 12), 411.11],
			[Date.UTC(2017, 10, 12), 433.33],
			[Date.UTC(2017, 10, 12), 433.33],
			[Date.UTC(2017, 10, 12), 444.44],
			[Date.UTC(2017, 10, 12), 444.44],
			[Date.UTC(2017, 10, 12), 455.56],
			[Date.UTC(2017, 10, 12), 455.56],
			[Date.UTC(2017, 10, 13), 411.11],
			[Date.UTC(2017, 10, 13), 411.11],
			[Date.UTC(2017, 10, 13), 433.33],
			[Date.UTC(2017, 10, 13), 433.33],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 13), 466.67],
			[Date.UTC(2017, 10, 13), 466.67],
			[Date.UTC(2017, 10, 13), 500.0],
			[Date.UTC(2017, 10, 13), 522.22],
			[Date.UTC(2017, 10, 13), 411.11],
			[Date.UTC(2017, 10, 13), 433.33],
			[Date.UTC(2017, 10, 13), 455.56],
			[Date.UTC(2017, 10, 13), 455.56],
			[Date.UTC(2017, 10, 13), 500.0],
			[Date.UTC(2017, 10, 13), 822.22],
			[Date.UTC(2017, 10, 14), 433.33],
			[Date.UTC(2017, 10, 14), 433.33],
			[Date.UTC(2017, 10, 14), 455.56],
			[Date.UTC(2017, 10, 14), 455.56],
			[Date.UTC(2017, 10, 14), 488.89],
			[Date.UTC(2017, 10, 14), 500.0],
			[Date.UTC(2017, 10, 14), 411.11],
			[Date.UTC(2017, 10, 14), 411.11],
			[Date.UTC(2017, 10, 14), 433.33],
			[Date.UTC(2017, 10, 14), 433.33],
			[Date.UTC(2017, 10, 14), 433.33],
			[Date.UTC(2017, 10, 14), 477.78],
			[Date.UTC(2017, 10, 14), 477.78],
			[Date.UTC(2017, 10, 14), 477.78],
			[Date.UTC(2017, 10, 14), 666.67],
			[Date.UTC(2017, 10, 15), 422.22],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 444.44],
			[Date.UTC(2017, 10, 15), 466.67],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 411.11],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 466.67],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 400.0],
			[Date.UTC(2017, 10, 15), 411.11],
			[Date.UTC(2017, 10, 15), 422.22],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 444.44],
			[Date.UTC(2017, 10, 15), 455.56],
			[Date.UTC(2017, 10, 15), 455.56],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 544.44],
			[Date.UTC(2017, 10, 16), 477.78],
			[Date.UTC(2017, 10, 16), 488.89],
			[Date.UTC(2017, 10, 16), 488.89],
			[Date.UTC(2017, 10, 16), 500.0],
			[Date.UTC(2017, 10, 16), 500.0],
			[Date.UTC(2017, 10, 16), 533.33],
			[Date.UTC(2017, 10, 16), 566.67],
			[Date.UTC(2017, 10, 17), 466.67],
			[Date.UTC(2017, 10, 17), 466.67],
			[Date.UTC(2017, 10, 17), 477.78],
			[Date.UTC(2017, 10, 17), 488.89],
			[Date.UTC(2017, 10, 17), 488.89],
			[Date.UTC(2017, 10, 17), 500.0],
			[Date.UTC(2017, 10, 17), 466.67],
			[Date.UTC(2017, 10, 17), 466.67],
			[Date.UTC(2017, 10, 17), 477.78],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 522.22],
			[Date.UTC(2017, 10, 4), 533.33],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 511.11],
			[Date.UTC(2017, 10, 4), 511.11],
			[Date.UTC(2017, 10, 4), 511.11],
			[Date.UTC(2017, 10, 4), 522.22],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 522.22],
			[Date.UTC(2017, 10, 5), 522.22],
			[Date.UTC(2017, 10, 5), 522.22],
			[Date.UTC(2017, 10, 5), 522.22],
			[Date.UTC(2017, 10, 5), 555.56],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 522.22],
			[Date.UTC(2017, 10, 7), 522.22],
			[Date.UTC(2017, 10, 7), 522.22],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 477.78],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 511.11],
			[Date.UTC(2017, 10, 7), 511.11],
			[Date.UTC(2017, 10, 8), 455.56],
			[Date.UTC(2017, 10, 8), 455.56],
			[Date.UTC(2017, 10, 8), 466.67],
			[Date.UTC(2017, 10, 8), 466.67],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 511.11],
			[Date.UTC(2017, 10, 8), 511.11],
			[Date.UTC(2017, 10, 8), 522.22],
			[Date.UTC(2017, 10, 8), 522.22],
			[Date.UTC(2017, 10, 8), 522.22],
			[Date.UTC(2017, 10, 8), 533.33],
			[Date.UTC(2017, 10, 9), 455.56],
			[Date.UTC(2017, 10, 9), 466.67],
			[Date.UTC(2017, 10, 9), 466.67],
			[Date.UTC(2017, 10, 9), 466.67],
			[Date.UTC(2017, 10, 9), 466.67],
			[Date.UTC(2017, 10, 9), 466.67],
			[Date.UTC(2017, 10, 9), 477.78],
			[Date.UTC(2017, 10, 10), 444.44],
			[Date.UTC(2017, 10, 10), 455.56],
			[Date.UTC(2017, 10, 10), 466.67],
			[Date.UTC(2017, 10, 10), 488.89],
			[Date.UTC(2017, 10, 10), 488.89],
			[Date.UTC(2017, 10, 10), 511.11],
			[Date.UTC(2017, 10, 10), 533.33],
			[Date.UTC(2017, 10, 10), 533.33],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 488.89],
			[Date.UTC(2017, 10, 11), 500.0],
			[Date.UTC(2017, 10, 11), 544.44],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 488.89],
			[Date.UTC(2017, 10, 11), 522.22],
			[Date.UTC(2017, 10, 11), 422.22],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 488.89],
			[Date.UTC(2017, 10, 11), 488.89],
			[Date.UTC(2017, 10, 11), 500.0],
			[Date.UTC(2017, 10, 11), 500.0],
			[Date.UTC(2017, 10, 11), 500.0],
			[Date.UTC(2017, 10, 11), 500.0],
			[Date.UTC(2017, 10, 11), 500.0],
			[Date.UTC(2017, 10, 11), 511.11],
			[Date.UTC(2017, 10, 11), 511.11],
			[Date.UTC(2017, 10, 11), 522.22],
			[Date.UTC(2017, 10, 11), 533.33],
			[Date.UTC(2017, 10, 12), 466.67],
			[Date.UTC(2017, 10, 12), 466.67],
			[Date.UTC(2017, 10, 12), 466.67],
			[Date.UTC(2017, 10, 12), 500.0],
			[Date.UTC(2017, 10, 12), 500.0],
			[Date.UTC(2017, 10, 12), 500.0],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 13), 466.67],
			[Date.UTC(2017, 10, 13), 477.78],
			[Date.UTC(2017, 10, 13), 477.78],
			[Date.UTC(2017, 10, 13), 477.78],
			[Date.UTC(2017, 10, 13), 488.89],
			[Date.UTC(2017, 10, 13), 488.89],
			[Date.UTC(2017, 10, 13), 488.89],
			[Date.UTC(2017, 10, 13), 433.33],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 13), 466.67],
			[Date.UTC(2017, 10, 13), 477.78],
			[Date.UTC(2017, 10, 13), 488.89],
			[Date.UTC(2017, 10, 13), 533.33],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 500.0],
			[Date.UTC(2017, 10, 14), 500.0],
			[Date.UTC(2017, 10, 14), 522.22],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 477.78],
			[Date.UTC(2017, 10, 14), 477.78],
			[Date.UTC(2017, 10, 14), 488.89],
			[Date.UTC(2017, 10, 14), 500.0],
			[Date.UTC(2017, 10, 14), 500.0],
			[Date.UTC(2017, 10, 14), 577.78],
			[Date.UTC(2017, 10, 15), 455.56],
			[Date.UTC(2017, 10, 15), 466.67],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 511.11],
			[Date.UTC(2017, 10, 15), 511.11],
			[Date.UTC(2017, 10, 15), 522.22],
			[Date.UTC(2017, 10, 15), 444.44],
			[Date.UTC(2017, 10, 15), 455.56],
			[Date.UTC(2017, 10, 15), 466.67],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 511.11],
			[Date.UTC(2017, 10, 15), 522.22],
			[Date.UTC(2017, 10, 15), 466.67],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 488.89],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 500.0],
			[Date.UTC(2017, 10, 15), 666.67],
			[Date.UTC(2017, 10, 16), 488.89],
			[Date.UTC(2017, 10, 16), 488.89],
			[Date.UTC(2017, 10, 16), 500.0],
			[Date.UTC(2017, 10, 16), 522.22],
			[Date.UTC(2017, 10, 16), 544.44],
			[Date.UTC(2017, 10, 16), 544.44],
			[Date.UTC(2017, 10, 17), 500.0],
			[Date.UTC(2017, 10, 17), 500.0],
			[Date.UTC(2017, 10, 17), 511.11],
			[Date.UTC(2017, 10, 17), 522.22],
			[Date.UTC(2017, 10, 17), 544.44],
			[Date.UTC(2017, 10, 17), 600.0],
			[Date.UTC(2017, 10, 17), 488.89],
			[Date.UTC(2017, 10, 17), 522.22],
			[Date.UTC(2017, 10, 17), 522.22],
		]    }]
}