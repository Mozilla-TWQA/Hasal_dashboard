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
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 55.56],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 15), 100.0],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 111.11],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 122.22],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 133.33],
			[Date.UTC(2017, 8, 15), 144.44],
			[Date.UTC(2017, 8, 15), 144.44],
			[Date.UTC(2017, 8, 15), 155.56],
			[Date.UTC(2017, 8, 15), 155.56],
			[Date.UTC(2017, 8, 15), 166.67],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 55.56],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 66.67],
			[Date.UTC(2017, 8, 15), 77.78],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 15), 88.89],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 16), 77.78],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 111.11],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 122.22],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 133.33],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 144.44],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 177.78],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 55.56],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 88.89],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 88.89],
			[Date.UTC(2017, 8, 19), 122.22],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 21), 66.67],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 77.78],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 88.89],
			[Date.UTC(2017, 8, 23), 88.89],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 66.67],
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
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 66.67],
			[Date.UTC(2017, 8, 14), 77.78],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 14), 88.89],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 144.44],
			[Date.UTC(2017, 8, 15), 155.56],
			[Date.UTC(2017, 8, 15), 200.0],
			[Date.UTC(2017, 8, 15), 33.33],
			[Date.UTC(2017, 8, 15), 44.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 144.44],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 155.56],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 166.67],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 177.78],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 188.89],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 200.0],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 22.22],
			[Date.UTC(2017, 8, 16), 244.44],
			[Date.UTC(2017, 8, 16), 277.78],
			[Date.UTC(2017, 8, 16), 322.22],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 355.56],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 44.44],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 55.56],
			[Date.UTC(2017, 8, 16), 66.67],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 100.0],
			[Date.UTC(2017, 8, 17), 155.56],
			[Date.UTC(2017, 8, 17), 166.67],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 77.78],
			[Date.UTC(2017, 8, 17), 88.89],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 66.67],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 18), 77.78],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 66.67],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 19), 88.89],
			[Date.UTC(2017, 8, 19), 88.89],
			[Date.UTC(2017, 8, 19), 88.89],
			[Date.UTC(2017, 8, 20), 100.0],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 66.67],
			[Date.UTC(2017, 8, 20), 77.78],
			[Date.UTC(2017, 8, 20), 88.89],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 100.0],
			[Date.UTC(2017, 8, 21), 111.11],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 77.78],
			[Date.UTC(2017, 8, 21), 77.78],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 11.11],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 88.89],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 66.67],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 77.78],
			[Date.UTC(2017, 8, 23), 88.89],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 122.22],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 66.67],
			[Date.UTC(2017, 8, 24), 100.0],
			[Date.UTC(2017, 8, 24), 111.11],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 77.78],
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
		]    }]
}