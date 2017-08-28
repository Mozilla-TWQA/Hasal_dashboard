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
			[Date.UTC(2017, 7, 15), 388.890000],
			[Date.UTC(2017, 7, 15), 400.000000],
			[Date.UTC(2017, 7, 15), 422.220000],
			[Date.UTC(2017, 7, 15), 444.440000],
			[Date.UTC(2017, 7, 15), 455.560000],
			[Date.UTC(2017, 7, 15), 477.780000],
			[Date.UTC(2017, 7, 15), 477.780000],
			[Date.UTC(2017, 7, 16), 411.110000],
			[Date.UTC(2017, 7, 16), 411.110000],
			[Date.UTC(2017, 7, 16), 411.110000],
			[Date.UTC(2017, 7, 16), 422.220000],
			[Date.UTC(2017, 7, 16), 455.560000],
			[Date.UTC(2017, 7, 16), 455.560000],
			[Date.UTC(2017, 7, 16), 477.780000],
			[Date.UTC(2017, 7, 16), 477.780000],
			[Date.UTC(2017, 7, 16), 488.890000],
			[Date.UTC(2017, 7, 17), 400.000000],
			[Date.UTC(2017, 7, 17), 411.110000],
			[Date.UTC(2017, 7, 17), 422.220000],
			[Date.UTC(2017, 7, 17), 422.220000],
			[Date.UTC(2017, 7, 17), 422.220000],
			[Date.UTC(2017, 7, 17), 466.670000],
			[Date.UTC(2017, 7, 17), 500.000000],
			[Date.UTC(2017, 7, 18), 400.000000],
			[Date.UTC(2017, 7, 18), 400.000000],
			[Date.UTC(2017, 7, 18), 400.000000],
			[Date.UTC(2017, 7, 18), 400.000000],
			[Date.UTC(2017, 7, 18), 400.000000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 433.330000],
			[Date.UTC(2017, 7, 18), 433.330000],
			[Date.UTC(2017, 7, 18), 433.330000],
			[Date.UTC(2017, 7, 18), 444.440000],
			[Date.UTC(2017, 7, 18), 455.560000],
			[Date.UTC(2017, 7, 18), 466.670000],
			[Date.UTC(2017, 7, 18), 466.670000],
			[Date.UTC(2017, 7, 18), 477.780000],
			[Date.UTC(2017, 7, 18), 477.780000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 19), 388.890000],
			[Date.UTC(2017, 7, 19), 388.890000],
			[Date.UTC(2017, 7, 19), 388.890000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 444.440000],
			[Date.UTC(2017, 7, 19), 444.440000],
			[Date.UTC(2017, 7, 19), 444.440000],
			[Date.UTC(2017, 7, 19), 444.440000],
			[Date.UTC(2017, 7, 19), 488.890000],
			[Date.UTC(2017, 7, 20), 388.890000],
			[Date.UTC(2017, 7, 20), 400.000000],
			[Date.UTC(2017, 7, 20), 400.000000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 422.220000],
			[Date.UTC(2017, 7, 20), 422.220000],
			[Date.UTC(2017, 7, 20), 422.220000],
			[Date.UTC(2017, 7, 20), 422.220000],
			[Date.UTC(2017, 7, 20), 433.330000],
			[Date.UTC(2017, 7, 20), 433.330000],
			[Date.UTC(2017, 7, 20), 444.440000],
			[Date.UTC(2017, 7, 20), 444.440000],
			[Date.UTC(2017, 7, 20), 444.440000],
			[Date.UTC(2017, 7, 20), 444.440000],
			[Date.UTC(2017, 7, 20), 488.890000],
			[Date.UTC(2017, 7, 21), 400.000000],
			[Date.UTC(2017, 7, 21), 411.110000],
			[Date.UTC(2017, 7, 21), 411.110000],
			[Date.UTC(2017, 7, 21), 411.110000],
			[Date.UTC(2017, 7, 21), 422.220000],
			[Date.UTC(2017, 7, 21), 433.330000],
			[Date.UTC(2017, 7, 21), 433.330000],
			[Date.UTC(2017, 7, 21), 455.560000],
			[Date.UTC(2017, 7, 21), 466.670000],
			[Date.UTC(2017, 7, 21), 788.890000],
			[Date.UTC(2017, 7, 22), 400.000000],
			[Date.UTC(2017, 7, 22), 400.000000],
			[Date.UTC(2017, 7, 22), 411.110000],
			[Date.UTC(2017, 7, 22), 411.110000],
			[Date.UTC(2017, 7, 22), 411.110000],
			[Date.UTC(2017, 7, 22), 411.110000],
			[Date.UTC(2017, 7, 22), 411.110000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 444.440000],
			[Date.UTC(2017, 7, 22), 455.560000],
			[Date.UTC(2017, 7, 22), 466.670000],
			[Date.UTC(2017, 7, 22), 466.670000],
			[Date.UTC(2017, 7, 22), 477.780000],
			[Date.UTC(2017, 7, 22), 477.780000],
			[Date.UTC(2017, 7, 22), 488.890000],
			[Date.UTC(2017, 7, 22), 488.890000],
			[Date.UTC(2017, 7, 22), 500.000000],
			[Date.UTC(2017, 7, 23), 400.000000],
			[Date.UTC(2017, 7, 23), 411.110000],
			[Date.UTC(2017, 7, 23), 411.110000],
			[Date.UTC(2017, 7, 23), 433.330000],
			[Date.UTC(2017, 7, 23), 455.560000],
			[Date.UTC(2017, 7, 23), 466.670000],
			[Date.UTC(2017, 7, 24), 400.000000],
			[Date.UTC(2017, 7, 24), 400.000000],
			[Date.UTC(2017, 7, 24), 466.670000],
			[Date.UTC(2017, 7, 24), 477.780000],
			[Date.UTC(2017, 7, 24), 500.000000],
			[Date.UTC(2017, 7, 24), 500.000000],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 15), 500.000000],
			[Date.UTC(2017, 7, 15), 500.000000],
			[Date.UTC(2017, 7, 15), 511.110000],
			[Date.UTC(2017, 7, 15), 511.110000],
			[Date.UTC(2017, 7, 15), 511.110000],
			[Date.UTC(2017, 7, 15), 555.560000],
			[Date.UTC(2017, 7, 16), 411.110000],
			[Date.UTC(2017, 7, 16), 477.780000],
			[Date.UTC(2017, 7, 16), 488.890000],
			[Date.UTC(2017, 7, 16), 500.000000],
			[Date.UTC(2017, 7, 16), 522.220000],
			[Date.UTC(2017, 7, 16), 533.330000],
			[Date.UTC(2017, 7, 16), 544.440000],
			[Date.UTC(2017, 7, 17), 433.330000],
			[Date.UTC(2017, 7, 17), 433.330000],
			[Date.UTC(2017, 7, 17), 511.110000],
			[Date.UTC(2017, 7, 17), 533.330000],
			[Date.UTC(2017, 7, 17), 555.560000],
			[Date.UTC(2017, 7, 17), 577.780000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 18), 444.440000],
			[Date.UTC(2017, 7, 18), 444.440000],
			[Date.UTC(2017, 7, 18), 444.440000],
			[Date.UTC(2017, 7, 18), 455.560000],
			[Date.UTC(2017, 7, 18), 466.670000],
			[Date.UTC(2017, 7, 18), 477.780000],
			[Date.UTC(2017, 7, 18), 488.890000],
			[Date.UTC(2017, 7, 18), 488.890000],
			[Date.UTC(2017, 7, 18), 488.890000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 511.110000],
			[Date.UTC(2017, 7, 18), 522.220000],
			[Date.UTC(2017, 7, 18), 522.220000],
			[Date.UTC(2017, 7, 18), 522.220000],
			[Date.UTC(2017, 7, 18), 522.220000],
			[Date.UTC(2017, 7, 18), 522.220000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 533.330000],
			[Date.UTC(2017, 7, 18), 544.440000],
			[Date.UTC(2017, 7, 18), 544.440000],
			[Date.UTC(2017, 7, 18), 544.440000],
			[Date.UTC(2017, 7, 18), 544.440000],
			[Date.UTC(2017, 7, 18), 555.560000],
			[Date.UTC(2017, 7, 18), 555.560000],
			[Date.UTC(2017, 7, 18), 555.560000],
			[Date.UTC(2017, 7, 18), 566.670000],
			[Date.UTC(2017, 7, 19), 455.560000],
			[Date.UTC(2017, 7, 19), 477.780000],
			[Date.UTC(2017, 7, 19), 477.780000],
			[Date.UTC(2017, 7, 19), 488.890000],
			[Date.UTC(2017, 7, 19), 488.890000],
			[Date.UTC(2017, 7, 19), 488.890000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 511.110000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 533.330000],
			[Date.UTC(2017, 7, 19), 533.330000],
			[Date.UTC(2017, 7, 19), 533.330000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 544.440000],
			[Date.UTC(2017, 7, 19), 555.560000],
			[Date.UTC(2017, 7, 19), 577.780000],
			[Date.UTC(2017, 7, 19), 600.000000],
			[Date.UTC(2017, 7, 20), 466.670000],
			[Date.UTC(2017, 7, 20), 477.780000],
			[Date.UTC(2017, 7, 20), 477.780000],
			[Date.UTC(2017, 7, 20), 477.780000],
			[Date.UTC(2017, 7, 20), 488.890000],
			[Date.UTC(2017, 7, 20), 488.890000],
			[Date.UTC(2017, 7, 20), 488.890000],
			[Date.UTC(2017, 7, 20), 500.000000],
			[Date.UTC(2017, 7, 20), 500.000000],
			[Date.UTC(2017, 7, 20), 500.000000],
			[Date.UTC(2017, 7, 20), 500.000000],
			[Date.UTC(2017, 7, 20), 511.110000],
			[Date.UTC(2017, 7, 20), 511.110000],
			[Date.UTC(2017, 7, 20), 511.110000],
			[Date.UTC(2017, 7, 20), 511.110000],
			[Date.UTC(2017, 7, 20), 511.110000],
			[Date.UTC(2017, 7, 20), 522.220000],
			[Date.UTC(2017, 7, 20), 533.330000],
			[Date.UTC(2017, 7, 20), 533.330000],
			[Date.UTC(2017, 7, 20), 544.440000],
			[Date.UTC(2017, 7, 20), 555.560000],
			[Date.UTC(2017, 7, 20), 588.890000],
			[Date.UTC(2017, 7, 21), 422.220000],
			[Date.UTC(2017, 7, 21), 444.440000],
			[Date.UTC(2017, 7, 21), 444.440000],
			[Date.UTC(2017, 7, 21), 455.560000],
			[Date.UTC(2017, 7, 21), 477.780000],
			[Date.UTC(2017, 7, 21), 488.890000],
			[Date.UTC(2017, 7, 21), 488.890000],
			[Date.UTC(2017, 7, 21), 488.890000],
			[Date.UTC(2017, 7, 21), 488.890000],
			[Date.UTC(2017, 7, 21), 488.890000],
			[Date.UTC(2017, 7, 21), 488.890000],
			[Date.UTC(2017, 7, 21), 500.000000],
			[Date.UTC(2017, 7, 21), 500.000000],
			[Date.UTC(2017, 7, 21), 500.000000],
			[Date.UTC(2017, 7, 21), 511.110000],
			[Date.UTC(2017, 7, 21), 544.440000],
			[Date.UTC(2017, 7, 21), 544.440000],
			[Date.UTC(2017, 7, 21), 544.440000],
			[Date.UTC(2017, 7, 21), 566.670000],
			[Date.UTC(2017, 7, 21), 566.670000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 422.220000],
			[Date.UTC(2017, 7, 22), 433.330000],
			[Date.UTC(2017, 7, 22), 433.330000],
			[Date.UTC(2017, 7, 22), 433.330000],
			[Date.UTC(2017, 7, 22), 444.440000],
			[Date.UTC(2017, 7, 22), 455.560000],
			[Date.UTC(2017, 7, 22), 455.560000],
			[Date.UTC(2017, 7, 22), 455.560000],
			[Date.UTC(2017, 7, 22), 466.670000],
			[Date.UTC(2017, 7, 22), 477.780000],
			[Date.UTC(2017, 7, 22), 511.110000],
			[Date.UTC(2017, 7, 22), 511.110000],
			[Date.UTC(2017, 7, 22), 511.110000],
			[Date.UTC(2017, 7, 22), 522.220000],
			[Date.UTC(2017, 7, 22), 533.330000],
			[Date.UTC(2017, 7, 22), 533.330000],
			[Date.UTC(2017, 7, 22), 533.330000],
			[Date.UTC(2017, 7, 22), 533.330000],
			[Date.UTC(2017, 7, 22), 533.330000],
			[Date.UTC(2017, 7, 22), 544.440000],
			[Date.UTC(2017, 7, 22), 544.440000],
			[Date.UTC(2017, 7, 22), 544.440000],
			[Date.UTC(2017, 7, 22), 544.440000],
			[Date.UTC(2017, 7, 22), 566.670000],
			[Date.UTC(2017, 7, 22), 566.670000],
			[Date.UTC(2017, 7, 22), 577.780000],
			[Date.UTC(2017, 7, 22), 577.780000],
			[Date.UTC(2017, 7, 23), 422.220000],
			[Date.UTC(2017, 7, 23), 422.220000],
			[Date.UTC(2017, 7, 23), 522.220000],
			[Date.UTC(2017, 7, 23), 522.220000],
			[Date.UTC(2017, 7, 23), 522.220000],
			[Date.UTC(2017, 7, 23), 533.330000],
			[Date.UTC(2017, 7, 24), 433.330000],
			[Date.UTC(2017, 7, 24), 433.330000],
			[Date.UTC(2017, 7, 24), 488.890000],
			[Date.UTC(2017, 7, 24), 544.440000],
			[Date.UTC(2017, 7, 24), 577.780000],
			[Date.UTC(2017, 7, 24), 600.000000],
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
		]    }]
}