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
			[Date.UTC(2017, 8, 5), 388.890000],
			[Date.UTC(2017, 8, 5), 388.890000],
			[Date.UTC(2017, 8, 5), 388.890000],
			[Date.UTC(2017, 8, 5), 411.110000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 566.670000],
			[Date.UTC(2017, 8, 6), 388.890000],
			[Date.UTC(2017, 8, 6), 400.000000],
			[Date.UTC(2017, 8, 6), 400.000000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 488.890000],
			[Date.UTC(2017, 8, 7), 400.000000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 422.220000],
			[Date.UTC(2017, 8, 7), 433.330000],
			[Date.UTC(2017, 8, 7), 455.560000],
			[Date.UTC(2017, 8, 7), 488.890000],
			[Date.UTC(2017, 8, 8), 377.780000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 400.000000],
			[Date.UTC(2017, 8, 8), 477.780000],
			[Date.UTC(2017, 8, 8), 600.000000],
			[Date.UTC(2017, 8, 9), 400.000000],
			[Date.UTC(2017, 8, 9), 411.110000],
			[Date.UTC(2017, 8, 9), 411.110000],
			[Date.UTC(2017, 8, 9), 444.440000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 488.890000],
			[Date.UTC(2017, 8, 10), 388.890000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 400.000000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 433.330000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 11), 366.670000],
			[Date.UTC(2017, 8, 11), 400.000000],
			[Date.UTC(2017, 8, 11), 400.000000],
			[Date.UTC(2017, 8, 11), 433.330000],
			[Date.UTC(2017, 8, 11), 466.670000],
			[Date.UTC(2017, 8, 11), 488.890000],
			[Date.UTC(2017, 8, 12), 400.000000],
			[Date.UTC(2017, 8, 12), 422.220000],
			[Date.UTC(2017, 8, 12), 477.780000],
			[Date.UTC(2017, 8, 12), 511.110000],
			[Date.UTC(2017, 8, 12), 577.780000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 400.000000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 411.110000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 522.220000],
			[Date.UTC(2017, 8, 13), 800.000000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 433.330000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 14), 400.000000],
			[Date.UTC(2017, 8, 14), 400.000000],
			[Date.UTC(2017, 8, 14), 400.000000],
			[Date.UTC(2017, 8, 14), 411.110000],
			[Date.UTC(2017, 8, 14), 411.110000],
			[Date.UTC(2017, 8, 14), 466.670000],
			[Date.UTC(2017, 8, 14), 466.670000],
			[Date.UTC(2017, 8, 14), 755.560000],
			[Date.UTC(2017, 8, 15), 377.780000],
			[Date.UTC(2017, 8, 15), 411.110000],
			[Date.UTC(2017, 8, 15), 422.220000],
			[Date.UTC(2017, 8, 15), 433.330000],
			[Date.UTC(2017, 8, 15), 466.670000],
			[Date.UTC(2017, 8, 15), 466.670000],
			[Date.UTC(2017, 8, 17), 511.110000],
			[Date.UTC(2017, 8, 18), 377.780000],
			[Date.UTC(2017, 8, 18), 377.780000],
			[Date.UTC(2017, 8, 18), 400.000000],
			[Date.UTC(2017, 8, 18), 400.000000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 411.110000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 422.220000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 477.780000],
			[Date.UTC(2017, 8, 18), 511.110000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 444.440000],
			[Date.UTC(2017, 8, 5), 466.670000],
			[Date.UTC(2017, 8, 5), 466.670000],
			[Date.UTC(2017, 8, 5), 477.780000],
			[Date.UTC(2017, 8, 5), 500.000000],
			[Date.UTC(2017, 8, 6), 433.330000],
			[Date.UTC(2017, 8, 6), 444.440000],
			[Date.UTC(2017, 8, 6), 455.560000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 466.670000],
			[Date.UTC(2017, 8, 6), 488.890000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 444.440000],
			[Date.UTC(2017, 8, 7), 466.670000],
			[Date.UTC(2017, 8, 7), 477.780000],
			[Date.UTC(2017, 8, 7), 488.890000],
			[Date.UTC(2017, 8, 7), 500.000000],
			[Date.UTC(2017, 8, 7), 511.110000],
			[Date.UTC(2017, 8, 8), 377.780000],
			[Date.UTC(2017, 8, 8), 455.560000],
			[Date.UTC(2017, 8, 8), 455.560000],
			[Date.UTC(2017, 8, 8), 466.670000],
			[Date.UTC(2017, 8, 8), 500.000000],
			[Date.UTC(2017, 8, 8), 511.110000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 466.670000],
			[Date.UTC(2017, 8, 9), 477.780000],
			[Date.UTC(2017, 8, 9), 477.780000],
			[Date.UTC(2017, 8, 9), 511.110000],
			[Date.UTC(2017, 8, 10), 422.220000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 10), 466.670000],
			[Date.UTC(2017, 8, 10), 477.780000],
			[Date.UTC(2017, 8, 10), 477.780000],
			[Date.UTC(2017, 8, 10), 488.890000],
			[Date.UTC(2017, 8, 11), 388.890000],
			[Date.UTC(2017, 8, 11), 433.330000],
			[Date.UTC(2017, 8, 11), 444.440000],
			[Date.UTC(2017, 8, 11), 477.780000],
			[Date.UTC(2017, 8, 11), 511.110000],
			[Date.UTC(2017, 8, 11), 522.220000],
			[Date.UTC(2017, 8, 12), 444.440000],
			[Date.UTC(2017, 8, 12), 444.440000],
			[Date.UTC(2017, 8, 12), 455.560000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 466.670000],
			[Date.UTC(2017, 8, 12), 488.890000],
			[Date.UTC(2017, 8, 12), 488.890000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 422.220000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 444.440000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 455.560000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 477.780000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 500.000000],
			[Date.UTC(2017, 8, 13), 500.000000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 511.110000],
			[Date.UTC(2017, 8, 13), 533.330000],
			[Date.UTC(2017, 8, 13), 533.330000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 466.670000],
			[Date.UTC(2017, 8, 13), 488.890000],
			[Date.UTC(2017, 8, 13), 500.000000],
			[Date.UTC(2017, 8, 13), 533.330000],
			[Date.UTC(2017, 8, 14), 377.780000],
			[Date.UTC(2017, 8, 14), 433.330000],
			[Date.UTC(2017, 8, 14), 444.440000],
			[Date.UTC(2017, 8, 14), 466.670000],
			[Date.UTC(2017, 8, 14), 466.670000],
			[Date.UTC(2017, 8, 14), 500.000000],
			[Date.UTC(2017, 8, 14), 500.000000],
			[Date.UTC(2017, 8, 14), 511.110000],
			[Date.UTC(2017, 8, 15), 455.560000],
			[Date.UTC(2017, 8, 15), 466.670000],
			[Date.UTC(2017, 8, 16), 433.330000],
			[Date.UTC(2017, 8, 16), 455.560000],
			[Date.UTC(2017, 8, 16), 466.670000],
			[Date.UTC(2017, 8, 16), 466.670000],
			[Date.UTC(2017, 8, 16), 466.670000],
			[Date.UTC(2017, 8, 16), 466.670000],
			[Date.UTC(2017, 8, 16), 511.110000],
			[Date.UTC(2017, 8, 17), 433.330000],
			[Date.UTC(2017, 8, 17), 455.560000],
			[Date.UTC(2017, 8, 17), 466.670000],
			[Date.UTC(2017, 8, 17), 477.780000],
			[Date.UTC(2017, 8, 17), 488.890000],
			[Date.UTC(2017, 8, 17), 488.890000],
			[Date.UTC(2017, 8, 17), 500.000000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 444.440000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 455.560000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 466.670000],
			[Date.UTC(2017, 8, 18), 488.890000],
			[Date.UTC(2017, 8, 18), 488.890000],
			[Date.UTC(2017, 8, 18), 500.000000],
			[Date.UTC(2017, 8, 18), 500.000000],
			[Date.UTC(2017, 8, 18), 511.110000],
			[Date.UTC(2017, 8, 18), 522.220000],
		]    }]
}