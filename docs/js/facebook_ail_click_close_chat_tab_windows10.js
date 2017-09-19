var facebook_ail_click_close_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows10'
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
			[Date.UTC(2017, 8, 6), 111.11],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 88.89],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 7), 44.44],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 8), 55.56],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 10), 44.44],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 11), 55.56],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 12), 111.11],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 77.78],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 13), 100.0],
			[Date.UTC(2017, 8, 13), 44.44],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 88.89],
			[Date.UTC(2017, 8, 14), 133.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 16), 100.0],
			[Date.UTC(2017, 8, 16), 111.11],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 233.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 11.11],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 7), 33.33],
			[Date.UTC(2017, 8, 7), 33.33],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 8), 44.44],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 44.44],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 44.44],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 33.33],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 11), 55.56],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 12), 55.56],
			[Date.UTC(2017, 8, 12), 55.56],
			[Date.UTC(2017, 8, 12), 55.56],
			[Date.UTC(2017, 8, 13), 11.11],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 222.22],
			[Date.UTC(2017, 8, 15), 233.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 16), 122.22],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 188.89],
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
			[Date.UTC(2017, 8, 17), 66.67],
		]    }]
}