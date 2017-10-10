var amazon_ail_select_search_suggestion_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'amazon_ail_select_search_suggestion_windows10'
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
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 44.44],
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
			[Date.UTC(2017, 9, 6), 11.11],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 22.22],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 33.33],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 22.22],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 11.11],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 22.22],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 22.22],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 27), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 1), 5.56],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 3), 5.56],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 4), 5.56],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 5.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
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
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 6), 5.56],
			[Date.UTC(2017, 9, 7), 22.22],
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
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 7), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 8), 5.56],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 22.22],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
			[Date.UTC(2017, 9, 9), 5.56],
		]    }]
}