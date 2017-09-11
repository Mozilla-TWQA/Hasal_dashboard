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
			[Date.UTC(2017, 7, 29), 400.000000],
			[Date.UTC(2017, 7, 29), 400.000000],
			[Date.UTC(2017, 7, 29), 411.110000],
			[Date.UTC(2017, 7, 29), 444.440000],
			[Date.UTC(2017, 7, 29), 477.780000],
			[Date.UTC(2017, 7, 29), 500.000000],
			[Date.UTC(2017, 7, 30), 400.000000],
			[Date.UTC(2017, 7, 30), 400.000000],
			[Date.UTC(2017, 7, 30), 411.110000],
			[Date.UTC(2017, 7, 30), 411.110000],
			[Date.UTC(2017, 7, 30), 411.110000],
			[Date.UTC(2017, 7, 30), 411.110000],
			[Date.UTC(2017, 7, 30), 422.220000],
			[Date.UTC(2017, 7, 30), 422.220000],
			[Date.UTC(2017, 7, 30), 422.220000],
			[Date.UTC(2017, 7, 30), 422.220000],
			[Date.UTC(2017, 7, 30), 433.330000],
			[Date.UTC(2017, 7, 30), 444.440000],
			[Date.UTC(2017, 7, 30), 455.560000],
			[Date.UTC(2017, 7, 30), 466.670000],
			[Date.UTC(2017, 7, 30), 488.890000],
			[Date.UTC(2017, 7, 30), 488.890000],
			[Date.UTC(2017, 7, 30), 533.330000],
			[Date.UTC(2017, 7, 31), 400.000000],
			[Date.UTC(2017, 7, 31), 411.110000],
			[Date.UTC(2017, 7, 31), 422.220000],
			[Date.UTC(2017, 7, 31), 433.330000],
			[Date.UTC(2017, 7, 31), 455.560000],
			[Date.UTC(2017, 7, 31), 500.000000],
			[Date.UTC(2017, 8, 1), 400.000000],
			[Date.UTC(2017, 8, 1), 422.220000],
			[Date.UTC(2017, 8, 1), 422.220000],
			[Date.UTC(2017, 8, 1), 422.220000],
			[Date.UTC(2017, 8, 1), 433.330000],
			[Date.UTC(2017, 8, 1), 444.440000],
			[Date.UTC(2017, 8, 1), 477.780000],
			[Date.UTC(2017, 8, 2), 411.110000],
			[Date.UTC(2017, 8, 2), 422.220000],
			[Date.UTC(2017, 8, 2), 422.220000],
			[Date.UTC(2017, 8, 2), 422.220000],
			[Date.UTC(2017, 8, 2), 422.220000],
			[Date.UTC(2017, 8, 2), 433.330000],
			[Date.UTC(2017, 8, 2), 455.560000],
			[Date.UTC(2017, 8, 2), 488.890000],
			[Date.UTC(2017, 8, 2), 488.890000],
			[Date.UTC(2017, 8, 2), 500.000000],
			[Date.UTC(2017, 8, 3), 400.000000],
			[Date.UTC(2017, 8, 3), 411.110000],
			[Date.UTC(2017, 8, 3), 422.220000],
			[Date.UTC(2017, 8, 3), 422.220000],
			[Date.UTC(2017, 8, 3), 433.330000],
			[Date.UTC(2017, 8, 3), 444.440000],
			[Date.UTC(2017, 8, 4), 400.000000],
			[Date.UTC(2017, 8, 4), 411.110000],
			[Date.UTC(2017, 8, 4), 422.220000],
			[Date.UTC(2017, 8, 4), 455.560000],
			[Date.UTC(2017, 8, 4), 455.560000],
			[Date.UTC(2017, 8, 4), 466.670000],
			[Date.UTC(2017, 8, 5), 400.000000],
			[Date.UTC(2017, 8, 5), 411.110000],
			[Date.UTC(2017, 8, 5), 433.330000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 477.780000],
			[Date.UTC(2017, 8, 5), 500.000000],
			[Date.UTC(2017, 8, 6), 411.110000],
			[Date.UTC(2017, 8, 6), 422.220000],
			[Date.UTC(2017, 8, 6), 422.220000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 7), 411.110000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 466.670000],
			[Date.UTC(2017, 8, 7), 477.780000],
			[Date.UTC(2017, 8, 8), 411.110000],
			[Date.UTC(2017, 8, 8), 411.110000],
			[Date.UTC(2017, 8, 8), 422.220000],
			[Date.UTC(2017, 8, 8), 422.220000],
			[Date.UTC(2017, 8, 8), 455.560000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 9), 400.000000],
			[Date.UTC(2017, 8, 9), 400.000000],
			[Date.UTC(2017, 8, 9), 411.110000],
			[Date.UTC(2017, 8, 9), 422.220000],
			[Date.UTC(2017, 8, 9), 422.220000],
			[Date.UTC(2017, 8, 9), 433.330000],
			[Date.UTC(2017, 8, 9), 444.440000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 411.110000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 433.330000],
			[Date.UTC(2017, 8, 11), 411.110000],
			[Date.UTC(2017, 8, 11), 422.220000],
			[Date.UTC(2017, 8, 11), 433.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 29), 455.560000],
			[Date.UTC(2017, 7, 29), 511.110000],
			[Date.UTC(2017, 7, 29), 511.110000],
			[Date.UTC(2017, 7, 29), 533.330000],
			[Date.UTC(2017, 7, 29), 555.560000],
			[Date.UTC(2017, 7, 29), 588.890000],
			[Date.UTC(2017, 7, 30), 400.000000],
			[Date.UTC(2017, 7, 30), 455.560000],
			[Date.UTC(2017, 7, 30), 466.670000],
			[Date.UTC(2017, 7, 30), 466.670000],
			[Date.UTC(2017, 7, 30), 477.780000],
			[Date.UTC(2017, 7, 30), 488.890000],
			[Date.UTC(2017, 7, 30), 511.110000],
			[Date.UTC(2017, 7, 30), 533.330000],
			[Date.UTC(2017, 7, 30), 533.330000],
			[Date.UTC(2017, 7, 30), 555.560000],
			[Date.UTC(2017, 7, 31), 422.220000],
			[Date.UTC(2017, 7, 31), 433.330000],
			[Date.UTC(2017, 7, 31), 444.440000],
			[Date.UTC(2017, 7, 31), 455.560000],
			[Date.UTC(2017, 7, 31), 511.110000],
			[Date.UTC(2017, 7, 31), 533.330000],
			[Date.UTC(2017, 7, 31), 544.440000],
			[Date.UTC(2017, 7, 31), 555.560000],
			[Date.UTC(2017, 7, 31), 600.000000],
			[Date.UTC(2017, 8, 1), 411.110000],
			[Date.UTC(2017, 8, 1), 411.110000],
			[Date.UTC(2017, 8, 1), 422.220000],
			[Date.UTC(2017, 8, 1), 500.000000],
			[Date.UTC(2017, 8, 1), 522.220000],
			[Date.UTC(2017, 8, 1), 533.330000],
			[Date.UTC(2017, 8, 1), 544.440000],
			[Date.UTC(2017, 8, 1), 555.560000],
			[Date.UTC(2017, 8, 2), 444.440000],
			[Date.UTC(2017, 8, 2), 488.890000],
			[Date.UTC(2017, 8, 2), 522.220000],
			[Date.UTC(2017, 8, 2), 522.220000],
			[Date.UTC(2017, 8, 2), 522.220000],
			[Date.UTC(2017, 8, 2), 544.440000],
			[Date.UTC(2017, 8, 2), 555.560000],
			[Date.UTC(2017, 8, 3), 488.890000],
			[Date.UTC(2017, 8, 3), 488.890000],
			[Date.UTC(2017, 8, 3), 488.890000],
			[Date.UTC(2017, 8, 3), 500.000000],
			[Date.UTC(2017, 8, 3), 511.110000],
			[Date.UTC(2017, 8, 3), 522.220000],
			[Date.UTC(2017, 8, 3), 588.890000],
			[Date.UTC(2017, 8, 4), 433.330000],
			[Date.UTC(2017, 8, 4), 477.780000],
			[Date.UTC(2017, 8, 4), 488.890000],
			[Date.UTC(2017, 8, 4), 533.330000],
			[Date.UTC(2017, 8, 4), 544.440000],
			[Date.UTC(2017, 8, 4), 544.440000],
			[Date.UTC(2017, 8, 5), 477.780000],
			[Date.UTC(2017, 8, 5), 500.000000],
			[Date.UTC(2017, 8, 5), 511.110000],
			[Date.UTC(2017, 8, 5), 511.110000],
			[Date.UTC(2017, 8, 5), 544.440000],
			[Date.UTC(2017, 8, 5), 544.440000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 444.440000],
			[Date.UTC(2017, 8, 6), 444.440000],
			[Date.UTC(2017, 8, 6), 477.780000],
			[Date.UTC(2017, 8, 6), 500.000000],
			[Date.UTC(2017, 8, 6), 533.330000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 500.000000],
			[Date.UTC(2017, 8, 7), 511.110000],
			[Date.UTC(2017, 8, 7), 522.220000],
			[Date.UTC(2017, 8, 7), 566.670000],
			[Date.UTC(2017, 8, 7), 577.780000],
			[Date.UTC(2017, 8, 8), 466.670000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 8), 488.890000],
			[Date.UTC(2017, 8, 8), 500.000000],
			[Date.UTC(2017, 8, 8), 511.110000],
			[Date.UTC(2017, 8, 8), 522.220000],
			[Date.UTC(2017, 8, 8), 544.440000],
			[Date.UTC(2017, 8, 8), 544.440000],
			[Date.UTC(2017, 8, 9), 433.330000],
			[Date.UTC(2017, 8, 9), 488.890000],
			[Date.UTC(2017, 8, 9), 500.000000],
			[Date.UTC(2017, 8, 9), 511.110000],
			[Date.UTC(2017, 8, 9), 533.330000],
			[Date.UTC(2017, 8, 9), 544.440000],
			[Date.UTC(2017, 8, 9), 544.440000],
			[Date.UTC(2017, 8, 10), 477.780000],
			[Date.UTC(2017, 8, 10), 511.110000],
			[Date.UTC(2017, 8, 10), 522.220000],
			[Date.UTC(2017, 8, 10), 533.330000],
			[Date.UTC(2017, 8, 10), 555.560000],
			[Date.UTC(2017, 8, 10), 555.560000],
			[Date.UTC(2017, 8, 10), 555.560000],
			[Date.UTC(2017, 8, 11), 511.110000],
		]    }]
}