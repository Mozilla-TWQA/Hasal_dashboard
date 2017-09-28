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
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 422.22],
			[Date.UTC(2017, 8, 14), 422.22],
			[Date.UTC(2017, 8, 14), 422.22],
			[Date.UTC(2017, 8, 14), 422.22],
			[Date.UTC(2017, 8, 14), 433.33],
			[Date.UTC(2017, 8, 14), 433.33],
			[Date.UTC(2017, 8, 14), 433.33],
			[Date.UTC(2017, 8, 14), 433.33],
			[Date.UTC(2017, 8, 14), 444.44],
			[Date.UTC(2017, 8, 14), 444.44],
			[Date.UTC(2017, 8, 14), 444.44],
			[Date.UTC(2017, 8, 14), 455.56],
			[Date.UTC(2017, 8, 14), 455.56],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 477.78],
			[Date.UTC(2017, 8, 14), 477.78],
			[Date.UTC(2017, 8, 14), 488.89],
			[Date.UTC(2017, 8, 14), 488.89],
			[Date.UTC(2017, 8, 14), 500.0],
			[Date.UTC(2017, 8, 14), 688.89],
			[Date.UTC(2017, 8, 15), 422.22],
			[Date.UTC(2017, 8, 15), 422.22],
			[Date.UTC(2017, 8, 15), 444.44],
			[Date.UTC(2017, 8, 15), 444.44],
			[Date.UTC(2017, 8, 15), 477.78],
			[Date.UTC(2017, 8, 15), 477.78],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 17), 388.89],
			[Date.UTC(2017, 8, 17), 388.89],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 588.89],
			[Date.UTC(2017, 8, 17), 633.33],
			[Date.UTC(2017, 8, 17), 666.67],
			[Date.UTC(2017, 8, 17), 677.78],
			[Date.UTC(2017, 8, 17), 777.78],
			[Date.UTC(2017, 8, 17), 788.89],
			[Date.UTC(2017, 8, 18), 411.11],
			[Date.UTC(2017, 8, 18), 411.11],
			[Date.UTC(2017, 8, 18), 411.11],
			[Date.UTC(2017, 8, 18), 422.22],
			[Date.UTC(2017, 8, 18), 422.22],
			[Date.UTC(2017, 8, 18), 433.33],
			[Date.UTC(2017, 8, 18), 433.33],
			[Date.UTC(2017, 8, 18), 444.44],
			[Date.UTC(2017, 8, 18), 444.44],
			[Date.UTC(2017, 8, 19), 388.89],
			[Date.UTC(2017, 8, 19), 411.11],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 444.44],
			[Date.UTC(2017, 8, 19), 444.44],
			[Date.UTC(2017, 8, 19), 444.44],
			[Date.UTC(2017, 8, 19), 477.78],
			[Date.UTC(2017, 8, 19), 411.11],
			[Date.UTC(2017, 8, 19), 422.22],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 444.44],
			[Date.UTC(2017, 8, 19), 488.89],
			[Date.UTC(2017, 8, 19), 488.89],
			[Date.UTC(2017, 8, 20), 411.11],
			[Date.UTC(2017, 8, 20), 422.22],
			[Date.UTC(2017, 8, 20), 422.22],
			[Date.UTC(2017, 8, 20), 422.22],
			[Date.UTC(2017, 8, 20), 422.22],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 444.44],
			[Date.UTC(2017, 8, 20), 444.44],
			[Date.UTC(2017, 8, 20), 444.44],
			[Date.UTC(2017, 8, 20), 444.44],
			[Date.UTC(2017, 8, 20), 455.56],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 477.78],
			[Date.UTC(2017, 8, 20), 900.0],
			[Date.UTC(2017, 8, 21), 422.22],
			[Date.UTC(2017, 8, 21), 422.22],
			[Date.UTC(2017, 8, 21), 433.33],
			[Date.UTC(2017, 8, 21), 444.44],
			[Date.UTC(2017, 8, 21), 444.44],
			[Date.UTC(2017, 8, 21), 455.56],
			[Date.UTC(2017, 8, 21), 477.78],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 533.33],
			[Date.UTC(2017, 8, 21), 688.89],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 455.56],
			[Date.UTC(2017, 8, 22), 455.56],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 433.33],
			[Date.UTC(2017, 8, 22), 433.33],
			[Date.UTC(2017, 8, 22), 700.0],
			[Date.UTC(2017, 8, 22), 722.22],
			[Date.UTC(2017, 8, 23), 422.22],
			[Date.UTC(2017, 8, 23), 455.56],
			[Date.UTC(2017, 8, 23), 466.67],
			[Date.UTC(2017, 8, 23), 477.78],
			[Date.UTC(2017, 8, 23), 477.78],
			[Date.UTC(2017, 8, 23), 477.78],
			[Date.UTC(2017, 8, 23), 477.78],
			[Date.UTC(2017, 8, 23), 488.89],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 422.22],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 722.22],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 522.22],
			[Date.UTC(2017, 8, 25), 400.0],
			[Date.UTC(2017, 8, 25), 422.22],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 444.44],
			[Date.UTC(2017, 8, 25), 444.44],
			[Date.UTC(2017, 8, 25), 455.56],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 477.78],
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
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 488.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 14), 422.22],
			[Date.UTC(2017, 8, 14), 488.89],
			[Date.UTC(2017, 8, 14), 488.89],
			[Date.UTC(2017, 8, 14), 511.11],
			[Date.UTC(2017, 8, 14), 511.11],
			[Date.UTC(2017, 8, 14), 533.33],
			[Date.UTC(2017, 8, 14), 577.78],
			[Date.UTC(2017, 8, 15), 488.89],
			[Date.UTC(2017, 8, 15), 488.89],
			[Date.UTC(2017, 8, 15), 488.89],
			[Date.UTC(2017, 8, 15), 500.0],
			[Date.UTC(2017, 8, 15), 511.11],
			[Date.UTC(2017, 8, 15), 522.22],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 444.44],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 522.22],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 533.33],
			[Date.UTC(2017, 8, 16), 544.44],
			[Date.UTC(2017, 8, 16), 544.44],
			[Date.UTC(2017, 8, 16), 544.44],
			[Date.UTC(2017, 8, 16), 544.44],
			[Date.UTC(2017, 8, 16), 555.56],
			[Date.UTC(2017, 8, 16), 555.56],
			[Date.UTC(2017, 8, 16), 555.56],
			[Date.UTC(2017, 8, 16), 566.67],
			[Date.UTC(2017, 8, 16), 577.78],
			[Date.UTC(2017, 8, 16), 577.78],
			[Date.UTC(2017, 8, 16), 588.89],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 511.11],
			[Date.UTC(2017, 8, 17), 511.11],
			[Date.UTC(2017, 8, 17), 522.22],
			[Date.UTC(2017, 8, 17), 522.22],
			[Date.UTC(2017, 8, 17), 522.22],
			[Date.UTC(2017, 8, 17), 522.22],
			[Date.UTC(2017, 8, 17), 522.22],
			[Date.UTC(2017, 8, 17), 544.44],
			[Date.UTC(2017, 8, 18), 455.56],
			[Date.UTC(2017, 8, 18), 477.78],
			[Date.UTC(2017, 8, 18), 477.78],
			[Date.UTC(2017, 8, 18), 488.89],
			[Date.UTC(2017, 8, 18), 500.0],
			[Date.UTC(2017, 8, 18), 511.11],
			[Date.UTC(2017, 8, 18), 511.11],
			[Date.UTC(2017, 8, 18), 522.22],
			[Date.UTC(2017, 8, 18), 522.22],
			[Date.UTC(2017, 8, 19), 477.78],
			[Date.UTC(2017, 8, 19), 488.89],
			[Date.UTC(2017, 8, 19), 511.11],
			[Date.UTC(2017, 8, 19), 511.11],
			[Date.UTC(2017, 8, 19), 511.11],
			[Date.UTC(2017, 8, 19), 522.22],
			[Date.UTC(2017, 8, 19), 522.22],
			[Date.UTC(2017, 8, 19), 533.33],
			[Date.UTC(2017, 8, 19), 566.67],
			[Date.UTC(2017, 8, 19), 477.78],
			[Date.UTC(2017, 8, 19), 500.0],
			[Date.UTC(2017, 8, 19), 533.33],
			[Date.UTC(2017, 8, 19), 533.33],
			[Date.UTC(2017, 8, 19), 544.44],
			[Date.UTC(2017, 8, 19), 544.44],
			[Date.UTC(2017, 8, 20), 444.44],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 477.78],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 522.22],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 477.78],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 500.0],
			[Date.UTC(2017, 8, 20), 500.0],
			[Date.UTC(2017, 8, 20), 511.11],
			[Date.UTC(2017, 8, 20), 533.33],
			[Date.UTC(2017, 8, 20), 544.44],
			[Date.UTC(2017, 8, 21), 511.11],
			[Date.UTC(2017, 8, 21), 477.78],
			[Date.UTC(2017, 8, 21), 477.78],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 511.11],
			[Date.UTC(2017, 8, 21), 511.11],
			[Date.UTC(2017, 8, 21), 522.22],
			[Date.UTC(2017, 8, 21), 544.44],
			[Date.UTC(2017, 8, 21), 544.44],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 477.78],
			[Date.UTC(2017, 8, 22), 477.78],
			[Date.UTC(2017, 8, 22), 488.89],
			[Date.UTC(2017, 8, 22), 488.89],
			[Date.UTC(2017, 8, 22), 500.0],
			[Date.UTC(2017, 8, 22), 500.0],
			[Date.UTC(2017, 8, 22), 522.22],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 488.89],
			[Date.UTC(2017, 8, 22), 488.89],
			[Date.UTC(2017, 8, 22), 500.0],
			[Date.UTC(2017, 8, 22), 544.44],
			[Date.UTC(2017, 8, 23), 455.56],
			[Date.UTC(2017, 8, 23), 455.56],
			[Date.UTC(2017, 8, 23), 466.67],
			[Date.UTC(2017, 8, 23), 477.78],
			[Date.UTC(2017, 8, 23), 500.0],
			[Date.UTC(2017, 8, 23), 500.0],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 500.0],
			[Date.UTC(2017, 8, 24), 500.0],
			[Date.UTC(2017, 8, 24), 522.22],
			[Date.UTC(2017, 8, 24), 533.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 488.89],
			[Date.UTC(2017, 8, 24), 500.0],
			[Date.UTC(2017, 8, 24), 511.11],
			[Date.UTC(2017, 8, 25), 455.56],
			[Date.UTC(2017, 8, 25), 455.56],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 488.89],
			[Date.UTC(2017, 8, 25), 533.33],
			[Date.UTC(2017, 8, 25), 533.33],
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
			[Date.UTC(2017, 8, 28), 511.11],
			[Date.UTC(2017, 8, 28), 555.56],
		]    }]
}