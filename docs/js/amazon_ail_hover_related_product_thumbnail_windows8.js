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
			[Date.UTC(2017, 9, 27), 400.0],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 477.78],
			[Date.UTC(2017, 9, 27), 488.89],
			[Date.UTC(2017, 9, 27), 400.0],
			[Date.UTC(2017, 9, 27), 400.0],
			[Date.UTC(2017, 9, 27), 411.11],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 455.56],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 28), 422.22],
			[Date.UTC(2017, 9, 28), 422.22],
			[Date.UTC(2017, 9, 28), 433.33],
			[Date.UTC(2017, 9, 28), 444.44],
			[Date.UTC(2017, 9, 28), 455.56],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 28), 488.89],
			[Date.UTC(2017, 9, 28), 422.22],
			[Date.UTC(2017, 9, 28), 444.44],
			[Date.UTC(2017, 9, 29), 411.11],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 388.89],
			[Date.UTC(2017, 9, 29), 388.89],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 411.11],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 455.56],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 30), 400.0],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 522.22],
			[Date.UTC(2017, 9, 31), 400.0],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 400.0],
			[Date.UTC(2017, 9, 31), 411.11],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 433.33],
			[Date.UTC(2017, 9, 31), 433.33],
			[Date.UTC(2017, 9, 31), 433.33],
			[Date.UTC(2017, 9, 31), 444.44],
			[Date.UTC(2017, 9, 31), 444.44],
			[Date.UTC(2017, 9, 31), 444.44],
			[Date.UTC(2017, 9, 31), 444.44],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 10, 1), 444.44],
			[Date.UTC(2017, 10, 1), 444.44],
			[Date.UTC(2017, 10, 1), 444.44],
			[Date.UTC(2017, 10, 1), 455.56],
			[Date.UTC(2017, 10, 1), 488.89],
			[Date.UTC(2017, 10, 1), 488.89],
			[Date.UTC(2017, 10, 1), 500.0],
			[Date.UTC(2017, 10, 1), 422.22],
			[Date.UTC(2017, 10, 1), 433.33],
			[Date.UTC(2017, 10, 1), 455.56],
			[Date.UTC(2017, 10, 1), 466.67],
			[Date.UTC(2017, 10, 1), 500.0],
			[Date.UTC(2017, 10, 2), 411.11],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 433.33],
			[Date.UTC(2017, 10, 2), 433.33],
			[Date.UTC(2017, 10, 2), 444.44],
			[Date.UTC(2017, 10, 2), 500.0],
			[Date.UTC(2017, 10, 2), 400.0],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 3), 411.11],
			[Date.UTC(2017, 10, 3), 411.11],
			[Date.UTC(2017, 10, 3), 433.33],
			[Date.UTC(2017, 10, 3), 444.44],
			[Date.UTC(2017, 10, 3), 444.44],
			[Date.UTC(2017, 10, 3), 455.56],
			[Date.UTC(2017, 10, 3), 477.78],
			[Date.UTC(2017, 10, 3), 400.0],
			[Date.UTC(2017, 10, 3), 411.11],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 433.33],
			[Date.UTC(2017, 10, 3), 433.33],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 511.11],
			[Date.UTC(2017, 10, 5), 388.89],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 377.78],
			[Date.UTC(2017, 10, 5), 388.89],
			[Date.UTC(2017, 10, 5), 388.89],
			[Date.UTC(2017, 10, 5), 388.89],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 611.11],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 466.67],
			[Date.UTC(2017, 10, 7), 477.78],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 388.89],
			[Date.UTC(2017, 10, 7), 400.0],
			[Date.UTC(2017, 10, 7), 400.0],
			[Date.UTC(2017, 10, 7), 411.11],
			[Date.UTC(2017, 10, 7), 422.22],
			[Date.UTC(2017, 10, 7), 455.56],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 422.22],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 455.56],
			[Date.UTC(2017, 10, 8), 455.56],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 588.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 27), 422.22],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 544.44],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 444.44],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 466.67],
			[Date.UTC(2017, 9, 27), 477.78],
			[Date.UTC(2017, 9, 27), 477.78],
			[Date.UTC(2017, 9, 27), 477.78],
			[Date.UTC(2017, 9, 27), 488.89],
			[Date.UTC(2017, 9, 27), 488.89],
			[Date.UTC(2017, 9, 27), 500.0],
			[Date.UTC(2017, 9, 27), 511.11],
			[Date.UTC(2017, 9, 27), 533.33],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 28), 433.33],
			[Date.UTC(2017, 9, 28), 444.44],
			[Date.UTC(2017, 9, 28), 455.56],
			[Date.UTC(2017, 9, 28), 466.67],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 477.78],
			[Date.UTC(2017, 9, 28), 500.0],
			[Date.UTC(2017, 9, 28), 522.22],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 28), 433.33],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 511.11],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 444.44],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 466.67],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 477.78],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 488.89],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 29), 500.0],
			[Date.UTC(2017, 9, 29), 511.11],
			[Date.UTC(2017, 9, 29), 511.11],
			[Date.UTC(2017, 9, 29), 544.44],
			[Date.UTC(2017, 9, 29), 544.44],
			[Date.UTC(2017, 9, 30), 400.0],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 422.22],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 444.44],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 466.67],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 477.78],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 500.0],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 511.11],
			[Date.UTC(2017, 9, 30), 522.22],
			[Date.UTC(2017, 9, 30), 522.22],
			[Date.UTC(2017, 9, 30), 522.22],
			[Date.UTC(2017, 9, 30), 522.22],
			[Date.UTC(2017, 9, 30), 533.33],
			[Date.UTC(2017, 9, 30), 533.33],
			[Date.UTC(2017, 9, 30), 544.44],
			[Date.UTC(2017, 9, 30), 544.44],
			[Date.UTC(2017, 9, 30), 544.44],
			[Date.UTC(2017, 9, 30), 544.44],
			[Date.UTC(2017, 9, 31), 411.11],
			[Date.UTC(2017, 9, 31), 411.11],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 411.11],
			[Date.UTC(2017, 9, 31), 422.22],
			[Date.UTC(2017, 9, 31), 444.44],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 455.56],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 466.67],
			[Date.UTC(2017, 9, 31), 477.78],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 500.0],
			[Date.UTC(2017, 9, 31), 522.22],
			[Date.UTC(2017, 9, 31), 533.33],
			[Date.UTC(2017, 9, 31), 533.33],
			[Date.UTC(2017, 9, 31), 533.33],
			[Date.UTC(2017, 9, 31), 544.44],
			[Date.UTC(2017, 10, 1), 433.33],
			[Date.UTC(2017, 10, 1), 433.33],
			[Date.UTC(2017, 10, 1), 466.67],
			[Date.UTC(2017, 10, 1), 466.67],
			[Date.UTC(2017, 10, 1), 477.78],
			[Date.UTC(2017, 10, 1), 511.11],
			[Date.UTC(2017, 10, 1), 444.44],
			[Date.UTC(2017, 10, 1), 455.56],
			[Date.UTC(2017, 10, 1), 488.89],
			[Date.UTC(2017, 10, 1), 500.0],
			[Date.UTC(2017, 10, 1), 511.11],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 444.44],
			[Date.UTC(2017, 10, 2), 444.44],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 2), 511.11],
			[Date.UTC(2017, 10, 2), 511.11],
			[Date.UTC(2017, 10, 2), 422.22],
			[Date.UTC(2017, 10, 2), 444.44],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 455.56],
			[Date.UTC(2017, 10, 2), 477.78],
			[Date.UTC(2017, 10, 2), 488.89],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 466.67],
			[Date.UTC(2017, 10, 3), 477.78],
			[Date.UTC(2017, 10, 3), 488.89],
			[Date.UTC(2017, 10, 3), 500.0],
			[Date.UTC(2017, 10, 3), 511.11],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 444.44],
			[Date.UTC(2017, 10, 3), 477.78],
			[Date.UTC(2017, 10, 3), 488.89],
			[Date.UTC(2017, 10, 3), 488.89],
			[Date.UTC(2017, 10, 3), 511.11],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 544.44],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 477.78],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 500.0],
			[Date.UTC(2017, 10, 4), 511.11],
			[Date.UTC(2017, 10, 4), 511.11],
			[Date.UTC(2017, 10, 4), 544.44],
			[Date.UTC(2017, 10, 4), 555.56],
			[Date.UTC(2017, 10, 4), 566.67],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 544.44],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 411.11],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 477.78],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 488.89],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 500.0],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 522.22],
			[Date.UTC(2017, 10, 5), 533.33],
			[Date.UTC(2017, 10, 5), 533.33],
			[Date.UTC(2017, 10, 5), 533.33],
			[Date.UTC(2017, 10, 5), 533.33],
			[Date.UTC(2017, 10, 5), 544.44],
			[Date.UTC(2017, 10, 5), 544.44],
			[Date.UTC(2017, 10, 5), 544.44],
			[Date.UTC(2017, 10, 5), 544.44],
			[Date.UTC(2017, 10, 5), 544.44],
			[Date.UTC(2017, 10, 7), 444.44],
			[Date.UTC(2017, 10, 7), 455.56],
			[Date.UTC(2017, 10, 7), 455.56],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 488.89],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 522.22],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 433.33],
			[Date.UTC(2017, 10, 7), 477.78],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 500.0],
			[Date.UTC(2017, 10, 7), 533.33],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 433.33],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 444.44],
			[Date.UTC(2017, 10, 8), 455.56],
			[Date.UTC(2017, 10, 8), 455.56],
			[Date.UTC(2017, 10, 8), 466.67],
			[Date.UTC(2017, 10, 8), 466.67],
			[Date.UTC(2017, 10, 8), 466.67],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 477.78],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 488.89],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 500.0],
			[Date.UTC(2017, 10, 8), 511.11],
			[Date.UTC(2017, 10, 8), 522.22],
			[Date.UTC(2017, 10, 8), 533.33],
		]    }]
}