var facebook_ail_click_close_chat_tab_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_close_chat_tab_windows10'
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
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 55.56],
			[Date.UTC(2017, 8, 21), 55.56],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 88.89],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 77.78],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 77.78],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 88.89],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 27), 100.0],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 29), 11.11],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 30), 100.0],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 77.78],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 2), 66.67],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
			[Date.UTC(2017, 9, 3), 66.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 44.44],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 44.44],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 44.44],
		]    }]
}