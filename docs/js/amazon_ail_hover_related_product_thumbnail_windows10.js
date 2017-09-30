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
			[Date.UTC(2017, 8, 16), 377.78],
			[Date.UTC(2017, 8, 16), 377.78],
			[Date.UTC(2017, 8, 16), 377.78],
			[Date.UTC(2017, 8, 16), 388.89],
			[Date.UTC(2017, 8, 16), 388.89],
			[Date.UTC(2017, 8, 16), 388.89],
			[Date.UTC(2017, 8, 16), 388.89],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 400.0],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 411.11],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
			[Date.UTC(2017, 8, 16), 422.22],
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
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 16), 511.11],
			[Date.UTC(2017, 8, 17), 377.78],
			[Date.UTC(2017, 8, 17), 377.78],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 400.0],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 411.11],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 422.22],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 444.44],
			[Date.UTC(2017, 8, 17), 455.56],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 477.78],
			[Date.UTC(2017, 8, 17), 511.11],
			[Date.UTC(2017, 8, 18), 400.0],
			[Date.UTC(2017, 8, 18), 444.44],
			[Date.UTC(2017, 8, 18), 388.89],
			[Date.UTC(2017, 8, 18), 400.0],
			[Date.UTC(2017, 8, 18), 411.11],
			[Date.UTC(2017, 8, 18), 422.22],
			[Date.UTC(2017, 8, 19), 400.0],
			[Date.UTC(2017, 8, 19), 444.44],
			[Date.UTC(2017, 8, 19), 477.78],
			[Date.UTC(2017, 8, 19), 411.11],
			[Date.UTC(2017, 8, 19), 411.11],
			[Date.UTC(2017, 8, 19), 422.22],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 20), 388.89],
			[Date.UTC(2017, 8, 20), 400.0],
			[Date.UTC(2017, 8, 20), 400.0],
			[Date.UTC(2017, 8, 20), 411.11],
			[Date.UTC(2017, 8, 20), 422.22],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 400.0],
			[Date.UTC(2017, 8, 20), 422.22],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 433.33],
			[Date.UTC(2017, 8, 20), 455.56],
			[Date.UTC(2017, 8, 20), 477.78],
			[Date.UTC(2017, 8, 21), 433.33],
			[Date.UTC(2017, 8, 21), 433.33],
			[Date.UTC(2017, 8, 21), 433.33],
			[Date.UTC(2017, 8, 21), 444.44],
			[Date.UTC(2017, 8, 21), 444.44],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 544.44],
			[Date.UTC(2017, 8, 21), 644.44],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 433.33],
			[Date.UTC(2017, 8, 22), 433.33],
			[Date.UTC(2017, 8, 22), 433.33],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 522.22],
			[Date.UTC(2017, 8, 22), 577.78],
			[Date.UTC(2017, 8, 22), 411.11],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 477.78],
			[Date.UTC(2017, 8, 22), 522.22],
			[Date.UTC(2017, 8, 22), 555.56],
			[Date.UTC(2017, 8, 22), 788.89],
			[Date.UTC(2017, 8, 23), 377.78],
			[Date.UTC(2017, 8, 23), 400.0],
			[Date.UTC(2017, 8, 23), 411.11],
			[Date.UTC(2017, 8, 23), 411.11],
			[Date.UTC(2017, 8, 23), 411.11],
			[Date.UTC(2017, 8, 23), 411.11],
			[Date.UTC(2017, 8, 23), 422.22],
			[Date.UTC(2017, 8, 23), 422.22],
			[Date.UTC(2017, 8, 23), 433.33],
			[Date.UTC(2017, 8, 24), 388.89],
			[Date.UTC(2017, 8, 24), 400.0],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 422.22],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 488.89],
			[Date.UTC(2017, 8, 24), 411.11],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 25), 400.0],
			[Date.UTC(2017, 8, 25), 411.11],
			[Date.UTC(2017, 8, 25), 411.11],
			[Date.UTC(2017, 8, 25), 411.11],
			[Date.UTC(2017, 8, 25), 422.22],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 455.56],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 477.78],
			[Date.UTC(2017, 8, 26), 400.0],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 422.22],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 544.44],
			[Date.UTC(2017, 8, 27), 400.0],
			[Date.UTC(2017, 8, 27), 400.0],
			[Date.UTC(2017, 8, 27), 400.0],
			[Date.UTC(2017, 8, 27), 411.11],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 422.22],
			[Date.UTC(2017, 8, 27), 433.33],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 28), 400.0],
			[Date.UTC(2017, 8, 28), 411.11],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 422.22],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 500.0],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 477.78],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 29), 400.0],
			[Date.UTC(2017, 8, 29), 400.0],
			[Date.UTC(2017, 8, 29), 400.0],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 422.22],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 466.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 16), 433.33],
			[Date.UTC(2017, 8, 16), 455.56],
			[Date.UTC(2017, 8, 16), 466.67],
			[Date.UTC(2017, 8, 16), 477.78],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 488.89],
			[Date.UTC(2017, 8, 16), 500.0],
			[Date.UTC(2017, 8, 17), 433.33],
			[Date.UTC(2017, 8, 17), 433.33],
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
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 466.67],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 488.89],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 500.0],
			[Date.UTC(2017, 8, 17), 511.11],
			[Date.UTC(2017, 8, 17), 522.22],
			[Date.UTC(2017, 8, 18), 433.33],
			[Date.UTC(2017, 8, 18), 433.33],
			[Date.UTC(2017, 8, 18), 444.44],
			[Date.UTC(2017, 8, 18), 444.44],
			[Date.UTC(2017, 8, 18), 477.78],
			[Date.UTC(2017, 8, 18), 477.78],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 433.33],
			[Date.UTC(2017, 8, 19), 444.44],
			[Date.UTC(2017, 8, 19), 455.56],
			[Date.UTC(2017, 8, 19), 466.67],
			[Date.UTC(2017, 8, 19), 488.89],
			[Date.UTC(2017, 8, 19), 455.56],
			[Date.UTC(2017, 8, 19), 466.67],
			[Date.UTC(2017, 8, 19), 466.67],
			[Date.UTC(2017, 8, 19), 488.89],
			[Date.UTC(2017, 8, 19), 488.89],
			[Date.UTC(2017, 8, 19), 500.0],
			[Date.UTC(2017, 8, 20), 388.89],
			[Date.UTC(2017, 8, 20), 455.56],
			[Date.UTC(2017, 8, 20), 455.56],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 477.78],
			[Date.UTC(2017, 8, 20), 488.89],
			[Date.UTC(2017, 8, 20), 500.0],
			[Date.UTC(2017, 8, 20), 444.44],
			[Date.UTC(2017, 8, 20), 455.56],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 466.67],
			[Date.UTC(2017, 8, 20), 522.22],
			[Date.UTC(2017, 8, 21), 433.33],
			[Date.UTC(2017, 8, 21), 466.67],
			[Date.UTC(2017, 8, 21), 466.67],
			[Date.UTC(2017, 8, 21), 466.67],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 488.89],
			[Date.UTC(2017, 8, 21), 500.0],
			[Date.UTC(2017, 8, 21), 500.0],
			[Date.UTC(2017, 8, 21), 500.0],
			[Date.UTC(2017, 8, 22), 422.22],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 477.78],
			[Date.UTC(2017, 8, 22), 500.0],
			[Date.UTC(2017, 8, 22), 433.33],
			[Date.UTC(2017, 8, 22), 444.44],
			[Date.UTC(2017, 8, 22), 466.67],
			[Date.UTC(2017, 8, 22), 477.78],
			[Date.UTC(2017, 8, 22), 477.78],
			[Date.UTC(2017, 8, 22), 522.22],
			[Date.UTC(2017, 8, 23), 411.11],
			[Date.UTC(2017, 8, 23), 422.22],
			[Date.UTC(2017, 8, 23), 422.22],
			[Date.UTC(2017, 8, 23), 433.33],
			[Date.UTC(2017, 8, 23), 444.44],
			[Date.UTC(2017, 8, 23), 444.44],
			[Date.UTC(2017, 8, 23), 455.56],
			[Date.UTC(2017, 8, 23), 466.67],
			[Date.UTC(2017, 8, 23), 466.67],
			[Date.UTC(2017, 8, 23), 466.67],
			[Date.UTC(2017, 8, 23), 466.67],
			[Date.UTC(2017, 8, 23), 511.11],
			[Date.UTC(2017, 8, 24), 422.22],
			[Date.UTC(2017, 8, 24), 433.33],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 455.56],
			[Date.UTC(2017, 8, 24), 466.67],
			[Date.UTC(2017, 8, 24), 466.67],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 444.44],
			[Date.UTC(2017, 8, 24), 466.67],
			[Date.UTC(2017, 8, 24), 466.67],
			[Date.UTC(2017, 8, 24), 477.78],
			[Date.UTC(2017, 8, 24), 488.89],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 433.33],
			[Date.UTC(2017, 8, 25), 444.44],
			[Date.UTC(2017, 8, 25), 466.67],
			[Date.UTC(2017, 8, 25), 477.78],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 533.33],
			[Date.UTC(2017, 8, 25), 444.44],
			[Date.UTC(2017, 8, 25), 488.89],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 500.0],
			[Date.UTC(2017, 8, 25), 522.22],
			[Date.UTC(2017, 8, 26), 411.11],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 444.44],
			[Date.UTC(2017, 8, 26), 444.44],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 466.67],
			[Date.UTC(2017, 8, 26), 511.11],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 433.33],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 455.56],
			[Date.UTC(2017, 8, 26), 488.89],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 466.67],
			[Date.UTC(2017, 8, 27), 488.89],
			[Date.UTC(2017, 8, 27), 488.89],
			[Date.UTC(2017, 8, 27), 500.0],
			[Date.UTC(2017, 8, 27), 500.0],
			[Date.UTC(2017, 8, 28), 400.0],
			[Date.UTC(2017, 8, 28), 411.11],
			[Date.UTC(2017, 8, 28), 433.33],
			[Date.UTC(2017, 8, 28), 433.33],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 444.44],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 922.22],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 466.67],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 28), 488.89],
			[Date.UTC(2017, 8, 29), 411.11],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 433.33],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 455.56],
			[Date.UTC(2017, 8, 29), 466.67],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 488.89],
			[Date.UTC(2017, 8, 29), 500.0],
			[Date.UTC(2017, 8, 29), 511.11],
			[Date.UTC(2017, 8, 29), 477.78],
			[Date.UTC(2017, 8, 29), 488.89],
		]    }]
}