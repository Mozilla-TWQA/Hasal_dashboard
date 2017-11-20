var facebook_ail_click_open_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_windows10'
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
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 222.22],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 344.44],
			[Date.UTC(2017, 10, 7), 344.44],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 188.89],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 233.33],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 311.11],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 366.67],
			[Date.UTC(2017, 10, 9), 200.0],
			[Date.UTC(2017, 10, 9), 211.11],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 9), 244.44],
			[Date.UTC(2017, 10, 9), 255.56],
			[Date.UTC(2017, 10, 9), 255.56],
			[Date.UTC(2017, 10, 9), 777.78],
			[Date.UTC(2017, 10, 10), 211.11],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 222.22],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 255.56],
			[Date.UTC(2017, 10, 10), 400.0],
			[Date.UTC(2017, 10, 10), 5.56],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 388.89],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 1000.0],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 377.78],
			[Date.UTC(2017, 10, 11), 455.56],
			[Date.UTC(2017, 10, 11), 466.67],
			[Date.UTC(2017, 10, 11), 511.11],
			[Date.UTC(2017, 10, 11), 722.22],
			[Date.UTC(2017, 10, 11), 844.44],
			[Date.UTC(2017, 10, 11), 888.89],
			[Date.UTC(2017, 10, 12), 211.11],
			[Date.UTC(2017, 10, 12), 211.11],
			[Date.UTC(2017, 10, 12), 233.33],
			[Date.UTC(2017, 10, 12), 366.67],
			[Date.UTC(2017, 10, 12), 377.78],
			[Date.UTC(2017, 10, 12), 400.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 500.0],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 222.22],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 388.89],
			[Date.UTC(2017, 10, 14), 422.22],
			[Date.UTC(2017, 10, 14), 500.0],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 233.33],
			[Date.UTC(2017, 10, 14), 244.44],
			[Date.UTC(2017, 10, 14), 400.0],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 400.0],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 5.56],
			[Date.UTC(2017, 10, 16), 211.11],
			[Date.UTC(2017, 10, 16), 233.33],
			[Date.UTC(2017, 10, 16), 233.33],
			[Date.UTC(2017, 10, 16), 244.44],
			[Date.UTC(2017, 10, 16), 322.22],
			[Date.UTC(2017, 10, 16), 322.22],
			[Date.UTC(2017, 10, 17), 188.89],
			[Date.UTC(2017, 10, 17), 211.11],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 255.56],
			[Date.UTC(2017, 10, 17), 255.56],
			[Date.UTC(2017, 10, 17), 455.56],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 211.11],
			[Date.UTC(2017, 10, 17), 211.11],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 255.56],
			[Date.UTC(2017, 10, 17), 433.33],
			[Date.UTC(2017, 10, 18), 200.0],
			[Date.UTC(2017, 10, 18), 233.33],
			[Date.UTC(2017, 10, 18), 244.44],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 433.33],
			[Date.UTC(2017, 10, 18), 222.22],
			[Date.UTC(2017, 10, 18), 233.33],
			[Date.UTC(2017, 10, 18), 233.33],
			[Date.UTC(2017, 10, 18), 233.33],
			[Date.UTC(2017, 10, 18), 400.0],
			[Date.UTC(2017, 10, 18), 422.22],
			[Date.UTC(2017, 10, 19), 211.11],
			[Date.UTC(2017, 10, 19), 211.11],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 244.44],
			[Date.UTC(2017, 10, 19), 244.44],
			[Date.UTC(2017, 10, 19), 211.11],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 255.56],
			[Date.UTC(2017, 10, 19), 255.56],
			[Date.UTC(2017, 10, 19), 411.11],
			[Date.UTC(2017, 10, 20), 211.11],
			[Date.UTC(2017, 10, 20), 233.33],
			[Date.UTC(2017, 10, 20), 377.78],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 244.44],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 322.22],
			[Date.UTC(2017, 10, 7), 333.33],
			[Date.UTC(2017, 10, 7), 400.0],
			[Date.UTC(2017, 10, 7), 477.78],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 311.11],
			[Date.UTC(2017, 10, 7), 322.22],
			[Date.UTC(2017, 10, 7), 355.56],
			[Date.UTC(2017, 10, 7), 377.78],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 355.56],
			[Date.UTC(2017, 10, 8), 366.67],
			[Date.UTC(2017, 10, 8), 400.0],
			[Date.UTC(2017, 10, 8), 400.0],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 8), 422.22],
			[Date.UTC(2017, 10, 8), 422.22],
			[Date.UTC(2017, 10, 9), 188.89],
			[Date.UTC(2017, 10, 9), 288.89],
			[Date.UTC(2017, 10, 9), 333.33],
			[Date.UTC(2017, 10, 9), 355.56],
			[Date.UTC(2017, 10, 9), 388.89],
			[Date.UTC(2017, 10, 9), 400.0],
			[Date.UTC(2017, 10, 9), 411.11],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 277.78],
			[Date.UTC(2017, 10, 10), 300.0],
			[Date.UTC(2017, 10, 10), 355.56],
			[Date.UTC(2017, 10, 10), 366.67],
			[Date.UTC(2017, 10, 10), 400.0],
			[Date.UTC(2017, 10, 10), 411.11],
			[Date.UTC(2017, 10, 10), 455.56],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 377.78],
			[Date.UTC(2017, 10, 11), 388.89],
			[Date.UTC(2017, 10, 11), 433.33],
			[Date.UTC(2017, 10, 11), 444.44],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 400.0],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 344.44],
			[Date.UTC(2017, 10, 11), 344.44],
			[Date.UTC(2017, 10, 11), 355.56],
			[Date.UTC(2017, 10, 11), 355.56],
			[Date.UTC(2017, 10, 11), 366.67],
			[Date.UTC(2017, 10, 11), 400.0],
			[Date.UTC(2017, 10, 12), 333.33],
			[Date.UTC(2017, 10, 12), 344.44],
			[Date.UTC(2017, 10, 12), 355.56],
			[Date.UTC(2017, 10, 12), 400.0],
			[Date.UTC(2017, 10, 12), 400.0],
			[Date.UTC(2017, 10, 12), 422.22],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 211.11],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 244.44],
			[Date.UTC(2017, 10, 13), 311.11],
			[Date.UTC(2017, 10, 13), 344.44],
			[Date.UTC(2017, 10, 13), 388.89],
			[Date.UTC(2017, 10, 13), 233.33],
			[Date.UTC(2017, 10, 13), 255.56],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 333.33],
			[Date.UTC(2017, 10, 13), 400.0],
			[Date.UTC(2017, 10, 13), 411.11],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 311.11],
			[Date.UTC(2017, 10, 14), 400.0],
			[Date.UTC(2017, 10, 14), 411.11],
			[Date.UTC(2017, 10, 14), 455.56],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 211.11],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 322.22],
			[Date.UTC(2017, 10, 14), 400.0],
			[Date.UTC(2017, 10, 14), 444.44],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 200.0],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 344.44],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 211.11],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 277.78],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 344.44],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 16), 155.56],
			[Date.UTC(2017, 10, 16), 177.78],
			[Date.UTC(2017, 10, 16), 200.0],
			[Date.UTC(2017, 10, 16), 200.0],
			[Date.UTC(2017, 10, 16), 222.22],
			[Date.UTC(2017, 10, 16), 344.44],
			[Date.UTC(2017, 10, 17), 177.78],
			[Date.UTC(2017, 10, 17), 188.89],
			[Date.UTC(2017, 10, 17), 211.11],
			[Date.UTC(2017, 10, 17), 211.11],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 244.44],
			[Date.UTC(2017, 10, 17), 188.89],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 333.33],
			[Date.UTC(2017, 10, 17), 344.44],
			[Date.UTC(2017, 10, 17), 377.78],
			[Date.UTC(2017, 10, 18), 144.44],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 211.11],
			[Date.UTC(2017, 10, 18), 300.0],
			[Date.UTC(2017, 10, 18), 355.56],
			[Date.UTC(2017, 10, 18), 366.67],
			[Date.UTC(2017, 10, 18), 200.0],
			[Date.UTC(2017, 10, 18), 211.11],
			[Date.UTC(2017, 10, 18), 211.11],
			[Date.UTC(2017, 10, 18), 222.22],
			[Date.UTC(2017, 10, 18), 344.44],
			[Date.UTC(2017, 10, 18), 344.44],
			[Date.UTC(2017, 10, 19), 200.0],
			[Date.UTC(2017, 10, 19), 211.11],
			[Date.UTC(2017, 10, 19), 244.44],
			[Date.UTC(2017, 10, 19), 300.0],
			[Date.UTC(2017, 10, 19), 344.44],
			[Date.UTC(2017, 10, 19), 355.56],
			[Date.UTC(2017, 10, 19), 166.67],
			[Date.UTC(2017, 10, 19), 166.67],
			[Date.UTC(2017, 10, 19), 177.78],
			[Date.UTC(2017, 10, 19), 188.89],
			[Date.UTC(2017, 10, 19), 200.0],
			[Date.UTC(2017, 10, 19), 200.0],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 244.44],
			[Date.UTC(2017, 10, 20), 188.89],
			[Date.UTC(2017, 10, 20), 200.0],
			[Date.UTC(2017, 10, 20), 355.56],
		]    }]
}