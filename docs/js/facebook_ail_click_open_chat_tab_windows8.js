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
			[Date.UTC(2017, 9, 24), 166.67],
			[Date.UTC(2017, 9, 24), 188.89],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 300.0],
			[Date.UTC(2017, 9, 24), 322.22],
			[Date.UTC(2017, 9, 24), 411.11],
			[Date.UTC(2017, 9, 24), 133.33],
			[Date.UTC(2017, 9, 25), 166.67],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 288.89],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 311.11],
			[Date.UTC(2017, 9, 25), 311.11],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 144.44],
			[Date.UTC(2017, 9, 25), 300.0],
			[Date.UTC(2017, 9, 25), 322.22],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 188.89],
			[Date.UTC(2017, 9, 26), 288.89],
			[Date.UTC(2017, 9, 26), 322.22],
			[Date.UTC(2017, 9, 26), 344.44],
			[Date.UTC(2017, 9, 26), 400.0],
			[Date.UTC(2017, 9, 26), 155.56],
			[Date.UTC(2017, 9, 26), 300.0],
			[Date.UTC(2017, 9, 26), 333.33],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 322.22],
			[Date.UTC(2017, 9, 27), 322.22],
			[Date.UTC(2017, 9, 27), 333.33],
			[Date.UTC(2017, 9, 27), 366.67],
			[Date.UTC(2017, 9, 27), 144.44],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 155.56],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 166.67],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 300.0],
			[Date.UTC(2017, 9, 27), 311.11],
			[Date.UTC(2017, 9, 27), 322.22],
			[Date.UTC(2017, 9, 28), 144.44],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 222.22],
			[Date.UTC(2017, 9, 28), 277.78],
			[Date.UTC(2017, 9, 28), 300.0],
			[Date.UTC(2017, 9, 28), 311.11],
			[Date.UTC(2017, 9, 28), 311.11],
			[Date.UTC(2017, 9, 28), 333.33],
			[Date.UTC(2017, 9, 28), 388.89],
			[Date.UTC(2017, 9, 28), 322.22],
			[Date.UTC(2017, 9, 29), 277.78],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 322.22],
			[Date.UTC(2017, 9, 29), 333.33],
			[Date.UTC(2017, 9, 29), 400.0],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 155.56],
			[Date.UTC(2017, 9, 29), 166.67],
			[Date.UTC(2017, 9, 29), 177.78],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 311.11],
			[Date.UTC(2017, 9, 29), 322.22],
			[Date.UTC(2017, 9, 29), 333.33],
			[Date.UTC(2017, 9, 29), 333.33],
			[Date.UTC(2017, 9, 29), 366.67],
			[Date.UTC(2017, 9, 29), 366.67],
			[Date.UTC(2017, 9, 29), 377.78],
			[Date.UTC(2017, 9, 29), 722.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 300.0],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 333.33],
			[Date.UTC(2017, 9, 30), 344.44],
			[Date.UTC(2017, 9, 30), 366.67],
			[Date.UTC(2017, 9, 30), 366.67],
			[Date.UTC(2017, 9, 30), 400.0],
			[Date.UTC(2017, 9, 31), 144.44],
			[Date.UTC(2017, 9, 31), 288.89],
			[Date.UTC(2017, 9, 31), 300.0],
			[Date.UTC(2017, 9, 31), 311.11],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 211.11],
			[Date.UTC(2017, 9, 31), 288.89],
			[Date.UTC(2017, 9, 31), 288.89],
			[Date.UTC(2017, 9, 31), 300.0],
			[Date.UTC(2017, 9, 31), 300.0],
			[Date.UTC(2017, 9, 31), 311.11],
			[Date.UTC(2017, 9, 31), 322.22],
			[Date.UTC(2017, 9, 31), 344.44],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 188.89],
			[Date.UTC(2017, 10, 1), 277.78],
			[Date.UTC(2017, 10, 1), 300.0],
			[Date.UTC(2017, 10, 1), 300.0],
			[Date.UTC(2017, 10, 1), 133.33],
			[Date.UTC(2017, 10, 1), 144.44],
			[Date.UTC(2017, 10, 1), 155.56],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 2), 133.33],
			[Date.UTC(2017, 10, 2), 144.44],
			[Date.UTC(2017, 10, 2), 155.56],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 311.11],
			[Date.UTC(2017, 10, 2), 311.11],
			[Date.UTC(2017, 10, 2), 322.22],
			[Date.UTC(2017, 10, 2), 144.44],
			[Date.UTC(2017, 10, 2), 144.44],
			[Date.UTC(2017, 10, 2), 155.56],
			[Date.UTC(2017, 10, 2), 277.78],
			[Date.UTC(2017, 10, 2), 288.89],
			[Date.UTC(2017, 10, 2), 311.11],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 144.44],
			[Date.UTC(2017, 10, 3), 144.44],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 311.11],
			[Date.UTC(2017, 10, 3), 333.33],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 3), 277.78],
			[Date.UTC(2017, 10, 3), 288.89],
			[Date.UTC(2017, 10, 3), 300.0],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 322.22],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 255.56],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 300.0],
			[Date.UTC(2017, 10, 4), 311.11],
			[Date.UTC(2017, 10, 4), 322.22],
			[Date.UTC(2017, 10, 4), 333.33],
			[Date.UTC(2017, 10, 4), 333.33],
			[Date.UTC(2017, 10, 4), 344.44],
			[Date.UTC(2017, 10, 4), 366.67],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 311.11],
			[Date.UTC(2017, 10, 5), 333.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
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
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
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
			[Date.UTC(2017, 10, 5), 355.56],
			[Date.UTC(2017, 10, 5), 355.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 24), 211.11],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 222.22],
			[Date.UTC(2017, 9, 24), 277.78],
			[Date.UTC(2017, 9, 24), 311.11],
			[Date.UTC(2017, 9, 24), 88.89],
			[Date.UTC(2017, 9, 24), 111.11],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 111.11],
			[Date.UTC(2017, 9, 25), 133.33],
			[Date.UTC(2017, 9, 25), 177.78],
			[Date.UTC(2017, 9, 25), 188.89],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 255.56],
			[Date.UTC(2017, 9, 25), 266.67],
			[Date.UTC(2017, 9, 25), 100.0],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 200.0],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 88.89],
			[Date.UTC(2017, 9, 26), 111.11],
			[Date.UTC(2017, 9, 26), 111.11],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 26), 233.33],
			[Date.UTC(2017, 9, 26), 244.44],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 166.67],
			[Date.UTC(2017, 9, 26), 177.78],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 111.11],
			[Date.UTC(2017, 9, 27), 177.78],
			[Date.UTC(2017, 9, 27), 188.89],
			[Date.UTC(2017, 9, 27), 200.0],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 211.11],
			[Date.UTC(2017, 9, 27), 233.33],
			[Date.UTC(2017, 9, 27), 255.56],
			[Date.UTC(2017, 9, 27), 277.78],
			[Date.UTC(2017, 9, 27), 288.89],
			[Date.UTC(2017, 9, 27), 311.11],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 166.67],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 28), 233.33],
			[Date.UTC(2017, 9, 28), 244.44],
			[Date.UTC(2017, 9, 28), 266.67],
			[Date.UTC(2017, 9, 28), 300.0],
			[Date.UTC(2017, 9, 28), 200.0],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 222.22],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 266.67],
			[Date.UTC(2017, 9, 29), 288.89],
			[Date.UTC(2017, 9, 29), 288.89],
			[Date.UTC(2017, 9, 29), 100.0],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 144.44],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 200.0],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 211.11],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 233.33],
			[Date.UTC(2017, 9, 29), 300.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 166.67],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 188.89],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 200.0],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 211.11],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 222.22],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 233.33],
			[Date.UTC(2017, 9, 30), 244.44],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 255.56],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 266.67],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 277.78],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 288.89],
			[Date.UTC(2017, 9, 30), 311.11],
			[Date.UTC(2017, 9, 30), 322.22],
			[Date.UTC(2017, 9, 30), 455.56],
			[Date.UTC(2017, 9, 30), 488.89],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 111.11],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 155.56],
			[Date.UTC(2017, 9, 31), 166.67],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 177.78],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 188.89],
			[Date.UTC(2017, 9, 31), 200.0],
			[Date.UTC(2017, 9, 31), 233.33],
			[Date.UTC(2017, 9, 31), 244.44],
			[Date.UTC(2017, 9, 31), 311.11],
			[Date.UTC(2017, 9, 31), 377.78],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 9, 31), 88.89],
			[Date.UTC(2017, 9, 31), 88.89],
			[Date.UTC(2017, 9, 31), 88.89],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 122.22],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 288.89],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 2), 100.0],
			[Date.UTC(2017, 10, 2), 244.44],
			[Date.UTC(2017, 10, 2), 255.56],
			[Date.UTC(2017, 10, 2), 300.0],
			[Date.UTC(2017, 10, 2), 300.0],
			[Date.UTC(2017, 10, 2), 311.11],
			[Date.UTC(2017, 10, 2), 322.22],
			[Date.UTC(2017, 10, 2), 111.11],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 266.67],
			[Date.UTC(2017, 10, 2), 288.89],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 155.56],
			[Date.UTC(2017, 10, 3), 166.67],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 3), 266.67],
			[Date.UTC(2017, 10, 3), 288.89],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 255.56],
			[Date.UTC(2017, 10, 3), 88.89],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 266.67],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 166.67],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 188.89],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 211.11],
			[Date.UTC(2017, 10, 4), 222.22],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 233.33],
			[Date.UTC(2017, 10, 4), 244.44],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 277.78],
			[Date.UTC(2017, 10, 4), 288.89],
			[Date.UTC(2017, 10, 4), 322.22],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
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
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 177.78],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 188.89],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 200.0],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 211.11],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 222.22],
			[Date.UTC(2017, 10, 5), 244.44],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 255.56],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 266.67],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 277.78],
			[Date.UTC(2017, 10, 5), 288.89],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 300.0],
			[Date.UTC(2017, 10, 5), 444.44],
			[Date.UTC(2017, 10, 5), 466.67],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
		]    }]
}