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
			[Date.UTC(2017, 8, 5), 11.110000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 44.440000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 22.220000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 8), 11.110000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 44.440000],
			[Date.UTC(2017, 8, 8), 66.670000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 55.560000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 22.220000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 10), 33.330000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 44.440000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 44.440000],
			[Date.UTC(2017, 8, 13), 55.560000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 22.220000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 55.560000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 11.110000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 15), 33.330000],
			[Date.UTC(2017, 8, 17), 33.330000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 55.560000],
			[Date.UTC(2017, 8, 18), 55.560000],
			[Date.UTC(2017, 8, 18), 55.560000],
			[Date.UTC(2017, 8, 18), 66.670000],
			[Date.UTC(2017, 8, 18), 66.670000],
			[Date.UTC(2017, 8, 18), 66.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 33.330000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 5), 5.560000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 11.110000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 22.220000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 33.330000],
			[Date.UTC(2017, 8, 6), 5.560000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 11.110000],
			[Date.UTC(2017, 8, 7), 33.330000],
			[Date.UTC(2017, 8, 7), 5.560000],
			[Date.UTC(2017, 8, 7), 55.560000],
			[Date.UTC(2017, 8, 8), 22.220000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 33.330000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 8), 5.560000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 11.110000],
			[Date.UTC(2017, 8, 9), 22.220000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 33.330000],
			[Date.UTC(2017, 8, 9), 77.780000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 11.110000],
			[Date.UTC(2017, 8, 10), 122.220000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 10), 5.560000],
			[Date.UTC(2017, 8, 11), 11.110000],
			[Date.UTC(2017, 8, 11), 33.330000],
			[Date.UTC(2017, 8, 11), 5.560000],
			[Date.UTC(2017, 8, 11), 5.560000],
			[Date.UTC(2017, 8, 11), 5.560000],
			[Date.UTC(2017, 8, 11), 55.560000],
			[Date.UTC(2017, 8, 12), 144.440000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 22.220000],
			[Date.UTC(2017, 8, 12), 33.330000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 12), 5.560000],
			[Date.UTC(2017, 8, 12), 55.560000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 11.110000],
			[Date.UTC(2017, 8, 13), 166.670000],
			[Date.UTC(2017, 8, 13), 211.110000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 33.330000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 13), 55.560000],
			[Date.UTC(2017, 8, 13), 22.220000],
			[Date.UTC(2017, 8, 13), 5.560000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 11.110000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 33.330000],
			[Date.UTC(2017, 8, 14), 5.560000],
			[Date.UTC(2017, 8, 14), 66.670000],
			[Date.UTC(2017, 8, 15), 22.220000],
			[Date.UTC(2017, 8, 16), 11.110000],
			[Date.UTC(2017, 8, 16), 122.220000],
			[Date.UTC(2017, 8, 16), 33.330000],
			[Date.UTC(2017, 8, 16), 33.330000],
			[Date.UTC(2017, 8, 16), 44.440000],
			[Date.UTC(2017, 8, 16), 44.440000],
			[Date.UTC(2017, 8, 16), 5.560000],
			[Date.UTC(2017, 8, 17), 100.000000],
			[Date.UTC(2017, 8, 17), 11.110000],
			[Date.UTC(2017, 8, 17), 11.110000],
			[Date.UTC(2017, 8, 17), 22.220000],
			[Date.UTC(2017, 8, 17), 33.330000],
			[Date.UTC(2017, 8, 17), 33.330000],
			[Date.UTC(2017, 8, 17), 33.330000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 17), 5.560000],
			[Date.UTC(2017, 8, 17), 88.890000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 11.110000],
			[Date.UTC(2017, 8, 18), 155.560000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 22.220000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 33.330000],
			[Date.UTC(2017, 8, 18), 344.440000],
			[Date.UTC(2017, 8, 18), 44.440000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
			[Date.UTC(2017, 8, 18), 5.560000],
		]    }]
}