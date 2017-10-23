var facebook_ail_type_composerbox_1_txt_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_composerbox_1_txt_windows8'
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
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 44.44],
			[Date.UTC(2017, 9, 15), 44.44],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 17), 66.67],
			[Date.UTC(2017, 9, 18), 44.44],
			[Date.UTC(2017, 9, 18), 44.44],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 44.44],
			[Date.UTC(2017, 9, 18), 44.44],
			[Date.UTC(2017, 9, 18), 55.56],
			[Date.UTC(2017, 9, 19), 44.44],
			[Date.UTC(2017, 9, 19), 44.44],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 66.67],
			[Date.UTC(2017, 9, 19), 77.78],
			[Date.UTC(2017, 9, 19), 44.44],
			[Date.UTC(2017, 9, 19), 44.44],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 55.56],
			[Date.UTC(2017, 9, 19), 66.67],
			[Date.UTC(2017, 9, 19), 66.67],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 20), 44.44],
			[Date.UTC(2017, 9, 20), 55.56],
			[Date.UTC(2017, 9, 20), 55.56],
			[Date.UTC(2017, 9, 20), 55.56],
			[Date.UTC(2017, 9, 20), 66.67],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 44.44],
			[Date.UTC(2017, 9, 21), 55.56],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 44.44],
			[Date.UTC(2017, 9, 22), 55.56],
			[Date.UTC(2017, 9, 22), 66.67],
			[Date.UTC(2017, 9, 22), 66.67],
			[Date.UTC(2017, 9, 23), 55.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 22.22],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 22.22],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 14), 33.33],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 11.11],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 44.44],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 22.22],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 16), 33.33],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 44.44],
			[Date.UTC(2017, 9, 18), 44.44],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 55.56],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 44.44],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 11.11],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 23), 33.33],
		]    }]
}