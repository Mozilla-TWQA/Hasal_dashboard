var youtube_ail_select_search_suggestion_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'youtube_ail_select_search_suggestion_windows8'
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
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 8), 311.110000],
			[Date.UTC(2017, 7, 8), 44.440000],
			[Date.UTC(2017, 7, 9), 266.670000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 44.440000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 233.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 55.560000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 255.560000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 44.440000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 9), 255.560000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 244.440000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 15), 300.000000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
		]    }]
}