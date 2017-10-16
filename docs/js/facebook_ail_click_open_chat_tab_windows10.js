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
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 77.78],
			[Date.UTC(2017, 9, 2), 88.89],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 100.0],
			[Date.UTC(2017, 9, 3), 122.22],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 3), 88.89],
			[Date.UTC(2017, 9, 4), 100.0],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 133.33],
			[Date.UTC(2017, 9, 4), 144.44],
			[Date.UTC(2017, 9, 4), 155.56],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 77.78],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 6), 111.11],
			[Date.UTC(2017, 9, 6), 122.22],
			[Date.UTC(2017, 9, 6), 122.22],
			[Date.UTC(2017, 9, 6), 133.33],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 88.89],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 100.0],
			[Date.UTC(2017, 9, 7), 122.22],
			[Date.UTC(2017, 9, 7), 144.44],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 111.11],
			[Date.UTC(2017, 9, 8), 122.22],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 133.33],
			[Date.UTC(2017, 9, 8), 77.78],
			[Date.UTC(2017, 9, 8), 88.89],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 144.44],
			[Date.UTC(2017, 9, 9), 111.11],
			[Date.UTC(2017, 9, 9), 122.22],
			[Date.UTC(2017, 9, 9), 133.33],
			[Date.UTC(2017, 9, 9), 77.78],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 111.11],
			[Date.UTC(2017, 9, 10), 122.22],
			[Date.UTC(2017, 9, 10), 133.33],
			[Date.UTC(2017, 9, 10), 144.44],
			[Date.UTC(2017, 9, 11), 100.0],
			[Date.UTC(2017, 9, 11), 111.11],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 144.44],
			[Date.UTC(2017, 9, 11), 88.89],
			[Date.UTC(2017, 9, 11), 100.0],
			[Date.UTC(2017, 9, 11), 122.22],
			[Date.UTC(2017, 9, 11), 166.67],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 122.22],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 77.78],
			[Date.UTC(2017, 9, 12), 111.11],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 133.33],
			[Date.UTC(2017, 9, 12), 155.56],
			[Date.UTC(2017, 9, 13), 100.0],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 144.44],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 111.11],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 122.22],
			[Date.UTC(2017, 9, 13), 133.33],
			[Date.UTC(2017, 9, 13), 144.44],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 100.0],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 111.11],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 122.22],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 133.33],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 15), 111.11],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 122.22],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 100.0],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 3), 166.67],
			[Date.UTC(2017, 9, 3), 188.89],
			[Date.UTC(2017, 9, 3), 211.11],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 77.78],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 77.78],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 166.67],
			[Date.UTC(2017, 9, 4), 188.89],
			[Date.UTC(2017, 9, 4), 222.22],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 111.11],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 122.22],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 133.33],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 144.44],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 155.56],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 233.33],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 244.44],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 255.56],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 266.67],
			[Date.UTC(2017, 9, 5), 288.89],
			[Date.UTC(2017, 9, 7), 111.11],
			[Date.UTC(2017, 9, 7), 188.89],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 200.0],
			[Date.UTC(2017, 9, 7), 222.22],
			[Date.UTC(2017, 9, 7), 255.56],
			[Date.UTC(2017, 9, 8), 144.44],
			[Date.UTC(2017, 9, 8), 177.78],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 222.22],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 200.0],
			[Date.UTC(2017, 9, 8), 211.11],
			[Date.UTC(2017, 9, 8), 233.33],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 222.22],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 9), 166.67],
			[Date.UTC(2017, 9, 9), 188.89],
			[Date.UTC(2017, 9, 9), 188.89],
			[Date.UTC(2017, 9, 9), 255.56],
			[Date.UTC(2017, 9, 10), 177.78],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 188.89],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 200.0],
			[Date.UTC(2017, 9, 10), 244.44],
			[Date.UTC(2017, 9, 10), 500.0],
			[Date.UTC(2017, 9, 10), 144.44],
			[Date.UTC(2017, 9, 10), 166.67],
			[Date.UTC(2017, 9, 10), 211.11],
			[Date.UTC(2017, 9, 10), 266.67],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 144.44],
			[Date.UTC(2017, 9, 11), 155.56],
			[Date.UTC(2017, 9, 11), 188.89],
			[Date.UTC(2017, 9, 11), 222.22],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 255.56],
			[Date.UTC(2017, 9, 11), 133.33],
			[Date.UTC(2017, 9, 11), 177.78],
			[Date.UTC(2017, 9, 11), 222.22],
			[Date.UTC(2017, 9, 12), 144.44],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 255.56],
			[Date.UTC(2017, 9, 12), 266.67],
			[Date.UTC(2017, 9, 12), 200.0],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 211.11],
			[Date.UTC(2017, 9, 12), 244.44],
			[Date.UTC(2017, 9, 12), 344.44],
			[Date.UTC(2017, 9, 13), 166.67],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 244.44],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 255.56],
			[Date.UTC(2017, 9, 13), 144.44],
			[Date.UTC(2017, 9, 13), 177.78],
			[Date.UTC(2017, 9, 13), 188.89],
			[Date.UTC(2017, 9, 13), 211.11],
			[Date.UTC(2017, 9, 13), 222.22],
			[Date.UTC(2017, 9, 13), 233.33],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 155.56],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 222.22],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 144.44],
			[Date.UTC(2017, 9, 14), 166.67],
			[Date.UTC(2017, 9, 14), 177.78],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 188.89],
			[Date.UTC(2017, 9, 14), 200.0],
			[Date.UTC(2017, 9, 14), 211.11],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 233.33],
			[Date.UTC(2017, 9, 14), 244.44],
			[Date.UTC(2017, 9, 14), 244.44],
			[Date.UTC(2017, 9, 14), 255.56],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 133.33],
			[Date.UTC(2017, 9, 15), 188.89],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 200.0],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 233.33],
			[Date.UTC(2017, 9, 15), 244.44],
		]    }]
}