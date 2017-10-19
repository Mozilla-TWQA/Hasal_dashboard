var facebook_ail_click_open_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows8'
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
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 100.0],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 6), 100.0],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 88.89],
			[Date.UTC(2017, 9, 7), 88.89],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 9), 100.0],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 77.78],
			[Date.UTC(2017, 9, 9), 77.78],
			[Date.UTC(2017, 9, 9), 77.78],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 66.67],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 77.78],
			[Date.UTC(2017, 9, 10), 88.89],
			[Date.UTC(2017, 9, 11), 77.78],
			[Date.UTC(2017, 9, 11), 77.78],
			[Date.UTC(2017, 9, 11), 77.78],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 12), 100.0],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 12), 88.89],
			[Date.UTC(2017, 9, 12), 88.89],
			[Date.UTC(2017, 9, 12), 88.89],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 13), 100.0],
			[Date.UTC(2017, 9, 13), 77.78],
			[Date.UTC(2017, 9, 13), 77.78],
			[Date.UTC(2017, 9, 13), 77.78],
			[Date.UTC(2017, 9, 13), 88.89],
			[Date.UTC(2017, 9, 13), 88.89],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 14), 88.89],
			[Date.UTC(2017, 9, 14), 88.89],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 88.89],
			[Date.UTC(2017, 9, 17), 144.44],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 322.22],
			[Date.UTC(2017, 9, 17), 333.33],
			[Date.UTC(2017, 9, 17), 344.44],
			[Date.UTC(2017, 9, 17), 355.56],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 18), 144.44],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 311.11],
			[Date.UTC(2017, 9, 18), 322.22],
			[Date.UTC(2017, 9, 18), 366.67],
			[Date.UTC(2017, 9, 18), 155.56],
			[Date.UTC(2017, 9, 18), 366.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 6), 111.11],
			[Date.UTC(2017, 9, 6), 111.11],
			[Date.UTC(2017, 9, 6), 144.44],
			[Date.UTC(2017, 9, 6), 144.44],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 88.89],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 133.33],
			[Date.UTC(2017, 9, 7), 133.33],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 8), 100.0],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 144.44],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 66.67],
			[Date.UTC(2017, 9, 9), 77.78],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 144.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 14), 44.44],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 55.56],
			[Date.UTC(2017, 9, 14), 66.67],
			[Date.UTC(2017, 9, 14), 77.78],
			[Date.UTC(2017, 9, 15), 44.44],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 55.56],
			[Date.UTC(2017, 9, 15), 77.78],
			[Date.UTC(2017, 9, 16), 100.0],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 111.11],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 122.22],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 133.33],
			[Date.UTC(2017, 9, 16), 144.44],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 55.56],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 16), 88.89],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 100.0],
			[Date.UTC(2017, 9, 17), 155.56],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 166.67],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 177.78],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 188.89],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 266.67],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 277.78],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 17), 288.89],
			[Date.UTC(2017, 9, 18), 177.78],
			[Date.UTC(2017, 9, 18), 255.56],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 266.67],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 300.0],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 255.56],
		]    }]
}