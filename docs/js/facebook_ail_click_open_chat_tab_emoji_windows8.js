var facebook_ail_click_open_chat_tab_emoji_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_open_chat_tab_emoji_windows8'
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
			[Date.UTC(2017, 9, 24), 100.0],
			[Date.UTC(2017, 9, 24), 55.56],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 88.89],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 26), 88.89],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 77.78],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 27), 77.78],
			[Date.UTC(2017, 9, 28), 122.22],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 77.78],
			[Date.UTC(2017, 9, 29), 122.22],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 77.78],
			[Date.UTC(2017, 9, 29), 88.89],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 100.0],
			[Date.UTC(2017, 9, 30), 111.11],
			[Date.UTC(2017, 9, 30), 133.33],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
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
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 30), 88.89],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 100.0],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 10, 1), 100.0],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 88.89],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 2), 77.78],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 77.78],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 77.78],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 4), 88.89],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 77.78],
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
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 24), 44.44],
			[Date.UTC(2017, 9, 24), 44.44],
			[Date.UTC(2017, 9, 24), 55.56],
			[Date.UTC(2017, 9, 24), 55.56],
			[Date.UTC(2017, 9, 24), 55.56],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 25), 44.44],
			[Date.UTC(2017, 9, 25), 44.44],
			[Date.UTC(2017, 9, 25), 44.44],
			[Date.UTC(2017, 9, 25), 44.44],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 44.44],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 44.44],
			[Date.UTC(2017, 9, 26), 44.44],
			[Date.UTC(2017, 9, 26), 44.44],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 44.44],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 29), 188.89],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 88.89],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 44.44],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
			[Date.UTC(2017, 9, 30), 55.56],
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
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 77.78],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 66.67],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 177.78],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 200.0],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 77.78],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 55.56],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
			[Date.UTC(2017, 10, 5), 66.67],
		]    }]
}