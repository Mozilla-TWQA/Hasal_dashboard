var youtube_ail_type_in_search_field_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'youtube_ail_type_in_search_field_windows8'
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
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 44.440000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 2), 11.110000],
			[Date.UTC(2017, 8, 2), 11.110000],
			[Date.UTC(2017, 8, 2), 11.110000],
			[Date.UTC(2017, 8, 2), 11.110000],
			[Date.UTC(2017, 8, 2), 11.110000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 3), 11.110000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 4), 11.110000],
			[Date.UTC(2017, 8, 4), 11.110000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 5), 11.110000],
			[Date.UTC(2017, 8, 5), 11.110000],
			[Date.UTC(2017, 8, 5), 11.110000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 8), 11.110000],
			[Date.UTC(2017, 8, 8), 11.110000],
			[Date.UTC(2017, 8, 8), 11.110000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 12), 11.110000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
		]    }]
}