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
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 111.11],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 27), 111.11],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 27), 88.89],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 29), 88.89],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 9, 1), 111.11],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 88.89],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 25), 100.0],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 111.11],
			[Date.UTC(2017, 8, 25), 122.22],
			[Date.UTC(2017, 8, 25), 144.44],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 188.89],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 77.78],
			[Date.UTC(2017, 8, 25), 88.89],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 166.67],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 26), 100.0],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 77.78],
			[Date.UTC(2017, 8, 27), 100.0],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 27), 77.78],
			[Date.UTC(2017, 8, 28), 100.0],
			[Date.UTC(2017, 8, 28), 122.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 88.89],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 29), 100.0],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 66.67],
			[Date.UTC(2017, 8, 29), 77.78],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 77.78],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 9, 1), 100.0],
			[Date.UTC(2017, 9, 1), 122.22],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 66.67],
			[Date.UTC(2017, 9, 1), 77.78],
			[Date.UTC(2017, 9, 1), 88.89],
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
			[Date.UTC(2017, 9, 5), 166.67],
			[Date.UTC(2017, 9, 5), 177.78],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 188.89],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 200.0],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 211.11],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 222.22],
			[Date.UTC(2017, 9, 5), 233.33],
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
		]    }]
}