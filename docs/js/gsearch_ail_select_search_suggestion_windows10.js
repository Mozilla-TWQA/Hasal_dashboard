var gsearch_ail_select_search_suggestion_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_search_suggestion_windows10'
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
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 44.44],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 13), 11.11],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 14), 11.11],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 55.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 12), 5.56],
			[Date.UTC(2017, 9, 13), 11.11],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 22.22],
		]    }]
}