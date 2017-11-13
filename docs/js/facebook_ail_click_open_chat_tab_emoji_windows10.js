var facebook_ail_click_open_chat_tab_emoji_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_emoji_windows10'
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
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 144.44],
			[Date.UTC(2017, 9, 30), 155.56],
			[Date.UTC(2017, 9, 30), 177.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 133.33],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 111.11],
			[Date.UTC(2017, 9, 31), 111.11],
			[Date.UTC(2017, 9, 31), 88.89],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 133.33],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 133.33],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 2), 100.0],
			[Date.UTC(2017, 10, 2), 111.11],
			[Date.UTC(2017, 10, 2), 111.11],
			[Date.UTC(2017, 10, 2), 111.11],
			[Date.UTC(2017, 10, 2), 122.22],
			[Date.UTC(2017, 10, 2), 88.89],
			[Date.UTC(2017, 10, 2), 100.0],
			[Date.UTC(2017, 10, 2), 111.11],
			[Date.UTC(2017, 10, 2), 166.67],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 111.11],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 144.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 88.89],
			[Date.UTC(2017, 10, 3), 122.22],
			[Date.UTC(2017, 10, 3), 133.33],
			[Date.UTC(2017, 10, 3), 211.11],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 111.11],
			[Date.UTC(2017, 10, 4), 133.33],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 144.44],
			[Date.UTC(2017, 10, 4), 155.56],
			[Date.UTC(2017, 10, 4), 177.78],
			[Date.UTC(2017, 10, 4), 5.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 111.11],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 122.22],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 133.33],
			[Date.UTC(2017, 10, 5), 144.44],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 155.56],
			[Date.UTC(2017, 10, 5), 5.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 144.44],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 111.11],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 5.56],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 8), 111.11],
			[Date.UTC(2017, 10, 8), 122.22],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 133.33],
			[Date.UTC(2017, 10, 8), 177.78],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 144.44],
			[Date.UTC(2017, 10, 9), 177.78],
			[Date.UTC(2017, 10, 9), 88.89],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 122.22],
			[Date.UTC(2017, 10, 10), 122.22],
			[Date.UTC(2017, 10, 10), 155.56],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 111.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 155.56],
			[Date.UTC(2017, 10, 11), 244.44],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 12), 122.22],
			[Date.UTC(2017, 10, 12), 77.78],
			[Date.UTC(2017, 10, 12), 88.89],
			[Date.UTC(2017, 10, 12), 88.89],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 122.22],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 31), 122.22],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 1), 166.67],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 2), 100.0],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 88.89],
			[Date.UTC(2017, 10, 2), 88.89],
			[Date.UTC(2017, 10, 2), 100.0],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 77.78],
			[Date.UTC(2017, 10, 3), 88.89],
			[Date.UTC(2017, 10, 3), 88.89],
			[Date.UTC(2017, 10, 3), 100.0],
			[Date.UTC(2017, 10, 3), 111.11],
			[Date.UTC(2017, 10, 3), 77.78],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 100.0],
			[Date.UTC(2017, 10, 4), 5.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 5.56],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 100.0],
			[Date.UTC(2017, 10, 5), 166.67],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 5.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 7), 100.0],
			[Date.UTC(2017, 10, 7), 111.11],
			[Date.UTC(2017, 10, 7), 122.22],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 7), 88.89],
			[Date.UTC(2017, 10, 8), 100.0],
			[Date.UTC(2017, 10, 8), 144.44],
			[Date.UTC(2017, 10, 8), 155.56],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 5.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 8), 88.89],
			[Date.UTC(2017, 10, 9), 100.0],
			[Date.UTC(2017, 10, 9), 144.44],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 9), 77.78],
			[Date.UTC(2017, 10, 9), 88.89],
			[Date.UTC(2017, 10, 9), 88.89],
			[Date.UTC(2017, 10, 10), 100.0],
			[Date.UTC(2017, 10, 10), 111.11],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 55.56],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 10), 88.89],
			[Date.UTC(2017, 10, 11), 144.44],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 100.0],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 122.22],
			[Date.UTC(2017, 10, 11), 177.78],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 44.44],
			[Date.UTC(2017, 10, 11), 55.56],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 66.67],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 77.78],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 11), 88.89],
			[Date.UTC(2017, 10, 12), 44.44],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 55.56],
			[Date.UTC(2017, 10, 12), 66.67],
			[Date.UTC(2017, 10, 12), 66.67],
		]    }]
}