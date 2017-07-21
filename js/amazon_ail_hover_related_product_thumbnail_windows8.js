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
			[Date.UTC(2017, 7, 7), 455.560000],
			[Date.UTC(2017, 7, 7), 433.330000],
			[Date.UTC(2017, 7, 7), 455.560000],
			[Date.UTC(2017, 7, 8), 400.000000],
			[Date.UTC(2017, 7, 8), 500.000000],
			[Date.UTC(2017, 7, 9), 377.780000],
			[Date.UTC(2017, 7, 9), 433.330000],
			[Date.UTC(2017, 7, 10), 400.000000],
			[Date.UTC(2017, 7, 10), 422.220000],
			[Date.UTC(2017, 7, 11), 400.000000],
			[Date.UTC(2017, 7, 11), 400.000000],
			[Date.UTC(2017, 7, 12), 400.000000],
			[Date.UTC(2017, 7, 12), 411.110000],
			[Date.UTC(2017, 7, 12), 422.220000],
			[Date.UTC(2017, 7, 12), 477.780000],
			[Date.UTC(2017, 7, 13), 388.890000],
			[Date.UTC(2017, 7, 13), 400.000000],
			[Date.UTC(2017, 7, 13), 411.110000],
			[Date.UTC(2017, 7, 13), 422.220000],
			[Date.UTC(2017, 7, 13), 433.330000],
			[Date.UTC(2017, 7, 13), 444.440000],
			[Date.UTC(2017, 7, 14), 400.000000],
			[Date.UTC(2017, 7, 14), 411.110000],
			[Date.UTC(2017, 7, 14), 422.220000],
			[Date.UTC(2017, 7, 14), 422.220000],
			[Date.UTC(2017, 7, 14), 433.330000],
			[Date.UTC(2017, 7, 14), 588.890000],
			[Date.UTC(2017, 7, 15), 388.890000],
			[Date.UTC(2017, 7, 15), 422.220000],
			[Date.UTC(2017, 7, 15), 422.220000],
			[Date.UTC(2017, 7, 15), 422.220000],
			[Date.UTC(2017, 7, 15), 433.330000],
			[Date.UTC(2017, 7, 15), 455.560000],
			[Date.UTC(2017, 7, 16), 433.330000],
			[Date.UTC(2017, 7, 16), 477.780000],
			[Date.UTC(2017, 7, 17), 433.330000],
			[Date.UTC(2017, 7, 17), 444.440000],
			[Date.UTC(2017, 7, 17), 455.560000],
			[Date.UTC(2017, 7, 17), 488.890000],
			[Date.UTC(2017, 7, 17), 488.890000],
			[Date.UTC(2017, 7, 17), 500.000000],
			[Date.UTC(2017, 7, 18), 411.110000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 488.890000],
			[Date.UTC(2017, 7, 19), 522.220000],
			[Date.UTC(2017, 7, 19), 611.110000],
			[Date.UTC(2017, 7, 19), 377.780000],
			[Date.UTC(2017, 7, 19), 400.000000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 20), 411.110000],
			[Date.UTC(2017, 7, 20), 411.110000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 500.000000],
			[Date.UTC(2017, 7, 7), 411.110000],
			[Date.UTC(2017, 7, 7), 455.560000],
			[Date.UTC(2017, 7, 8), 422.220000],
			[Date.UTC(2017, 7, 8), 433.330000],
			[Date.UTC(2017, 7, 9), 433.330000],
			[Date.UTC(2017, 7, 9), 500.000000],
			[Date.UTC(2017, 7, 10), 400.000000],
			[Date.UTC(2017, 7, 10), 511.110000],
			[Date.UTC(2017, 7, 11), 388.890000],
			[Date.UTC(2017, 7, 11), 422.220000],
			[Date.UTC(2017, 7, 12), 433.330000],
			[Date.UTC(2017, 7, 12), 444.440000],
			[Date.UTC(2017, 7, 12), 444.440000],
			[Date.UTC(2017, 7, 12), 477.780000],
			[Date.UTC(2017, 7, 13), 400.000000],
			[Date.UTC(2017, 7, 13), 411.110000],
			[Date.UTC(2017, 7, 13), 422.220000],
			[Date.UTC(2017, 7, 13), 444.440000],
			[Date.UTC(2017, 7, 13), 500.000000],
			[Date.UTC(2017, 7, 14), 388.890000],
			[Date.UTC(2017, 7, 14), 433.330000],
			[Date.UTC(2017, 7, 14), 444.440000],
			[Date.UTC(2017, 7, 14), 488.890000],
			[Date.UTC(2017, 7, 14), 533.330000],
			[Date.UTC(2017, 7, 15), 388.890000],
			[Date.UTC(2017, 7, 15), 400.000000],
			[Date.UTC(2017, 7, 15), 444.440000],
			[Date.UTC(2017, 7, 15), 488.890000],
			[Date.UTC(2017, 7, 15), 488.890000],
			[Date.UTC(2017, 7, 16), 444.440000],
			[Date.UTC(2017, 7, 16), 511.110000],
			[Date.UTC(2017, 7, 17), 433.330000],
			[Date.UTC(2017, 7, 17), 444.440000],
			[Date.UTC(2017, 7, 17), 444.440000],
			[Date.UTC(2017, 7, 17), 466.670000],
			[Date.UTC(2017, 7, 17), 500.000000],
			[Date.UTC(2017, 7, 17), 511.110000],
			[Date.UTC(2017, 7, 18), 500.000000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 433.330000],
			[Date.UTC(2017, 7, 19), 477.780000],
			[Date.UTC(2017, 7, 19), 488.890000],
			[Date.UTC(2017, 7, 19), 500.000000],
			[Date.UTC(2017, 7, 19), 533.330000],
			[Date.UTC(2017, 7, 19), 411.110000],
			[Date.UTC(2017, 7, 19), 422.220000],
			[Date.UTC(2017, 7, 19), 477.780000],
			[Date.UTC(2017, 7, 19), 533.330000],
			[Date.UTC(2017, 7, 19), 533.330000],
			[Date.UTC(2017, 7, 20), 433.330000],
			[Date.UTC(2017, 7, 20), 433.330000],
		]    }]
}