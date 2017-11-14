var amazon_ail_select_search_suggestion_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'amazon_ail_select_search_suggestion_windows8'
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
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 11.11],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 10, 1), 11.11],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 2), 11.11],
			[Date.UTC(2017, 10, 2), 11.11],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 11.11],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 3), 11.11],
			[Date.UTC(2017, 10, 3), 11.11],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 9), 11.11],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 10), 11.11],
			[Date.UTC(2017, 10, 10), 11.11],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 33.33],
			[Date.UTC(2017, 10, 10), 33.33],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 13), 11.11],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 33.33],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 33.33],
			[Date.UTC(2017, 10, 13), 33.33],
			[Date.UTC(2017, 10, 14), 22.22],
			[Date.UTC(2017, 10, 14), 22.22],
			[Date.UTC(2017, 10, 14), 22.22],
			[Date.UTC(2017, 10, 14), 33.33],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 31), 11.11],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 11.11],
			[Date.UTC(2017, 9, 31), 11.11],
			[Date.UTC(2017, 9, 31), 11.11],
			[Date.UTC(2017, 9, 31), 11.11],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 2), 11.11],
			[Date.UTC(2017, 10, 2), 11.11],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 11.11],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 3), 11.11],
			[Date.UTC(2017, 10, 3), 11.11],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 11.11],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 11.11],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 11.11],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 7), 11.11],
			[Date.UTC(2017, 10, 7), 11.11],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 11.11],
			[Date.UTC(2017, 10, 7), 11.11],
			[Date.UTC(2017, 10, 7), 11.11],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 11.11],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 22.22],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 9), 11.11],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 22.22],
			[Date.UTC(2017, 10, 9), 33.33],
			[Date.UTC(2017, 10, 10), 11.11],
			[Date.UTC(2017, 10, 10), 11.11],
			[Date.UTC(2017, 10, 10), 11.11],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 22.22],
			[Date.UTC(2017, 10, 10), 44.44],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 11.11],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 22.22],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 11), 33.33],
			[Date.UTC(2017, 10, 12), 11.11],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 22.22],
			[Date.UTC(2017, 10, 12), 33.33],
			[Date.UTC(2017, 10, 12), 33.33],
			[Date.UTC(2017, 10, 13), 11.11],
			[Date.UTC(2017, 10, 13), 11.11],
			[Date.UTC(2017, 10, 13), 11.11],
			[Date.UTC(2017, 10, 13), 11.11],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 11.11],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 13), 22.22],
			[Date.UTC(2017, 10, 14), 11.11],
			[Date.UTC(2017, 10, 14), 22.22],
			[Date.UTC(2017, 10, 14), 22.22],
			[Date.UTC(2017, 10, 14), 22.22],
		]    }]
}