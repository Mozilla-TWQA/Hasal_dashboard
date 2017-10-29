var gsearch_ail_type_searchbox_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_type_searchbox_windows10'
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
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 22.22],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 33.33],
			[Date.UTC(2017, 9, 15), 66.67],
			[Date.UTC(2017, 9, 15), 88.89],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 11.11],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 66.67],
			[Date.UTC(2017, 9, 16), 77.78],
			[Date.UTC(2017, 9, 17), 11.11],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 55.56],
			[Date.UTC(2017, 9, 17), 22.22],
			[Date.UTC(2017, 9, 17), 33.33],
			[Date.UTC(2017, 9, 17), 77.78],
			[Date.UTC(2017, 9, 18), 11.11],
			[Date.UTC(2017, 9, 18), 33.33],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 66.67],
			[Date.UTC(2017, 9, 18), 88.89],
			[Date.UTC(2017, 9, 19), 11.11],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 33.33],
			[Date.UTC(2017, 9, 19), 66.67],
			[Date.UTC(2017, 9, 19), 66.67],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 22.22],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 20), 33.33],
			[Date.UTC(2017, 9, 20), 55.56],
			[Date.UTC(2017, 9, 20), 66.67],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 11.11],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 44.44],
			[Date.UTC(2017, 9, 21), 55.56],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 33.33],
			[Date.UTC(2017, 9, 22), 44.44],
			[Date.UTC(2017, 9, 22), 55.56],
			[Date.UTC(2017, 9, 22), 66.67],
			[Date.UTC(2017, 9, 22), 66.67],
			[Date.UTC(2017, 9, 22), 88.89],
			[Date.UTC(2017, 9, 23), 100.0],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 33.33],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 77.78],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 77.78],
			[Date.UTC(2017, 9, 24), 88.89],
			[Date.UTC(2017, 9, 25), 11.11],
			[Date.UTC(2017, 9, 25), 22.22],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 25), 66.67],
			[Date.UTC(2017, 9, 25), 77.78],
			[Date.UTC(2017, 9, 25), 22.22],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 26), 22.22],
			[Date.UTC(2017, 9, 26), 22.22],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 44.44],
			[Date.UTC(2017, 9, 26), 44.44],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 11.11],
			[Date.UTC(2017, 9, 26), 22.22],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 77.78],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 66.67],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 15), 5.56],
			[Date.UTC(2017, 9, 16), 44.44],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 16), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 17), 5.56],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 22.22],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 18), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 22.22],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 19), 5.56],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 11.11],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 20), 5.56],
			[Date.UTC(2017, 9, 21), 22.22],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 33.33],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 21), 5.56],
			[Date.UTC(2017, 9, 22), 22.22],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 22), 5.56],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 11.11],
			[Date.UTC(2017, 9, 23), 22.22],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 23), 5.56],
			[Date.UTC(2017, 9, 24), 11.11],
			[Date.UTC(2017, 9, 24), 22.22],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 5.56],
			[Date.UTC(2017, 9, 24), 66.67],
			[Date.UTC(2017, 9, 24), 88.89],
			[Date.UTC(2017, 9, 25), 122.22],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 33.33],
			[Date.UTC(2017, 9, 25), 44.44],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 5.56],
			[Date.UTC(2017, 9, 25), 55.56],
			[Date.UTC(2017, 9, 26), 100.0],
			[Date.UTC(2017, 9, 26), 11.11],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 55.56],
			[Date.UTC(2017, 9, 26), 66.67],
			[Date.UTC(2017, 9, 26), 33.33],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 26), 5.56],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 88.89],
			[Date.UTC(2017, 9, 27), 100.0],
			[Date.UTC(2017, 9, 27), 11.11],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 27), 5.56],
			[Date.UTC(2017, 9, 28), 100.0],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 111.11],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
			[Date.UTC(2017, 9, 28), 5.56],
		]    }]
}