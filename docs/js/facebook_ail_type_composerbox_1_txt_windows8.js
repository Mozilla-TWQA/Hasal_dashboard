var facebook_ail_type_composerbox_1_txt_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_composerbox_1_txt_windows8'
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
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 55.56],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 66.67],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 44.44],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 28), 55.56],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 44.44],
			[Date.UTC(2017, 9, 29), 44.44],
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
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 55.56],
			[Date.UTC(2017, 9, 29), 66.67],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
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
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 66.67],
			[Date.UTC(2017, 9, 30), 77.78],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 44.44],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 33.33],
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
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 9, 31), 66.67],
			[Date.UTC(2017, 9, 31), 88.89],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 1), 77.78],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 55.56],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 3), 66.67],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 44.44],
			[Date.UTC(2017, 10, 3), 55.56],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 66.67],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 22.22],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
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
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 4), 55.56],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 55.56],
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
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
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
			[Date.UTC(2017, 10, 5), 88.89],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 55.56],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 77.78],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 55.56],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 66.67],
			[Date.UTC(2017, 10, 8), 77.78],
			[Date.UTC(2017, 10, 8), 77.78],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 44.44],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 22.22],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 33.33],
			[Date.UTC(2017, 9, 27), 66.67],
			[Date.UTC(2017, 9, 28), 11.11],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 22.22],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 28), 33.33],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 22.22],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 29), 33.33],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 11.11],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 22.22],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
			[Date.UTC(2017, 9, 30), 33.33],
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
			[Date.UTC(2017, 9, 31), 22.22],
			[Date.UTC(2017, 9, 31), 33.33],
			[Date.UTC(2017, 9, 31), 33.33],
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
			[Date.UTC(2017, 9, 31), 55.56],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 22.22],
			[Date.UTC(2017, 10, 1), 33.33],
			[Date.UTC(2017, 10, 1), 44.44],
			[Date.UTC(2017, 10, 1), 55.56],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 44.44],
			[Date.UTC(2017, 10, 2), 22.22],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 33.33],
			[Date.UTC(2017, 10, 2), 66.67],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 22.22],
			[Date.UTC(2017, 10, 3), 33.33],
			[Date.UTC(2017, 10, 3), 33.33],
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
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 33.33],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 4), 44.44],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 22.22],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
			[Date.UTC(2017, 10, 5), 33.33],
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
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 44.44],
			[Date.UTC(2017, 10, 5), 77.78],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 44.44],
			[Date.UTC(2017, 10, 7), 66.67],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 22.22],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
			[Date.UTC(2017, 10, 7), 33.33],
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
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 33.33],
			[Date.UTC(2017, 10, 8), 44.44],
			[Date.UTC(2017, 10, 8), 44.44],
		]    }]
}