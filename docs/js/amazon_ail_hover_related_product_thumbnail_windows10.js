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
			[Date.UTC(2017, 8, 8), 377.78],
			[Date.UTC(2017, 8, 8), 400.0],
			[Date.UTC(2017, 8, 8), 400.0],
			[Date.UTC(2017, 8, 8), 400.0],
			[Date.UTC(2017, 8, 8), 400.0],
			[Date.UTC(2017, 8, 8), 477.78],
			[Date.UTC(2017, 8, 8), 600.0],
			[Date.UTC(2017, 8, 9), 400.0],
			[Date.UTC(2017, 8, 9), 411.11],
			[Date.UTC(2017, 8, 9), 411.11],
			[Date.UTC(2017, 8, 9), 444.44],
			[Date.UTC(2017, 8, 9), 466.67],
			[Date.UTC(2017, 8, 9), 466.67],
			[Date.UTC(2017, 8, 9), 488.89],
			[Date.UTC(2017, 8, 10), 388.89],
			[Date.UTC(2017, 8, 10), 400.0],
			[Date.UTC(2017, 8, 10), 400.0],
			[Date.UTC(2017, 8, 10), 400.0],
			[Date.UTC(2017, 8, 10), 422.22],
			[Date.UTC(2017, 8, 10), 433.33],
			[Date.UTC(2017, 8, 10), 466.67],
			[Date.UTC(2017, 8, 11), 366.67],
			[Date.UTC(2017, 8, 11), 400.0],
			[Date.UTC(2017, 8, 11), 400.0],
			[Date.UTC(2017, 8, 11), 433.33],
			[Date.UTC(2017, 8, 11), 466.67],
			[Date.UTC(2017, 8, 11), 488.89],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 422.22],
			[Date.UTC(2017, 8, 12), 477.78],
			[Date.UTC(2017, 8, 12), 511.11],
			[Date.UTC(2017, 8, 12), 577.78],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 400.0],
			[Date.UTC(2017, 8, 12), 411.11],
			[Date.UTC(2017, 8, 12), 411.11],
			[Date.UTC(2017, 8, 12), 411.11],
			[Date.UTC(2017, 8, 12), 411.11],
			[Date.UTC(2017, 8, 12), 411.11],
			[Date.UTC(2017, 8, 12), 411.11],
			[Date.UTC(2017, 8, 12), 422.22],
			[Date.UTC(2017, 8, 12), 433.33],
			[Date.UTC(2017, 8, 12), 433.33],
			[Date.UTC(2017, 8, 12), 433.33],
			[Date.UTC(2017, 8, 12), 444.44],
			[Date.UTC(2017, 8, 12), 455.56],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 522.22],
			[Date.UTC(2017, 8, 12), 800.0],
			[Date.UTC(2017, 8, 13), 422.22],
			[Date.UTC(2017, 8, 13), 433.33],
			[Date.UTC(2017, 8, 13), 455.56],
			[Date.UTC(2017, 8, 14), 400.0],
			[Date.UTC(2017, 8, 14), 400.0],
			[Date.UTC(2017, 8, 14), 400.0],
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 755.56],
			[Date.UTC(2017, 8, 14), 377.78],
			[Date.UTC(2017, 8, 14), 411.11],
			[Date.UTC(2017, 8, 14), 422.22],
			[Date.UTC(2017, 8, 14), 433.33],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 466.67],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 8), 377.78],
			[Date.UTC(2017, 8, 8), 455.56],
			[Date.UTC(2017, 8, 8), 455.56],
			[Date.UTC(2017, 8, 8), 466.67],
			[Date.UTC(2017, 8, 8), 500.0],
			[Date.UTC(2017, 8, 8), 511.11],
			[Date.UTC(2017, 8, 9), 466.67],
			[Date.UTC(2017, 8, 9), 466.67],
			[Date.UTC(2017, 8, 9), 466.67],
			[Date.UTC(2017, 8, 9), 466.67],
			[Date.UTC(2017, 8, 9), 477.78],
			[Date.UTC(2017, 8, 9), 477.78],
			[Date.UTC(2017, 8, 9), 511.11],
			[Date.UTC(2017, 8, 10), 422.22],
			[Date.UTC(2017, 8, 10), 466.67],
			[Date.UTC(2017, 8, 10), 466.67],
			[Date.UTC(2017, 8, 10), 466.67],
			[Date.UTC(2017, 8, 10), 477.78],
			[Date.UTC(2017, 8, 10), 477.78],
			[Date.UTC(2017, 8, 10), 488.89],
			[Date.UTC(2017, 8, 11), 388.89],
			[Date.UTC(2017, 8, 11), 433.33],
			[Date.UTC(2017, 8, 11), 444.44],
			[Date.UTC(2017, 8, 11), 477.78],
			[Date.UTC(2017, 8, 11), 511.11],
			[Date.UTC(2017, 8, 11), 522.22],
			[Date.UTC(2017, 8, 12), 444.44],
			[Date.UTC(2017, 8, 12), 444.44],
			[Date.UTC(2017, 8, 12), 455.56],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 488.89],
			[Date.UTC(2017, 8, 12), 488.89],
			[Date.UTC(2017, 8, 12), 422.22],
			[Date.UTC(2017, 8, 12), 422.22],
			[Date.UTC(2017, 8, 12), 422.22],
			[Date.UTC(2017, 8, 12), 444.44],
			[Date.UTC(2017, 8, 12), 444.44],
			[Date.UTC(2017, 8, 12), 455.56],
			[Date.UTC(2017, 8, 12), 455.56],
			[Date.UTC(2017, 8, 12), 455.56],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 466.67],
			[Date.UTC(2017, 8, 12), 477.78],
			[Date.UTC(2017, 8, 12), 477.78],
			[Date.UTC(2017, 8, 12), 477.78],
			[Date.UTC(2017, 8, 12), 477.78],
			[Date.UTC(2017, 8, 12), 488.89],
			[Date.UTC(2017, 8, 12), 488.89],
			[Date.UTC(2017, 8, 12), 488.89],
			[Date.UTC(2017, 8, 12), 500.0],
			[Date.UTC(2017, 8, 12), 500.0],
			[Date.UTC(2017, 8, 12), 511.11],
			[Date.UTC(2017, 8, 12), 511.11],
			[Date.UTC(2017, 8, 12), 511.11],
			[Date.UTC(2017, 8, 12), 533.33],
			[Date.UTC(2017, 8, 12), 533.33],
			[Date.UTC(2017, 8, 13), 466.67],
			[Date.UTC(2017, 8, 13), 466.67],
			[Date.UTC(2017, 8, 13), 488.89],
			[Date.UTC(2017, 8, 13), 500.0],
			[Date.UTC(2017, 8, 13), 533.33],
			[Date.UTC(2017, 8, 14), 377.78],
			[Date.UTC(2017, 8, 14), 433.33],
			[Date.UTC(2017, 8, 14), 444.44],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 14), 500.0],
			[Date.UTC(2017, 8, 14), 500.0],
			[Date.UTC(2017, 8, 14), 511.11],
			[Date.UTC(2017, 8, 14), 455.56],
			[Date.UTC(2017, 8, 14), 466.67],
			[Date.UTC(2017, 8, 15), 377.78],
			[Date.UTC(2017, 8, 15), 400.0],
			[Date.UTC(2017, 8, 15), 400.0],
			[Date.UTC(2017, 8, 15), 422.22],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 433.33],
			[Date.UTC(2017, 8, 15), 433.33],
			[Date.UTC(2017, 8, 15), 433.33],
			[Date.UTC(2017, 8, 15), 444.44],
			[Date.UTC(2017, 8, 15), 455.56],
			[Date.UTC(2017, 8, 15), 455.56],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 466.67],
			[Date.UTC(2017, 8, 15), 477.78],
			[Date.UTC(2017, 8, 15), 477.78],
			[Date.UTC(2017, 8, 15), 477.78],
			[Date.UTC(2017, 8, 15), 500.0],
			[Date.UTC(2017, 8, 15), 500.0],
			[Date.UTC(2017, 8, 15), 511.11],
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
		]    }]
}