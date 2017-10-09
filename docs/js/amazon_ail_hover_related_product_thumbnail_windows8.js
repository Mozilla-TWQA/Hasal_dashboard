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
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 566.67],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 522.22],
			[Date.UTC(2017, 8, 27), 411.11],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 433.33],
			[Date.UTC(2017, 8, 27), 433.33],
			[Date.UTC(2017, 8, 27), 477.78],
			[Date.UTC(2017, 8, 27), 655.56],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 433.33],
			[Date.UTC(2017, 8, 28), 433.33],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 455.56],
			[Date.UTC(2017, 8, 28), 455.56],
			[Date.UTC(2017, 8, 28), 455.56],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 30), 400.0],
			[Date.UTC(2017, 8, 30), 422.22],
			[Date.UTC(2017, 8, 30), 422.22],
			[Date.UTC(2017, 8, 30), 422.22],
			[Date.UTC(2017, 8, 30), 422.22],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 444.44],
			[Date.UTC(2017, 8, 30), 444.44],
			[Date.UTC(2017, 8, 30), 455.56],
			[Date.UTC(2017, 8, 30), 455.56],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 422.22],
			[Date.UTC(2017, 8, 30), 444.44],
			[Date.UTC(2017, 8, 30), 444.44],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 488.89],
			[Date.UTC(2017, 9, 1), 400.0],
			[Date.UTC(2017, 9, 1), 422.22],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 455.56],
			[Date.UTC(2017, 9, 1), 500.0],
			[Date.UTC(2017, 9, 1), 411.11],
			[Date.UTC(2017, 9, 1), 422.22],
			[Date.UTC(2017, 9, 1), 422.22],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 455.56],
			[Date.UTC(2017, 9, 1), 500.0],
			[Date.UTC(2017, 9, 2), 411.11],
			[Date.UTC(2017, 9, 2), 411.11],
			[Date.UTC(2017, 9, 2), 422.22],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 455.56],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 400.0],
			[Date.UTC(2017, 9, 2), 411.11],
			[Date.UTC(2017, 9, 2), 411.11],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 444.44],
			[Date.UTC(2017, 9, 3), 400.0],
			[Date.UTC(2017, 9, 3), 411.11],
			[Date.UTC(2017, 9, 3), 422.22],
			[Date.UTC(2017, 9, 3), 422.22],
			[Date.UTC(2017, 9, 3), 422.22],
			[Date.UTC(2017, 9, 3), 422.22],
			[Date.UTC(2017, 9, 3), 488.89],
			[Date.UTC(2017, 9, 3), 533.33],
			[Date.UTC(2017, 9, 3), 666.67],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 433.33],
			[Date.UTC(2017, 9, 3), 444.44],
			[Date.UTC(2017, 9, 3), 455.56],
			[Date.UTC(2017, 9, 3), 455.56],
			[Date.UTC(2017, 9, 4), 400.0],
			[Date.UTC(2017, 9, 4), 411.11],
			[Date.UTC(2017, 9, 4), 433.33],
			[Date.UTC(2017, 9, 4), 433.33],
			[Date.UTC(2017, 9, 4), 455.56],
			[Date.UTC(2017, 9, 4), 477.78],
			[Date.UTC(2017, 9, 4), 477.78],
			[Date.UTC(2017, 9, 4), 488.89],
			[Date.UTC(2017, 9, 4), 766.67],
			[Date.UTC(2017, 9, 5), 400.0],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 433.33],
			[Date.UTC(2017, 9, 5), 444.44],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 400.0],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 488.89],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 511.11],
			[Date.UTC(2017, 8, 25), 533.33],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 500.0],
			[Date.UTC(2017, 8, 26), 522.22],
			[Date.UTC(2017, 8, 26), 522.22],
			[Date.UTC(2017, 8, 26), 522.22],
			[Date.UTC(2017, 8, 26), 533.33],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 477.78],
			[Date.UTC(2017, 8, 27), 488.89],
			[Date.UTC(2017, 8, 27), 500.0],
			[Date.UTC(2017, 8, 27), 511.11],
			[Date.UTC(2017, 8, 27), 533.33],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 511.11],
			[Date.UTC(2017, 8, 28), 511.11],
			[Date.UTC(2017, 8, 28), 544.44],
			[Date.UTC(2017, 8, 28), 555.56],
			[Date.UTC(2017, 8, 28), 800.0],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 500.0],
			[Date.UTC(2017, 8, 28), 500.0],
			[Date.UTC(2017, 8, 28), 500.0],
			[Date.UTC(2017, 8, 28), 500.0],
			[Date.UTC(2017, 8, 28), 511.11],
			[Date.UTC(2017, 8, 28), 511.11],
			[Date.UTC(2017, 8, 28), 511.11],
			[Date.UTC(2017, 8, 28), 533.33],
			[Date.UTC(2017, 8, 28), 533.33],
			[Date.UTC(2017, 8, 28), 544.44],
			[Date.UTC(2017, 8, 28), 566.67],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 444.44],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 500.0],
			[Date.UTC(2017, 8, 29), 511.11],
			[Date.UTC(2017, 8, 29), 522.22],
			[Date.UTC(2017, 8, 29), 522.22],
			[Date.UTC(2017, 8, 29), 533.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 444.44],
			[Date.UTC(2017, 8, 30), 455.56],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 466.67],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 477.78],
			[Date.UTC(2017, 8, 30), 500.0],
			[Date.UTC(2017, 8, 30), 511.11],
			[Date.UTC(2017, 8, 30), 511.11],
			[Date.UTC(2017, 8, 30), 511.11],
			[Date.UTC(2017, 8, 30), 522.22],
			[Date.UTC(2017, 8, 30), 533.33],
			[Date.UTC(2017, 8, 30), 533.33],
			[Date.UTC(2017, 8, 30), 544.44],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 433.33],
			[Date.UTC(2017, 8, 30), 455.56],
			[Date.UTC(2017, 8, 30), 500.0],
			[Date.UTC(2017, 8, 30), 511.11],
			[Date.UTC(2017, 8, 30), 511.11],
			[Date.UTC(2017, 8, 30), 544.44],
			[Date.UTC(2017, 8, 30), 544.44],
			[Date.UTC(2017, 9, 1), 455.56],
			[Date.UTC(2017, 9, 1), 466.67],
			[Date.UTC(2017, 9, 1), 477.78],
			[Date.UTC(2017, 9, 1), 477.78],
			[Date.UTC(2017, 9, 1), 500.0],
			[Date.UTC(2017, 9, 1), 511.11],
			[Date.UTC(2017, 9, 1), 433.33],
			[Date.UTC(2017, 9, 1), 455.56],
			[Date.UTC(2017, 9, 1), 488.89],
			[Date.UTC(2017, 9, 1), 488.89],
			[Date.UTC(2017, 9, 1), 500.0],
			[Date.UTC(2017, 9, 1), 544.44],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 477.78],
			[Date.UTC(2017, 9, 2), 488.89],
			[Date.UTC(2017, 9, 2), 500.0],
			[Date.UTC(2017, 9, 2), 511.11],
			[Date.UTC(2017, 9, 2), 555.56],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 433.33],
			[Date.UTC(2017, 9, 2), 488.89],
			[Date.UTC(2017, 9, 2), 488.89],
			[Date.UTC(2017, 9, 2), 500.0],
			[Date.UTC(2017, 9, 3), 422.22],
			[Date.UTC(2017, 9, 3), 477.78],
			[Date.UTC(2017, 9, 3), 477.78],
			[Date.UTC(2017, 9, 3), 488.89],
			[Date.UTC(2017, 9, 3), 500.0],
			[Date.UTC(2017, 9, 3), 500.0],
			[Date.UTC(2017, 9, 3), 511.11],
			[Date.UTC(2017, 9, 3), 544.44],
			[Date.UTC(2017, 9, 3), 455.56],
			[Date.UTC(2017, 9, 3), 466.67],
			[Date.UTC(2017, 9, 3), 466.67],
			[Date.UTC(2017, 9, 3), 488.89],
			[Date.UTC(2017, 9, 3), 488.89],
			[Date.UTC(2017, 9, 4), 466.67],
			[Date.UTC(2017, 9, 4), 488.89],
			[Date.UTC(2017, 9, 4), 488.89],
			[Date.UTC(2017, 9, 4), 500.0],
			[Date.UTC(2017, 9, 4), 522.22],
			[Date.UTC(2017, 9, 4), 533.33],
			[Date.UTC(2017, 9, 4), 555.56],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 477.78],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 500.0],
			[Date.UTC(2017, 9, 5), 522.22],
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
		]    }]
}