var facebook_ail_type_comment_1_txt_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_comment_1_txt_windows8'
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
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 44.44],
			[Date.UTC(2017, 8, 9), 44.44],
			[Date.UTC(2017, 8, 10), 100.0],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 44.44],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 44.44],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 44.44],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 44.44],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 44.44],
		]    }]
}