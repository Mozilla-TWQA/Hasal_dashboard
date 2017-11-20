var gdoc_ail_pagedown_10_text_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gdoc_ail_pagedown_10_text_windows10'
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
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 9), 44.44],
			[Date.UTC(2017, 10, 9), 55.56],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 9), 66.67],
			[Date.UTC(2017, 10, 10), 44.44],
			[Date.UTC(2017, 10, 10), 44.44],
			[Date.UTC(2017, 10, 10), 44.44],
			[Date.UTC(2017, 10, 10), 44.44],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 66.67],
			[Date.UTC(2017, 10, 10), 66.67],
			[Date.UTC(2017, 10, 10), 66.67],
			[Date.UTC(2017, 10, 10), 77.78],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 12), 44.44],
			[Date.UTC(2017, 10, 12), 44.44],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 77.78],
			[Date.UTC(2017, 10, 13), 88.89],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 13), 66.67],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 55.56],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 14), 66.67],
			[Date.UTC(2017, 10, 15), 44.44],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 44.44],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 44.44],
			[Date.UTC(2017, 10, 15), 44.44],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 66.67],
			[Date.UTC(2017, 10, 15), 77.78],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 33.33],
			[Date.UTC(2017, 10, 16), 55.56],
			[Date.UTC(2017, 10, 16), 55.56],
			[Date.UTC(2017, 10, 16), 55.56],
			[Date.UTC(2017, 10, 16), 66.67],
			[Date.UTC(2017, 10, 16), 77.78],
			[Date.UTC(2017, 10, 17), 33.33],
			[Date.UTC(2017, 10, 17), 44.44],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 88.89],
			[Date.UTC(2017, 10, 17), 44.44],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 18), 44.44],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 66.67],
			[Date.UTC(2017, 10, 18), 66.67],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 66.67],
			[Date.UTC(2017, 10, 18), 66.67],
			[Date.UTC(2017, 10, 18), 77.78],
			[Date.UTC(2017, 10, 19), 33.33],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 55.56],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 19), 33.33],
			[Date.UTC(2017, 10, 19), 33.33],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 5.56],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 20), 66.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 477.78],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 344.44],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 9), 11.11],
			[Date.UTC(2017, 10, 9), 11.11],
			[Date.UTC(2017, 10, 9), 188.89],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 222.22],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 10), 122.22],
			[Date.UTC(2017, 10, 10), 188.89],
			[Date.UTC(2017, 10, 10), 288.89],
			[Date.UTC(2017, 10, 10), 33.33],
			[Date.UTC(2017, 10, 10), 33.33],
			[Date.UTC(2017, 10, 10), 366.67],
			[Date.UTC(2017, 10, 10), 422.22],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 388.89],
			[Date.UTC(2017, 10, 11), 400.0],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 344.44],
			[Date.UTC(2017, 10, 11), 388.89],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 11), 422.22],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 477.78],
			[Date.UTC(2017, 10, 11), 5.56],
			[Date.UTC(2017, 10, 11), 5.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 33.33],
			[Date.UTC(2017, 10, 12), 33.33],
			[Date.UTC(2017, 10, 12), 5.56],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 322.22],
			[Date.UTC(2017, 10, 13), 322.22],
			[Date.UTC(2017, 10, 13), 33.33],
			[Date.UTC(2017, 10, 13), 333.33],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 13), 5.56],
			[Date.UTC(2017, 10, 13), 55.56],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 33.33],
			[Date.UTC(2017, 10, 13), 400.0],
			[Date.UTC(2017, 10, 13), 44.44],
			[Date.UTC(2017, 10, 13), 444.44],
			[Date.UTC(2017, 10, 14), 11.11],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 33.33],
			[Date.UTC(2017, 10, 14), 33.33],
			[Date.UTC(2017, 10, 14), 411.11],
			[Date.UTC(2017, 10, 14), 466.67],
			[Date.UTC(2017, 10, 14), 11.11],
			[Date.UTC(2017, 10, 14), 22.22],
			[Date.UTC(2017, 10, 14), 288.89],
			[Date.UTC(2017, 10, 14), 33.33],
			[Date.UTC(2017, 10, 14), 33.33],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 377.78],
			[Date.UTC(2017, 10, 15), 5.56],
			[Date.UTC(2017, 10, 15), 55.56],
			[Date.UTC(2017, 10, 15), 11.11],
			[Date.UTC(2017, 10, 15), 22.22],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 44.44],
			[Date.UTC(2017, 10, 15), 5.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 22.22],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 33.33],
			[Date.UTC(2017, 10, 15), 422.22],
			[Date.UTC(2017, 10, 15), 433.33],
			[Date.UTC(2017, 10, 15), 477.78],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 16), 188.89],
			[Date.UTC(2017, 10, 16), 33.33],
			[Date.UTC(2017, 10, 16), 33.33],
			[Date.UTC(2017, 10, 16), 33.33],
			[Date.UTC(2017, 10, 16), 33.33],
			[Date.UTC(2017, 10, 16), 55.56],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 22.22],
			[Date.UTC(2017, 10, 17), 22.22],
			[Date.UTC(2017, 10, 17), 22.22],
			[Date.UTC(2017, 10, 17), 244.44],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 344.44],
			[Date.UTC(2017, 10, 17), 44.44],
			[Date.UTC(2017, 10, 17), 55.56],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 66.67],
			[Date.UTC(2017, 10, 17), 88.89],
			[Date.UTC(2017, 10, 17), 22.22],
			[Date.UTC(2017, 10, 17), 22.22],
			[Date.UTC(2017, 10, 17), 33.33],
			[Date.UTC(2017, 10, 17), 355.56],
			[Date.UTC(2017, 10, 17), 5.56],
			[Date.UTC(2017, 10, 17), 77.78],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 22.22],
			[Date.UTC(2017, 10, 18), 22.22],
			[Date.UTC(2017, 10, 18), 33.33],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 33.33],
			[Date.UTC(2017, 10, 18), 388.89],
			[Date.UTC(2017, 10, 18), 55.56],
			[Date.UTC(2017, 10, 18), 88.89],
			[Date.UTC(2017, 10, 19), 11.11],
			[Date.UTC(2017, 10, 19), 11.11],
			[Date.UTC(2017, 10, 19), 300.0],
			[Date.UTC(2017, 10, 19), 33.33],
			[Date.UTC(2017, 10, 19), 44.44],
			[Date.UTC(2017, 10, 19), 88.89],
			[Date.UTC(2017, 10, 19), 100.0],
			[Date.UTC(2017, 10, 19), 111.11],
			[Date.UTC(2017, 10, 19), 122.22],
			[Date.UTC(2017, 10, 19), 166.67],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 388.89],
			[Date.UTC(2017, 10, 19), 55.56],
			[Date.UTC(2017, 10, 19), 55.56],
			[Date.UTC(2017, 10, 19), 55.56],
			[Date.UTC(2017, 10, 19), 66.67],
			[Date.UTC(2017, 10, 20), 288.89],
			[Date.UTC(2017, 10, 20), 322.22],
		]    }]
}