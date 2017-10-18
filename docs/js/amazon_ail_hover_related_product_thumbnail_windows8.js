var amazon_ail_hover_related_product_thumbnail_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'amazon_ail_hover_related_product_thumbnail_windows8'
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
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 422.22],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 511.11],
			[Date.UTC(2017, 9, 5), 766.67],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 8), 411.11],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 9), 422.22],
			[Date.UTC(2017, 9, 9), 433.33],
			[Date.UTC(2017, 9, 9), 444.44],
			[Date.UTC(2017, 9, 9), 444.44],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 411.11],
			[Date.UTC(2017, 9, 10), 422.22],
			[Date.UTC(2017, 9, 10), 422.22],
			[Date.UTC(2017, 9, 10), 444.44],
			[Date.UTC(2017, 9, 10), 444.44],
			[Date.UTC(2017, 9, 10), 466.67],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 11), 411.11],
			[Date.UTC(2017, 9, 11), 422.22],
			[Date.UTC(2017, 9, 11), 433.33],
			[Date.UTC(2017, 9, 11), 433.33],
			[Date.UTC(2017, 9, 11), 444.44],
			[Date.UTC(2017, 9, 11), 466.67],
			[Date.UTC(2017, 9, 12), 433.33],
			[Date.UTC(2017, 9, 12), 444.44],
			[Date.UTC(2017, 9, 12), 466.67],
			[Date.UTC(2017, 9, 12), 488.89],
			[Date.UTC(2017, 9, 12), 444.44],
			[Date.UTC(2017, 9, 12), 488.89],
			[Date.UTC(2017, 9, 13), 411.11],
			[Date.UTC(2017, 9, 13), 444.44],
			[Date.UTC(2017, 9, 13), 455.56],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 488.89],
			[Date.UTC(2017, 9, 13), 488.89],
			[Date.UTC(2017, 9, 14), 400.0],
			[Date.UTC(2017, 9, 14), 400.0],
			[Date.UTC(2017, 9, 14), 400.0],
			[Date.UTC(2017, 9, 14), 422.22],
			[Date.UTC(2017, 9, 14), 422.22],
			[Date.UTC(2017, 9, 14), 444.44],
			[Date.UTC(2017, 9, 15), 411.11],
			[Date.UTC(2017, 9, 15), 422.22],
			[Date.UTC(2017, 9, 15), 422.22],
			[Date.UTC(2017, 9, 15), 433.33],
			[Date.UTC(2017, 9, 15), 433.33],
			[Date.UTC(2017, 9, 15), 444.44],
			[Date.UTC(2017, 9, 16), 400.0],
			[Date.UTC(2017, 9, 16), 411.11],
			[Date.UTC(2017, 9, 16), 422.22],
			[Date.UTC(2017, 9, 16), 422.22],
			[Date.UTC(2017, 9, 16), 433.33],
			[Date.UTC(2017, 9, 16), 444.44],
			[Date.UTC(2017, 9, 16), 455.56],
			[Date.UTC(2017, 9, 16), 488.89],
			[Date.UTC(2017, 9, 16), 488.89],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 444.44],
			[Date.UTC(2017, 9, 17), 444.44],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 444.44],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 544.44],
			[Date.UTC(2017, 9, 17), 600.0],
			[Date.UTC(2017, 9, 17), 611.11],
			[Date.UTC(2017, 9, 17), 655.56],
			[Date.UTC(2017, 9, 17), 722.22],
			[Date.UTC(2017, 9, 18), 422.22],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 522.22],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 488.89],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 511.11],
			[Date.UTC(2017, 9, 5), 511.11],
			[Date.UTC(2017, 9, 5), 522.22],
			[Date.UTC(2017, 9, 5), 522.22],
			[Date.UTC(2017, 9, 5), 544.44],
			[Date.UTC(2017, 9, 5), 555.56],
			[Date.UTC(2017, 9, 6), 466.67],
			[Date.UTC(2017, 9, 6), 466.67],
			[Date.UTC(2017, 9, 6), 466.67],
			[Date.UTC(2017, 9, 6), 488.89],
			[Date.UTC(2017, 9, 6), 488.89],
			[Date.UTC(2017, 9, 6), 500.0],
			[Date.UTC(2017, 9, 7), 444.44],
			[Date.UTC(2017, 9, 7), 477.78],
			[Date.UTC(2017, 9, 7), 477.78],
			[Date.UTC(2017, 9, 7), 511.11],
			[Date.UTC(2017, 9, 7), 555.56],
			[Date.UTC(2017, 9, 7), 566.67],
			[Date.UTC(2017, 9, 7), 455.56],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 511.11],
			[Date.UTC(2017, 9, 8), 522.22],
			[Date.UTC(2017, 9, 8), 533.33],
			[Date.UTC(2017, 9, 8), 555.56],
			[Date.UTC(2017, 9, 9), 444.44],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 477.78],
			[Date.UTC(2017, 9, 9), 488.89],
			[Date.UTC(2017, 9, 9), 500.0],
			[Date.UTC(2017, 9, 9), 533.33],
			[Date.UTC(2017, 9, 9), 433.33],
			[Date.UTC(2017, 9, 9), 566.67],
			[Date.UTC(2017, 9, 10), 433.33],
			[Date.UTC(2017, 9, 10), 477.78],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 10), 511.11],
			[Date.UTC(2017, 9, 10), 522.22],
			[Date.UTC(2017, 9, 10), 422.22],
			[Date.UTC(2017, 9, 10), 422.22],
			[Date.UTC(2017, 9, 10), 444.44],
			[Date.UTC(2017, 9, 10), 455.56],
			[Date.UTC(2017, 9, 10), 477.78],
			[Date.UTC(2017, 9, 10), 488.89],
			[Date.UTC(2017, 9, 10), 544.44],
			[Date.UTC(2017, 9, 11), 444.44],
			[Date.UTC(2017, 9, 11), 466.67],
			[Date.UTC(2017, 9, 11), 477.78],
			[Date.UTC(2017, 9, 11), 477.78],
			[Date.UTC(2017, 9, 11), 488.89],
			[Date.UTC(2017, 9, 11), 488.89],
			[Date.UTC(2017, 9, 11), 511.11],
			[Date.UTC(2017, 9, 11), 511.11],
			[Date.UTC(2017, 9, 11), 522.22],
			[Date.UTC(2017, 9, 12), 455.56],
			[Date.UTC(2017, 9, 12), 466.67],
			[Date.UTC(2017, 9, 12), 466.67],
			[Date.UTC(2017, 9, 12), 488.89],
			[Date.UTC(2017, 9, 12), 500.0],
			[Date.UTC(2017, 9, 12), 533.33],
			[Date.UTC(2017, 9, 13), 433.33],
			[Date.UTC(2017, 9, 13), 444.44],
			[Date.UTC(2017, 9, 13), 466.67],
			[Date.UTC(2017, 9, 13), 477.78],
			[Date.UTC(2017, 9, 13), 500.0],
			[Date.UTC(2017, 9, 13), 522.22],
			[Date.UTC(2017, 9, 14), 444.44],
			[Date.UTC(2017, 9, 14), 455.56],
			[Date.UTC(2017, 9, 14), 466.67],
			[Date.UTC(2017, 9, 14), 500.0],
			[Date.UTC(2017, 9, 14), 511.11],
			[Date.UTC(2017, 9, 14), 533.33],
			[Date.UTC(2017, 9, 15), 422.22],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 466.67],
			[Date.UTC(2017, 9, 15), 511.11],
			[Date.UTC(2017, 9, 15), 522.22],
			[Date.UTC(2017, 9, 15), 544.44],
			[Date.UTC(2017, 9, 16), 422.22],
			[Date.UTC(2017, 9, 16), 433.33],
			[Date.UTC(2017, 9, 16), 455.56],
			[Date.UTC(2017, 9, 16), 477.78],
			[Date.UTC(2017, 9, 16), 477.78],
			[Date.UTC(2017, 9, 16), 533.33],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 511.11],
			[Date.UTC(2017, 9, 17), 522.22],
			[Date.UTC(2017, 9, 17), 544.44],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 500.0],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 466.67],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 488.89],
			[Date.UTC(2017, 9, 17), 500.0],
			[Date.UTC(2017, 9, 17), 500.0],
			[Date.UTC(2017, 9, 17), 511.11],
			[Date.UTC(2017, 9, 17), 533.33],
		]    }]
}