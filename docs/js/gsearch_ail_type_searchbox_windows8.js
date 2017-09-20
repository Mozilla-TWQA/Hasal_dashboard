var gsearch_ail_type_searchbox_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_type_searchbox_windows8'
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
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 6), 33.33],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 9), 11.11],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 9), 33.33],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 10), 33.33],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 44.44],
			[Date.UTC(2017, 8, 11), 5.56],
			[Date.UTC(2017, 8, 12), 11.11],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 12), 33.33],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 13), 33.33],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 44.44],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 33.33],
			[Date.UTC(2017, 8, 14), 5.56],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 5.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 6), 11.11],
			[Date.UTC(2017, 8, 6), 11.11],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 6), 22.22],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 11.11],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 22.22],
			[Date.UTC(2017, 8, 8), 33.33],
			[Date.UTC(2017, 8, 9), 11.11],
			[Date.UTC(2017, 8, 9), 11.11],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 22.22],
			[Date.UTC(2017, 8, 9), 5.56],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 11.11],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 10), 22.22],
			[Date.UTC(2017, 8, 11), 11.11],
			[Date.UTC(2017, 8, 11), 11.11],
			[Date.UTC(2017, 8, 11), 11.11],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 22.22],
			[Date.UTC(2017, 8, 11), 5.56],
			[Date.UTC(2017, 8, 12), 11.11],
			[Date.UTC(2017, 8, 12), 11.11],
			[Date.UTC(2017, 8, 12), 11.11],
			[Date.UTC(2017, 8, 12), 22.22],
			[Date.UTC(2017, 8, 12), 5.56],
			[Date.UTC(2017, 8, 12), 5.56],
			[Date.UTC(2017, 8, 13), 11.11],
			[Date.UTC(2017, 8, 13), 11.11],
			[Date.UTC(2017, 8, 13), 11.11],
			[Date.UTC(2017, 8, 13), 11.11],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 13), 22.22],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 11.11],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 22.22],
			[Date.UTC(2017, 8, 14), 5.56],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
			[Date.UTC(2017, 8, 16), 11.11],
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
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 33.33],
			[Date.UTC(2017, 8, 16), 5.56],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 22.22],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 33.33],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
		]    }]
}