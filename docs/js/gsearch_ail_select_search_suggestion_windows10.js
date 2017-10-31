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
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 33.33],
			[Date.UTC(2017, 9, 23), 33.33],
			[Date.UTC(2017, 9, 23), 33.33],
			[Date.UTC(2017, 9, 23), 44.44],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 33.33],
			[Date.UTC(2017, 9, 24), 33.33],
			[Date.UTC(2017, 9, 24), 33.33],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 25), 11.11],
			[Date.UTC(2017, 9, 25), 11.11],
			[Date.UTC(2017, 9, 25), 11.11],
			[Date.UTC(2017, 9, 25), 22.22],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 26), 11.11],
			[Date.UTC(2017, 9, 26), 11.11],
			[Date.UTC(2017, 9, 26), 22.22],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 11.11],
			[Date.UTC(2017, 9, 26), 11.11],
			[Date.UTC(2017, 9, 26), 22.22],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 11.11],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 22.22],
			[Date.UTC(2017, 9, 23), 22.22],
			[Date.UTC(2017, 9, 23), 22.22],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 24), 11.11],
			[Date.UTC(2017, 9, 24), 11.11],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 22.22],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 11.11],
			[Date.UTC(2017, 9, 27), 11.11],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 29), 11.11],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 11.11],
			[Date.UTC(2017, 9, 29), 11.11],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 5.56],
			[Date.UTC(2017, 9, 30), 5.56],
			[Date.UTC(2017, 9, 30), 5.56],
			[Date.UTC(2017, 9, 30), 5.56],
			[Date.UTC(2017, 9, 30), 5.56],
		]    }]
}