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
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 88.89],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 9), 44.44],
			[Date.UTC(2017, 9, 9), 44.44],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 11), 66.67],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 44.44],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 44.44],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 18), 55.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 322.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 344.44],
			[Date.UTC(2017, 9, 5), 355.56],
			[Date.UTC(2017, 9, 5), 466.67],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 6), 166.67],
			[Date.UTC(2017, 9, 6), 277.78],
			[Date.UTC(2017, 9, 6), 300.0],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 388.89],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 455.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 266.67],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 355.56],
			[Date.UTC(2017, 9, 8), 100.0],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 311.11],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 166.67],
			[Date.UTC(2017, 9, 8), 422.22],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 10), 100.0],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 388.89],
			[Date.UTC(2017, 9, 10), 455.56],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 200.0],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 333.33],
			[Date.UTC(2017, 9, 11), 377.78],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 11), 144.44],
			[Date.UTC(2017, 9, 11), 211.11],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 12), 300.0],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 300.0],
			[Date.UTC(2017, 9, 13), 311.11],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 13), 155.56],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 77.78],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 366.67],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 322.22],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 488.89],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 255.56],
			[Date.UTC(2017, 9, 16), 288.89],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 400.0],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 11.11],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 200.0],
		]    }]
}