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
			[Date.UTC(2017, 9, 17), 233.33],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 222.22],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 311.11],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 200.0],
			[Date.UTC(2017, 9, 17), 211.11],
			[Date.UTC(2017, 9, 17), 255.56],
			[Date.UTC(2017, 9, 17), 44.44],
			[Date.UTC(2017, 9, 18), 188.89],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 200.0],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 233.33],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 400.0],
			[Date.UTC(2017, 9, 18), 433.33],
			[Date.UTC(2017, 9, 18), 433.33],
			[Date.UTC(2017, 9, 18), 222.22],
			[Date.UTC(2017, 9, 18), 255.56],
			[Date.UTC(2017, 9, 19), 466.67],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 511.11],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 222.22],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 20), 411.11],
			[Date.UTC(2017, 9, 20), 577.78],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 244.44],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 200.0],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 255.56],
			[Date.UTC(2017, 9, 21), 433.33],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 266.67],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 400.0],
			[Date.UTC(2017, 9, 22), 455.56],
			[Date.UTC(2017, 9, 22), 211.11],
			[Date.UTC(2017, 9, 22), 222.22],
			[Date.UTC(2017, 9, 22), 222.22],
			[Date.UTC(2017, 9, 22), 233.33],
			[Date.UTC(2017, 9, 23), 200.0],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 211.11],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 233.33],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 400.0],
			[Date.UTC(2017, 9, 23), 433.33],
			[Date.UTC(2017, 9, 23), 433.33],
			[Date.UTC(2017, 9, 23), 444.44],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 255.56],
			[Date.UTC(2017, 9, 23), 377.78],
			[Date.UTC(2017, 9, 23), 388.89],
			[Date.UTC(2017, 9, 24), 200.0],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 233.33],
			[Date.UTC(2017, 9, 24), 388.89],
			[Date.UTC(2017, 9, 24), 488.89],
			[Date.UTC(2017, 9, 24), 955.56],
			[Date.UTC(2017, 9, 24), 155.56],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 177.78],
			[Date.UTC(2017, 9, 24), 200.0],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 222.22],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 244.44],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 200.0],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 222.22],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 544.44],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 400.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 177.78],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 355.56],
			[Date.UTC(2017, 9, 28), 400.0],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 377.78],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 388.89],
			[Date.UTC(2017, 9, 29), 433.33],
			[Date.UTC(2017, 9, 29), 5.56],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 355.56],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 388.89],
			[Date.UTC(2017, 9, 30), 411.11],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 17), 400.0],
			[Date.UTC(2017, 9, 17), 433.33],
			[Date.UTC(2017, 9, 17), 388.89],
			[Date.UTC(2017, 9, 17), 411.11],
			[Date.UTC(2017, 9, 17), 422.22],
			[Date.UTC(2017, 9, 17), 455.56],
			[Date.UTC(2017, 9, 18), 211.11],
			[Date.UTC(2017, 9, 18), 311.11],
			[Date.UTC(2017, 9, 18), 333.33],
			[Date.UTC(2017, 9, 18), 333.33],
			[Date.UTC(2017, 9, 18), 333.33],
			[Date.UTC(2017, 9, 18), 344.44],
			[Date.UTC(2017, 9, 18), 366.67],
			[Date.UTC(2017, 9, 18), 366.67],
			[Date.UTC(2017, 9, 18), 388.89],
			[Date.UTC(2017, 9, 18), 388.89],
			[Date.UTC(2017, 9, 18), 400.0],
			[Date.UTC(2017, 9, 18), 411.11],
			[Date.UTC(2017, 9, 18), 277.78],
			[Date.UTC(2017, 9, 18), 388.89],
			[Date.UTC(2017, 9, 19), 233.33],
			[Date.UTC(2017, 9, 19), 211.11],
			[Date.UTC(2017, 9, 19), 222.22],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 19), 300.0],
			[Date.UTC(2017, 9, 19), 355.56],
			[Date.UTC(2017, 9, 19), 455.56],
			[Date.UTC(2017, 9, 20), 200.0],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 211.11],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 233.33],
			[Date.UTC(2017, 9, 20), 400.0],
			[Date.UTC(2017, 9, 20), 300.0],
			[Date.UTC(2017, 9, 20), 322.22],
			[Date.UTC(2017, 9, 20), 422.22],
			[Date.UTC(2017, 9, 21), 188.89],
			[Date.UTC(2017, 9, 21), 211.11],
			[Date.UTC(2017, 9, 21), 222.22],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 422.22],
			[Date.UTC(2017, 9, 21), 444.44],
			[Date.UTC(2017, 9, 21), 233.33],
			[Date.UTC(2017, 9, 21), 366.67],
			[Date.UTC(2017, 9, 21), 388.89],
			[Date.UTC(2017, 9, 22), 166.67],
			[Date.UTC(2017, 9, 22), 255.56],
			[Date.UTC(2017, 9, 22), 322.22],
			[Date.UTC(2017, 9, 22), 366.67],
			[Date.UTC(2017, 9, 22), 400.0],
			[Date.UTC(2017, 9, 22), 422.22],
			[Date.UTC(2017, 9, 22), 300.0],
			[Date.UTC(2017, 9, 22), 422.22],
			[Date.UTC(2017, 9, 22), 433.33],
			[Date.UTC(2017, 9, 22), 455.56],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 255.56],
			[Date.UTC(2017, 9, 23), 277.78],
			[Date.UTC(2017, 9, 23), 300.0],
			[Date.UTC(2017, 9, 23), 311.11],
			[Date.UTC(2017, 9, 23), 322.22],
			[Date.UTC(2017, 9, 23), 333.33],
			[Date.UTC(2017, 9, 23), 366.67],
			[Date.UTC(2017, 9, 23), 377.78],
			[Date.UTC(2017, 9, 23), 444.44],
			[Date.UTC(2017, 9, 23), 222.22],
			[Date.UTC(2017, 9, 23), 244.44],
			[Date.UTC(2017, 9, 23), 355.56],
			[Date.UTC(2017, 9, 23), 400.0],
			[Date.UTC(2017, 9, 24), 255.56],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 344.44],
			[Date.UTC(2017, 9, 24), 355.56],
			[Date.UTC(2017, 9, 24), 377.78],
			[Date.UTC(2017, 9, 24), 422.22],
			[Date.UTC(2017, 9, 24), 266.67],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 388.89],
			[Date.UTC(2017, 9, 24), 400.0],
			[Date.UTC(2017, 9, 24), 400.0],
			[Date.UTC(2017, 9, 25), 233.33],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 277.78],
			[Date.UTC(2017, 9, 25), 388.89],
			[Date.UTC(2017, 9, 25), 388.89],
			[Date.UTC(2017, 9, 25), 422.22],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 211.11],
			[Date.UTC(2017, 9, 25), 377.78],
			[Date.UTC(2017, 9, 25), 400.0],
			[Date.UTC(2017, 9, 25), 400.0],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 322.22],
			[Date.UTC(2017, 9, 26), 344.44],
			[Date.UTC(2017, 9, 26), 400.0],
			[Date.UTC(2017, 9, 26), 422.22],
			[Date.UTC(2017, 9, 26), 211.11],
			[Date.UTC(2017, 9, 26), 266.67],
			[Date.UTC(2017, 9, 26), 388.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 222.22],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 244.44],
			[Date.UTC(2017, 9, 27), 266.67],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 333.33],
			[Date.UTC(2017, 9, 27), 355.56],
			[Date.UTC(2017, 9, 27), 366.67],
			[Date.UTC(2017, 9, 27), 366.67],
			[Date.UTC(2017, 9, 27), 377.78],
			[Date.UTC(2017, 9, 27), 388.89],
			[Date.UTC(2017, 9, 27), 388.89],
			[Date.UTC(2017, 9, 27), 400.0],
			[Date.UTC(2017, 9, 27), 433.33],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 377.78],
			[Date.UTC(2017, 9, 27), 388.89],
			[Date.UTC(2017, 9, 27), 388.89],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 188.89],
			[Date.UTC(2017, 9, 28), 211.11],
			[Date.UTC(2017, 9, 28), 311.11],
			[Date.UTC(2017, 9, 28), 344.44],
			[Date.UTC(2017, 9, 28), 355.56],
			[Date.UTC(2017, 9, 28), 255.56],
			[Date.UTC(2017, 9, 28), 400.0],
			[Date.UTC(2017, 9, 28), 400.0],
			[Date.UTC(2017, 9, 28), 411.11],
			[Date.UTC(2017, 9, 29), 244.44],
			[Date.UTC(2017, 9, 29), 333.33],
			[Date.UTC(2017, 9, 29), 377.78],
			[Date.UTC(2017, 9, 29), 377.78],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 422.22],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 255.56],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 377.78],
			[Date.UTC(2017, 9, 30), 366.67],
			[Date.UTC(2017, 9, 30), 388.89],
		]    }]
}