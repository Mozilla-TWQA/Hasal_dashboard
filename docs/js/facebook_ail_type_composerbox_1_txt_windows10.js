var facebook_ail_type_composerbox_1_txt_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_composerbox_1_txt_windows10'
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
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 44.440000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 55.560000],
		]    }]
}