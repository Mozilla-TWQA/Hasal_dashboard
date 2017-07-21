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
			[Date.UTC(2017, 7, 7), 233.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 9), 11.110000],
			[Date.UTC(2017, 7, 9), 188.890000],
			[Date.UTC(2017, 7, 9), 211.110000],
			[Date.UTC(2017, 7, 9), 255.560000],
			[Date.UTC(2017, 7, 9), 300.000000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 10), 166.670000],
			[Date.UTC(2017, 7, 10), 200.000000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 288.890000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 13), 177.780000],
			[Date.UTC(2017, 7, 13), 200.000000],
			[Date.UTC(2017, 7, 13), 200.000000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 11.110000],
			[Date.UTC(2017, 7, 14), 11.110000],
			[Date.UTC(2017, 7, 14), 11.110000],
			[Date.UTC(2017, 7, 14), 266.670000],
			[Date.UTC(2017, 7, 14), 288.890000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 15), 100.000000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 222.220000],
			[Date.UTC(2017, 7, 15), 233.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 66.670000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 16), 244.440000],
			[Date.UTC(2017, 7, 16), 277.780000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 222.220000],
			[Date.UTC(2017, 7, 17), 233.330000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 311.110000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 7), 200.000000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 8), 244.440000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 9), 166.670000],
			[Date.UTC(2017, 7, 9), 177.780000],
			[Date.UTC(2017, 7, 9), 177.780000],
			[Date.UTC(2017, 7, 9), 200.000000],
			[Date.UTC(2017, 7, 9), 233.330000],
			[Date.UTC(2017, 7, 9), 244.440000],
			[Date.UTC(2017, 7, 10), 166.670000],
			[Date.UTC(2017, 7, 10), 177.780000],
			[Date.UTC(2017, 7, 11), 166.670000],
			[Date.UTC(2017, 7, 11), 177.780000],
			[Date.UTC(2017, 7, 12), 177.780000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 13), 166.670000],
			[Date.UTC(2017, 7, 13), 177.780000],
			[Date.UTC(2017, 7, 13), 211.110000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 177.780000],
			[Date.UTC(2017, 7, 14), 22.220000],
			[Date.UTC(2017, 7, 14), 233.330000],
			[Date.UTC(2017, 7, 14), 300.000000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 211.110000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 16), 188.890000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 166.670000],
			[Date.UTC(2017, 7, 17), 177.780000],
			[Date.UTC(2017, 7, 17), 244.440000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 5.560000],
		]    }]
}