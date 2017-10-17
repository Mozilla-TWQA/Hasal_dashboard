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
			[Date.UTC(2017, 9, 5), 366.67],
			[Date.UTC(2017, 9, 5), 388.89],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 400.0],
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
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
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
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
			[Date.UTC(2017, 9, 5), 455.56],
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
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 511.11],
			[Date.UTC(2017, 9, 5), 522.22],
			[Date.UTC(2017, 9, 5), 600.0],
			[Date.UTC(2017, 9, 5), 666.67],
			[Date.UTC(2017, 9, 5), 688.89],
			[Date.UTC(2017, 9, 5), 688.89],
			[Date.UTC(2017, 9, 5), 688.89],
			[Date.UTC(2017, 9, 5), 744.44],
			[Date.UTC(2017, 9, 5), 900.0],
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
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 411.11],
			[Date.UTC(2017, 9, 10), 433.33],
			[Date.UTC(2017, 9, 10), 433.33],
			[Date.UTC(2017, 9, 10), 466.67],
			[Date.UTC(2017, 9, 11), 400.0],
			[Date.UTC(2017, 9, 11), 411.11],
			[Date.UTC(2017, 9, 11), 422.22],
			[Date.UTC(2017, 9, 11), 422.22],
			[Date.UTC(2017, 9, 11), 433.33],
			[Date.UTC(2017, 9, 11), 455.56],
			[Date.UTC(2017, 9, 11), 477.78],
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
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 8), 466.67],
			[Date.UTC(2017, 9, 8), 466.67],
			[Date.UTC(2017, 9, 8), 477.78],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 522.22],
			[Date.UTC(2017, 9, 8), 433.33],
			[Date.UTC(2017, 9, 8), 444.44],
			[Date.UTC(2017, 9, 8), 466.67],
			[Date.UTC(2017, 9, 8), 500.0],
			[Date.UTC(2017, 9, 8), 544.44],
			[Date.UTC(2017, 9, 9), 433.33],
			[Date.UTC(2017, 9, 9), 455.56],
			[Date.UTC(2017, 9, 9), 455.56],
			[Date.UTC(2017, 9, 9), 455.56],
			[Date.UTC(2017, 9, 9), 455.56],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 488.89],
			[Date.UTC(2017, 9, 9), 488.89],
			[Date.UTC(2017, 9, 9), 488.89],
			[Date.UTC(2017, 9, 9), 444.44],
			[Date.UTC(2017, 9, 9), 455.56],
			[Date.UTC(2017, 9, 9), 466.67],
			[Date.UTC(2017, 9, 9), 488.89],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 500.0],
			[Date.UTC(2017, 9, 10), 455.56],
			[Date.UTC(2017, 9, 10), 466.67],
			[Date.UTC(2017, 9, 10), 466.67],
			[Date.UTC(2017, 9, 10), 477.78],
			[Date.UTC(2017, 9, 10), 477.78],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 10), 522.22],
			[Date.UTC(2017, 9, 10), 533.33],
			[Date.UTC(2017, 9, 10), 533.33],
			[Date.UTC(2017, 9, 10), 466.67],
			[Date.UTC(2017, 9, 10), 477.78],
			[Date.UTC(2017, 9, 10), 488.89],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 11), 455.56],
			[Date.UTC(2017, 9, 11), 466.67],
			[Date.UTC(2017, 9, 11), 477.78],
			[Date.UTC(2017, 9, 11), 488.89],
			[Date.UTC(2017, 9, 11), 488.89],
			[Date.UTC(2017, 9, 11), 500.0],
			[Date.UTC(2017, 9, 11), 522.22],
			[Date.UTC(2017, 9, 11), 533.33],
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
			[Date.UTC(2017, 9, 14), 477.78],
			[Date.UTC(2017, 9, 14), 488.89],
			[Date.UTC(2017, 9, 14), 488.89],
			[Date.UTC(2017, 9, 14), 500.0],
			[Date.UTC(2017, 9, 14), 500.0],
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
			[Date.UTC(2017, 9, 17), 477.78],
			[Date.UTC(2017, 9, 17), 477.78],
		]    }]
}