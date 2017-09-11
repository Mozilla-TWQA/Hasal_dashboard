var facebook_ail_type_message_1_txt_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_message_1_txt_windows10'
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
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 31), 11.110000],
			[Date.UTC(2017, 7, 31), 11.110000],
			[Date.UTC(2017, 7, 31), 11.110000],
			[Date.UTC(2017, 7, 31), 22.220000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 8, 1), 11.110000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 3), 11.110000],
			[Date.UTC(2017, 8, 3), 11.110000],
			[Date.UTC(2017, 8, 3), 11.110000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 4), 11.110000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 5), 22.220000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 55.560000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 66.670000],
			[Date.UTC(2017, 8, 8), 11.110000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 44.440000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 55.560000],
			[Date.UTC(2017, 8, 10), 66.670000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 22.220000],
			[Date.UTC(2017, 8, 11), 22.220000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 3), 22.220000],
			[Date.UTC(2017, 8, 3), 5.560000],
			[Date.UTC(2017, 8, 3), 5.560000],
			[Date.UTC(2017, 8, 3), 5.560000],
			[Date.UTC(2017, 8, 3), 5.560000],
			[Date.UTC(2017, 8, 3), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 4), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 9), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 11), 5.560000],
		]    }]
}