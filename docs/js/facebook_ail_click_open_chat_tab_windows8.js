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
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 355.56],
			[Date.UTC(2017, 10, 5), 355.56],
			[Date.UTC(2017, 10, 5), 377.78],
			[Date.UTC(2017, 10, 5), 455.56],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 266.67],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 133.33],
			[Date.UTC(2017, 10, 7), 155.56],
			[Date.UTC(2017, 10, 7), 288.89],
			[Date.UTC(2017, 10, 7), 288.89],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 166.67],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 8), 322.22],
			[Date.UTC(2017, 10, 8), 322.22],
			[Date.UTC(2017, 10, 8), 322.22],
			[Date.UTC(2017, 10, 8), 333.33],
			[Date.UTC(2017, 10, 8), 333.33],
			[Date.UTC(2017, 10, 8), 333.33],
			[Date.UTC(2017, 10, 8), 333.33],
			[Date.UTC(2017, 10, 8), 344.44],
			[Date.UTC(2017, 10, 8), 344.44],
			[Date.UTC(2017, 10, 8), 377.78],
			[Date.UTC(2017, 10, 8), 411.11],
			[Date.UTC(2017, 10, 9), 144.44],
			[Date.UTC(2017, 10, 9), 166.67],
			[Date.UTC(2017, 10, 9), 300.0],
			[Date.UTC(2017, 10, 9), 300.0],
			[Date.UTC(2017, 10, 9), 311.11],
			[Date.UTC(2017, 10, 9), 322.22],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 133.33],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 144.44],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 288.89],
			[Date.UTC(2017, 10, 10), 288.89],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 166.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 333.33],
			[Date.UTC(2017, 10, 11), 344.44],
			[Date.UTC(2017, 10, 11), 355.56],
			[Date.UTC(2017, 10, 11), 411.11],
			[Date.UTC(2017, 10, 12), 133.33],
			[Date.UTC(2017, 10, 12), 144.44],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 166.67],
			[Date.UTC(2017, 10, 12), 277.78],
			[Date.UTC(2017, 10, 12), 400.0],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 144.44],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 13), 311.11],
			[Date.UTC(2017, 10, 13), 311.11],
			[Date.UTC(2017, 10, 13), 355.56],
			[Date.UTC(2017, 10, 13), 133.33],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 155.56],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 300.0],
			[Date.UTC(2017, 10, 14), 144.44],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 311.11],
			[Date.UTC(2017, 10, 14), 311.11],
			[Date.UTC(2017, 10, 14), 322.22],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 277.78],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 14), 300.0],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 266.67],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 288.89],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 300.0],
			[Date.UTC(2017, 10, 15), 311.11],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 322.22],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 333.33],
			[Date.UTC(2017, 10, 15), 344.44],
			[Date.UTC(2017, 10, 15), 344.44],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 15), 355.56],
			[Date.UTC(2017, 10, 15), 366.67],
			[Date.UTC(2017, 10, 15), 388.89],
			[Date.UTC(2017, 10, 16), 144.44],
			[Date.UTC(2017, 10, 16), 155.56],
			[Date.UTC(2017, 10, 16), 166.67],
			[Date.UTC(2017, 10, 16), 300.0],
			[Date.UTC(2017, 10, 16), 311.11],
			[Date.UTC(2017, 10, 16), 344.44],
			[Date.UTC(2017, 10, 16), 344.44],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 155.56],
			[Date.UTC(2017, 10, 17), 166.67],
			[Date.UTC(2017, 10, 17), 288.89],
			[Date.UTC(2017, 10, 17), 311.11],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 311.11],
			[Date.UTC(2017, 10, 17), 311.11],
			[Date.UTC(2017, 10, 17), 311.11],
			[Date.UTC(2017, 10, 17), 333.33],
			[Date.UTC(2017, 10, 17), 333.33],
			[Date.UTC(2017, 10, 17), 333.33],
			[Date.UTC(2017, 10, 17), 355.56],
			[Date.UTC(2017, 10, 17), 355.56],
			[Date.UTC(2017, 10, 17), 366.67],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 155.56],
			[Date.UTC(2017, 10, 18), 166.67],
			[Date.UTC(2017, 10, 18), 322.22],
			[Date.UTC(2017, 10, 18), 322.22],
			[Date.UTC(2017, 10, 18), 322.22],
			[Date.UTC(2017, 10, 18), 355.56],
			[Date.UTC(2017, 10, 18), 288.89],
			[Date.UTC(2017, 10, 18), 311.11],
			[Date.UTC(2017, 10, 19), 177.78],
			[Date.UTC(2017, 10, 19), 300.0],
			[Date.UTC(2017, 10, 19), 333.33],
			[Date.UTC(2017, 10, 19), 355.56],
			[Date.UTC(2017, 10, 19), 377.78],
			[Date.UTC(2017, 10, 19), 377.78],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 322.22],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 511.11],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 177.78],
			[Date.UTC(2017, 10, 7), 200.0],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 300.0],
			[Date.UTC(2017, 10, 7), 111.11],
			[Date.UTC(2017, 10, 7), 166.67],
			[Date.UTC(2017, 10, 7), 255.56],
			[Date.UTC(2017, 10, 7), 277.78],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 188.89],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 200.0],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 211.11],
			[Date.UTC(2017, 10, 8), 222.22],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 233.33],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 244.44],
			[Date.UTC(2017, 10, 8), 255.56],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 266.67],
			[Date.UTC(2017, 10, 8), 277.78],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 288.89],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 300.0],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 8), 311.11],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 177.78],
			[Date.UTC(2017, 10, 9), 188.89],
			[Date.UTC(2017, 10, 9), 200.0],
			[Date.UTC(2017, 10, 9), 222.22],
			[Date.UTC(2017, 10, 9), 233.33],
			[Date.UTC(2017, 10, 9), 300.0],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 166.67],
			[Date.UTC(2017, 10, 10), 177.78],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 233.33],
			[Date.UTC(2017, 10, 10), 244.44],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 133.33],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 188.89],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 200.0],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 211.11],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 222.22],
			[Date.UTC(2017, 10, 11), 233.33],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 255.56],
			[Date.UTC(2017, 10, 11), 266.67],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 277.78],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 288.89],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 300.0],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 311.11],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 322.22],
			[Date.UTC(2017, 10, 11), 422.22],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 155.56],
			[Date.UTC(2017, 10, 12), 244.44],
			[Date.UTC(2017, 10, 12), 266.67],
			[Date.UTC(2017, 10, 12), 300.0],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 177.78],
			[Date.UTC(2017, 10, 13), 266.67],
			[Date.UTC(2017, 10, 13), 277.78],
			[Date.UTC(2017, 10, 13), 288.89],
			[Date.UTC(2017, 10, 13), 100.0],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 166.67],
			[Date.UTC(2017, 10, 13), 188.89],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 222.22],
			[Date.UTC(2017, 10, 14), 255.56],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 100.0],
			[Date.UTC(2017, 10, 14), 111.11],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 155.56],
			[Date.UTC(2017, 10, 14), 166.67],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 177.78],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 188.89],
			[Date.UTC(2017, 10, 14), 200.0],
			[Date.UTC(2017, 10, 14), 266.67],
			[Date.UTC(2017, 10, 14), 311.11],
			[Date.UTC(2017, 10, 14), 77.78],
			[Date.UTC(2017, 10, 14), 88.89],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 166.67],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 177.78],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 100.0],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 111.11],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 122.22],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 133.33],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 144.44],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 155.56],
			[Date.UTC(2017, 10, 15), 188.89],
			[Date.UTC(2017, 10, 15), 222.22],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 233.33],
			[Date.UTC(2017, 10, 15), 244.44],
			[Date.UTC(2017, 10, 15), 255.56],
			[Date.UTC(2017, 10, 15), 88.89],
			[Date.UTC(2017, 10, 16), 100.0],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 122.22],
			[Date.UTC(2017, 10, 16), 144.44],
			[Date.UTC(2017, 10, 16), 211.11],
			[Date.UTC(2017, 10, 16), 88.89],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 233.33],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 100.0],
			[Date.UTC(2017, 10, 17), 122.22],
			[Date.UTC(2017, 10, 17), 133.33],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 144.44],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 222.22],
			[Date.UTC(2017, 10, 17), 77.78],
			[Date.UTC(2017, 10, 17), 88.89],
			[Date.UTC(2017, 10, 17), 88.89],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 111.11],
			[Date.UTC(2017, 10, 18), 122.22],
			[Date.UTC(2017, 10, 18), 144.44],
			[Date.UTC(2017, 10, 18), 244.44],
			[Date.UTC(2017, 10, 18), 255.56],
			[Date.UTC(2017, 10, 18), 88.89],
			[Date.UTC(2017, 10, 18), 133.33],
			[Date.UTC(2017, 10, 18), 244.44],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 233.33],
			[Date.UTC(2017, 10, 19), 255.56],
		]    }]
}