var facebook_ail_click_close_chat_tab_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows8'
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
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 77.78],
			[Date.UTC(2017, 8, 7), 77.78],
			[Date.UTC(2017, 8, 7), 77.78],
			[Date.UTC(2017, 8, 7), 77.78],
			[Date.UTC(2017, 8, 7), 77.78],
			[Date.UTC(2017, 8, 7), 88.89],
			[Date.UTC(2017, 8, 7), 88.89],
			[Date.UTC(2017, 8, 7), 88.89],
			[Date.UTC(2017, 8, 7), 88.89],
			[Date.UTC(2017, 8, 7), 88.89],
			[Date.UTC(2017, 8, 7), 88.89],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 9), 88.89],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 77.78],
			[Date.UTC(2017, 8, 10), 77.78],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 11), 55.56],
			[Date.UTC(2017, 8, 11), 55.56],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 77.78],
			[Date.UTC(2017, 8, 12), 100.0],
			[Date.UTC(2017, 8, 12), 44.44],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 77.78],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 12), 88.89],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 66.67],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 17), 100.0],
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
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 100.0],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 44.44],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 55.56],
			[Date.UTC(2017, 8, 6), 66.67],
			[Date.UTC(2017, 8, 6), 77.78],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 55.56],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 66.67],
			[Date.UTC(2017, 8, 7), 77.78],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 55.56],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 66.67],
			[Date.UTC(2017, 8, 9), 77.78],
			[Date.UTC(2017, 8, 10), 44.44],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 55.56],
			[Date.UTC(2017, 8, 10), 66.67],
			[Date.UTC(2017, 8, 10), 77.78],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 11), 55.56],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 66.67],
			[Date.UTC(2017, 8, 11), 77.78],
			[Date.UTC(2017, 8, 11), 77.78],
			[Date.UTC(2017, 8, 12), 55.56],
			[Date.UTC(2017, 8, 12), 55.56],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 12), 66.67],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 55.56],
			[Date.UTC(2017, 8, 13), 77.78],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 16), 133.33],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 77.78],
		]    }]
}