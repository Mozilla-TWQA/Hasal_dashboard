var gsearch_ail_select_search_suggestion_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_search_suggestion_windows8'
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
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 44.44],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 6), 11.11],
			[Date.UTC(2017, 9, 6), 11.11],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 44.44],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 1), 22.22],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 6), 11.11],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
		]    }]
}