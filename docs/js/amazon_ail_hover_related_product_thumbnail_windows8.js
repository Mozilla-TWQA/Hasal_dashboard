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
			[Date.UTC(2017, 7, 25), 411.110000],
			[Date.UTC(2017, 7, 25), 422.220000],
			[Date.UTC(2017, 7, 25), 422.220000],
			[Date.UTC(2017, 7, 25), 444.440000],
			[Date.UTC(2017, 7, 25), 444.440000],
			[Date.UTC(2017, 7, 25), 444.440000],
			[Date.UTC(2017, 7, 25), 455.560000],
			[Date.UTC(2017, 7, 25), 477.780000],
			[Date.UTC(2017, 7, 26), 400.000000],
			[Date.UTC(2017, 7, 26), 400.000000],
			[Date.UTC(2017, 7, 26), 411.110000],
			[Date.UTC(2017, 7, 26), 422.220000],
			[Date.UTC(2017, 7, 26), 455.560000],
			[Date.UTC(2017, 7, 26), 455.560000],
			[Date.UTC(2017, 7, 27), 400.000000],
			[Date.UTC(2017, 7, 27), 411.110000],
			[Date.UTC(2017, 7, 27), 411.110000],
			[Date.UTC(2017, 7, 27), 422.220000],
			[Date.UTC(2017, 7, 27), 433.330000],
			[Date.UTC(2017, 7, 27), 477.780000],
			[Date.UTC(2017, 7, 28), 411.110000],
			[Date.UTC(2017, 7, 28), 422.220000],
			[Date.UTC(2017, 7, 28), 422.220000],
			[Date.UTC(2017, 7, 28), 422.220000],
			[Date.UTC(2017, 7, 28), 455.560000],
			[Date.UTC(2017, 7, 28), 466.670000],
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
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 466.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 25), 444.440000],
			[Date.UTC(2017, 7, 25), 466.670000],
			[Date.UTC(2017, 7, 25), 488.890000],
			[Date.UTC(2017, 7, 25), 511.110000],
			[Date.UTC(2017, 7, 25), 555.560000],
			[Date.UTC(2017, 7, 25), 555.560000],
			[Date.UTC(2017, 7, 25), 555.560000],
			[Date.UTC(2017, 7, 26), 455.560000],
			[Date.UTC(2017, 7, 26), 488.890000],
			[Date.UTC(2017, 7, 26), 488.890000],
			[Date.UTC(2017, 7, 26), 511.110000],
			[Date.UTC(2017, 7, 26), 533.330000],
			[Date.UTC(2017, 7, 26), 544.440000],
			[Date.UTC(2017, 7, 26), 544.440000],
			[Date.UTC(2017, 7, 27), 488.890000],
			[Date.UTC(2017, 7, 27), 500.000000],
			[Date.UTC(2017, 7, 27), 511.110000],
			[Date.UTC(2017, 7, 27), 522.220000],
			[Date.UTC(2017, 7, 27), 522.220000],
			[Date.UTC(2017, 7, 27), 522.220000],
			[Date.UTC(2017, 7, 28), 433.330000],
			[Date.UTC(2017, 7, 28), 433.330000],
			[Date.UTC(2017, 7, 28), 455.560000],
			[Date.UTC(2017, 7, 28), 466.670000],
			[Date.UTC(2017, 7, 28), 477.780000],
			[Date.UTC(2017, 7, 28), 488.890000],
			[Date.UTC(2017, 7, 28), 533.330000],
			[Date.UTC(2017, 7, 28), 555.560000],
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
			[Date.UTC(2017, 8, 7), 522.220000],
			[Date.UTC(2017, 8, 7), 566.670000],
			[Date.UTC(2017, 8, 7), 577.780000],
		]    }]
}