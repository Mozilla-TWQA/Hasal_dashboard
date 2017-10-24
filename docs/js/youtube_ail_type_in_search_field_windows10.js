var youtube_ail_type_in_search_field_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'youtube_ail_type_in_search_field_windows10'
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
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 14), 11.11],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 17), 11.11],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 20), 100.0],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 20), 44.44],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 55.56],
			[Date.UTC(2017, 9, 21), 66.67],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 22.22],
			[Date.UTC(2017, 9, 23), 22.22],
			[Date.UTC(2017, 9, 23), 33.33],
			[Date.UTC(2017, 9, 23), 44.44],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 33.33],
			[Date.UTC(2017, 9, 24), 33.33],
			[Date.UTC(2017, 9, 24), 33.33],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 11), 5.56],
			[Date.UTC(2017, 9, 12), 22.22],
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
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 14), 5.56],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
		]    }]
}