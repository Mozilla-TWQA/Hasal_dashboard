var facebook_ail_scroll_home_1_txt_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_scroll_home_1_txt_windows10'
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
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 44.44],
			[Date.UTC(2017, 9, 1), 44.44],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 55.56],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 3), 55.56],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 4), 55.56],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 411.11],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 66.67],
			[Date.UTC(2017, 9, 5), 88.89],
			[Date.UTC(2017, 9, 6), 44.44],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 55.56],
			[Date.UTC(2017, 9, 6), 66.67],
			[Date.UTC(2017, 9, 6), 77.78],
			[Date.UTC(2017, 9, 6), 88.89],
			[Date.UTC(2017, 9, 7), 155.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 66.67],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 7), 88.89],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 77.78],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 8), 66.67],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 44.44],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 44.44],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 12), 66.67],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 12), 55.56],
			[Date.UTC(2017, 9, 13), 44.44],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 66.67],
			[Date.UTC(2017, 9, 13), 77.78],
			[Date.UTC(2017, 9, 13), 55.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 9, 1), 11.11],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 44.44],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 5.56],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 11.11],
			[Date.UTC(2017, 9, 2), 22.22],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 2), 33.33],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 11.11],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 22.22],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 33.33],
			[Date.UTC(2017, 9, 3), 44.44],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 44.44],
			[Date.UTC(2017, 9, 4), 66.67],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 88.89],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 11.11],
			[Date.UTC(2017, 9, 4), 22.22],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 4), 33.33],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 11.11],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 22.22],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 33.33],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 44.44],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 5), 55.56],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 33.33],
			[Date.UTC(2017, 9, 7), 44.44],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 7), 55.56],
			[Date.UTC(2017, 9, 8), 11.11],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 33.33],
			[Date.UTC(2017, 9, 8), 44.44],
			[Date.UTC(2017, 9, 8), 55.56],
			[Date.UTC(2017, 9, 9), 11.11],
			[Date.UTC(2017, 9, 9), 33.33],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 9), 55.56],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 44.44],
			[Date.UTC(2017, 9, 10), 5.56],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 10), 11.11],
			[Date.UTC(2017, 9, 10), 22.22],
			[Date.UTC(2017, 9, 10), 33.33],
			[Date.UTC(2017, 9, 10), 55.56],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 11), 55.56],
			[Date.UTC(2017, 9, 11), 11.11],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 22.22],
			[Date.UTC(2017, 9, 11), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 12), 44.44],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 11.11],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 22.22],
			[Date.UTC(2017, 9, 12), 33.33],
			[Date.UTC(2017, 9, 13), 11.11],
			[Date.UTC(2017, 9, 13), 11.11],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 33.33],
			[Date.UTC(2017, 9, 13), 5.56],
			[Date.UTC(2017, 9, 13), 55.56],
			[Date.UTC(2017, 9, 13), 5.56],
		]    }]
}