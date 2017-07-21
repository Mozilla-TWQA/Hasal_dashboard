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
			[Date.UTC(2017, 7, 7), 222.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 9), 11.110000],
			[Date.UTC(2017, 7, 9), 200.000000],
			[Date.UTC(2017, 7, 9), 22.220000],
			[Date.UTC(2017, 7, 9), 22.220000],
			[Date.UTC(2017, 7, 9), 22.220000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 222.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 233.330000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 222.220000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 200.000000],
			[Date.UTC(2017, 7, 14), 244.440000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 15), 133.330000],
			[Date.UTC(2017, 7, 15), 155.560000],
			[Date.UTC(2017, 7, 15), 188.890000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 144.440000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 8), 144.440000],
			[Date.UTC(2017, 7, 8), 144.440000],
			[Date.UTC(2017, 7, 9), 133.330000],
			[Date.UTC(2017, 7, 9), 144.440000],
			[Date.UTC(2017, 7, 9), 188.890000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 177.780000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 11), 200.000000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 12), 144.440000],
			[Date.UTC(2017, 7, 12), 155.560000],
			[Date.UTC(2017, 7, 13), 133.330000],
			[Date.UTC(2017, 7, 13), 144.440000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 15), 166.670000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 155.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
		]    }]
}