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
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 366.67],
			[Date.UTC(2017, 9, 30), 388.89],
			[Date.UTC(2017, 9, 30), 400.0],
			[Date.UTC(2017, 9, 30), 411.11],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 31), 255.56],
			[Date.UTC(2017, 9, 31), 333.33],
			[Date.UTC(2017, 9, 31), 366.67],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 366.67],
			[Date.UTC(2017, 9, 31), 444.44],
			[Date.UTC(2017, 10, 1), 177.78],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 200.0],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 200.0],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 388.89],
			[Date.UTC(2017, 10, 2), 5.56],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 188.89],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 222.22],
			[Date.UTC(2017, 10, 3), 233.33],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 244.44],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 433.33],
			[Date.UTC(2017, 10, 3), 188.89],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 3), 355.56],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 455.56],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 488.89],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 311.11],
			[Date.UTC(2017, 10, 4), 366.67],
			[Date.UTC(2017, 10, 4), 433.33],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 4), 466.67],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 233.33],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 366.67],
			[Date.UTC(2017, 10, 5), 366.67],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 5.56],
			[Date.UTC(2017, 10, 5), 5.56],
			[Date.UTC(2017, 10, 5), 5.56],
			[Date.UTC(2017, 10, 5), 888.89],
			[Date.UTC(2017, 10, 5), 911.11],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 277.78],
		]    }, {
		name: 'chrome',
		data: [
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
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 355.56],
			[Date.UTC(2017, 9, 30), 366.67],
			[Date.UTC(2017, 9, 30), 377.78],
			[Date.UTC(2017, 9, 30), 388.89],
			[Date.UTC(2017, 9, 30), 433.33],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 366.67],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 277.78],
			[Date.UTC(2017, 9, 31), 333.33],
			[Date.UTC(2017, 9, 31), 355.56],
			[Date.UTC(2017, 9, 31), 355.56],
			[Date.UTC(2017, 9, 31), 400.0],
			[Date.UTC(2017, 9, 31), 411.11],
			[Date.UTC(2017, 9, 31), 488.89],
			[Date.UTC(2017, 10, 1), 155.56],
			[Date.UTC(2017, 10, 1), 211.11],
			[Date.UTC(2017, 10, 1), 300.0],
			[Date.UTC(2017, 10, 1), 333.33],
			[Date.UTC(2017, 10, 1), 411.11],
			[Date.UTC(2017, 10, 1), 433.33],
			[Date.UTC(2017, 10, 1), 233.33],
			[Date.UTC(2017, 10, 1), 300.0],
			[Date.UTC(2017, 10, 1), 388.89],
			[Date.UTC(2017, 10, 1), 422.22],
			[Date.UTC(2017, 10, 2), 211.11],
			[Date.UTC(2017, 10, 2), 233.33],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 333.33],
			[Date.UTC(2017, 10, 2), 400.0],
			[Date.UTC(2017, 10, 2), 222.22],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 388.89],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 200.0],
			[Date.UTC(2017, 10, 3), 355.56],
			[Date.UTC(2017, 10, 3), 388.89],
			[Date.UTC(2017, 10, 3), 400.0],
			[Date.UTC(2017, 10, 3), 400.0],
			[Date.UTC(2017, 10, 3), 411.11],
			[Date.UTC(2017, 10, 3), 422.22],
			[Date.UTC(2017, 10, 3), 277.78],
			[Date.UTC(2017, 10, 3), 300.0],
			[Date.UTC(2017, 10, 3), 300.0],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 344.44],
			[Date.UTC(2017, 10, 4), 388.89],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 444.44],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 366.67],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 400.0],
			[Date.UTC(2017, 10, 4), 411.11],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 4), 422.22],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 377.78],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 422.22],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 344.44],
			[Date.UTC(2017, 10, 5), 377.78],
			[Date.UTC(2017, 10, 5), 377.78],
			[Date.UTC(2017, 10, 5), 400.0],
			[Date.UTC(2017, 10, 5), 433.33],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 7), 144.44],
		]    }]
}