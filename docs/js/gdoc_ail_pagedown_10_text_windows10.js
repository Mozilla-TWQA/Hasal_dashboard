var gdoc_ail_pagedown_10_text_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gdoc_ail_pagedown_10_text_windows10'
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
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
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
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 55.56],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 17), 66.67],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 22.22],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 18), 44.44],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 55.56],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 77.78],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 44.44],
			[Date.UTC(2017, 8, 20), 55.56],
			[Date.UTC(2017, 8, 21), 11.11],
			[Date.UTC(2017, 8, 21), 11.11],
			[Date.UTC(2017, 8, 21), 11.11],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 44.44],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 55.56],
			[Date.UTC(2017, 8, 22), 66.67],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 44.44],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 23), 55.56],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 44.44],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 24), 55.56],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 55.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 55.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 44.44],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 55.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 77.78],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 44.44],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 29), 55.56],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 44.44],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 55.56],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 8, 30), 66.67],
			[Date.UTC(2017, 9, 1), 33.33],
			[Date.UTC(2017, 9, 1), 55.56],
			[Date.UTC(2017, 9, 1), 55.56],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 11.11],
			[Date.UTC(2017, 8, 17), 155.56],
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
			[Date.UTC(2017, 8, 17), 344.44],
			[Date.UTC(2017, 8, 17), 44.44],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 17), 5.56],
			[Date.UTC(2017, 8, 18), 11.11],
			[Date.UTC(2017, 8, 18), 166.67],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 18), 5.56],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 33.33],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 19), 100.0],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 11.11],
			[Date.UTC(2017, 8, 19), 155.56],
			[Date.UTC(2017, 8, 19), 211.11],
			[Date.UTC(2017, 8, 19), 22.22],
			[Date.UTC(2017, 8, 19), 5.56],
			[Date.UTC(2017, 8, 20), 222.22],
			[Date.UTC(2017, 8, 20), 244.44],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 11.11],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 22.22],
			[Date.UTC(2017, 8, 20), 33.33],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 20), 5.56],
			[Date.UTC(2017, 8, 21), 11.11],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 33.33],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 44.44],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 21), 5.56],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 244.44],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 5.56],
			[Date.UTC(2017, 8, 22), 11.11],
			[Date.UTC(2017, 8, 22), 166.67],
			[Date.UTC(2017, 8, 22), 22.22],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 22), 33.33],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 11.11],
			[Date.UTC(2017, 8, 23), 22.22],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 33.33],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 23), 5.56],
			[Date.UTC(2017, 8, 24), 22.22],
			[Date.UTC(2017, 8, 24), 322.22],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 144.44],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 33.33],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 24), 5.56],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 155.56],
			[Date.UTC(2017, 8, 25), 200.0],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 11.11],
			[Date.UTC(2017, 8, 25), 22.22],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 33.33],
			[Date.UTC(2017, 8, 25), 344.44],
			[Date.UTC(2017, 8, 25), 44.44],
			[Date.UTC(2017, 8, 25), 5.56],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 25), 66.67],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 122.22],
			[Date.UTC(2017, 8, 26), 177.78],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 22.22],
			[Date.UTC(2017, 8, 26), 266.67],
			[Date.UTC(2017, 8, 26), 322.22],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 44.44],
			[Date.UTC(2017, 8, 26), 5.56],
			[Date.UTC(2017, 8, 26), 66.67],
			[Date.UTC(2017, 8, 26), 11.11],
			[Date.UTC(2017, 8, 26), 244.44],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 33.33],
			[Date.UTC(2017, 8, 26), 88.89],
			[Date.UTC(2017, 8, 27), 11.11],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 22.22],
			[Date.UTC(2017, 8, 27), 233.33],
			[Date.UTC(2017, 8, 27), 255.56],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 33.33],
			[Date.UTC(2017, 8, 27), 44.44],
			[Date.UTC(2017, 8, 27), 55.56],
			[Date.UTC(2017, 8, 27), 66.67],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 11.11],
			[Date.UTC(2017, 8, 28), 166.67],
			[Date.UTC(2017, 8, 28), 177.78],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 66.67],
			[Date.UTC(2017, 8, 28), 144.44],
			[Date.UTC(2017, 8, 28), 22.22],
			[Date.UTC(2017, 8, 28), 33.33],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 28), 5.56],
			[Date.UTC(2017, 8, 29), 133.33],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 22.22],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 33.33],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 29), 5.56],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 11.11],
			[Date.UTC(2017, 8, 30), 22.22],
			[Date.UTC(2017, 8, 30), 33.33],
			[Date.UTC(2017, 8, 30), 5.56],
			[Date.UTC(2017, 8, 30), 88.89],
			[Date.UTC(2017, 9, 1), 5.56],
		]    }]
}