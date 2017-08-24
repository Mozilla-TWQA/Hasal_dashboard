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
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 44.440000],
			[Date.UTC(2017, 5, 14), 66.670000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 44.440000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 55.560000],
			[Date.UTC(2017, 5, 16), 88.890000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 55.560000],
			[Date.UTC(2017, 5, 17), 22.220000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 44.440000],
			[Date.UTC(2017, 5, 18), 66.670000],
			[Date.UTC(2017, 5, 19), 33.330000],
			[Date.UTC(2017, 5, 19), 55.560000],
			[Date.UTC(2017, 5, 19), 66.670000],
			[Date.UTC(2017, 5, 19), 66.670000],
			[Date.UTC(2017, 5, 19), 77.780000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 33.330000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 66.670000],
			[Date.UTC(2017, 5, 24), 66.670000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 44.440000],
			[Date.UTC(2017, 5, 25), 22.220000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 25), 66.670000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 44.440000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 30), 66.670000],
			[Date.UTC(2017, 6, 1), 44.440000],
			[Date.UTC(2017, 6, 1), 55.560000],
			[Date.UTC(2017, 6, 1), 77.780000],
			[Date.UTC(2017, 6, 2), 33.330000],
			[Date.UTC(2017, 6, 2), 33.330000],
			[Date.UTC(2017, 6, 2), 44.440000],
			[Date.UTC(2017, 6, 2), 55.560000],
			[Date.UTC(2017, 6, 2), 66.670000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 33.330000],
			[Date.UTC(2017, 6, 4), 66.670000],
			[Date.UTC(2017, 6, 4), 66.670000],
			[Date.UTC(2017, 6, 4), 66.670000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 55.560000],
			[Date.UTC(2017, 6, 5), 66.670000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 5), 44.440000],
			[Date.UTC(2017, 6, 5), 55.560000],
			[Date.UTC(2017, 6, 6), 55.560000],
			[Date.UTC(2017, 6, 6), 55.560000],
			[Date.UTC(2017, 6, 6), 66.670000],
			[Date.UTC(2017, 6, 7), 11.110000],
			[Date.UTC(2017, 6, 7), 55.560000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 8), 44.440000],
			[Date.UTC(2017, 6, 8), 55.560000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 55.560000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 33.330000],
			[Date.UTC(2017, 6, 10), 44.440000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 11), 33.330000],
			[Date.UTC(2017, 6, 11), 44.440000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 44.440000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 44.440000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 55.560000],
			[Date.UTC(2017, 6, 17), 55.560000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 44.440000],
			[Date.UTC(2017, 6, 17), 55.560000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 18), 33.330000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 55.560000],
			[Date.UTC(2017, 6, 21), 55.560000],
			[Date.UTC(2017, 6, 21), 55.560000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 27), 11.110000],
			[Date.UTC(2017, 6, 27), 33.330000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 3), 11.110000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 266.670000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 9), 66.670000],
			[Date.UTC(2017, 7, 10), 11.110000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 44.440000],
			[Date.UTC(2017, 7, 11), 55.560000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 55.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 44.440000],
			[Date.UTC(2017, 7, 13), 55.560000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 44.440000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 44.440000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 17), 55.560000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 44.440000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 55.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 44.440000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 55.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 44.440000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 44.440000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 66.670000],
			[Date.UTC(2017, 5, 14), 88.890000],
			[Date.UTC(2017, 5, 14), 100.000000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 88.890000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 19), 100.000000],
			[Date.UTC(2017, 5, 19), 11.110000],
			[Date.UTC(2017, 5, 19), 22.220000],
			[Date.UTC(2017, 5, 19), 33.330000],
			[Date.UTC(2017, 5, 19), 88.890000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 66.670000],
			[Date.UTC(2017, 5, 21), 66.670000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 77.780000],
			[Date.UTC(2017, 5, 24), 88.890000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 88.890000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 88.890000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 66.670000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 29), 22.220000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 30), 66.670000],
			[Date.UTC(2017, 6, 1), 33.330000],
			[Date.UTC(2017, 6, 1), 55.560000],
			[Date.UTC(2017, 6, 1), 66.670000],
			[Date.UTC(2017, 6, 2), 11.110000],
			[Date.UTC(2017, 6, 2), 11.110000],
			[Date.UTC(2017, 6, 2), 22.220000],
			[Date.UTC(2017, 6, 2), 66.670000],
			[Date.UTC(2017, 6, 4), 11.110000],
			[Date.UTC(2017, 6, 4), 11.110000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 22.220000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 66.670000],
			[Date.UTC(2017, 6, 4), 66.670000],
			[Date.UTC(2017, 6, 5), 100.000000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 111.110000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 5), 33.330000],
			[Date.UTC(2017, 6, 6), 11.110000],
			[Date.UTC(2017, 6, 6), 66.670000],
			[Date.UTC(2017, 6, 6), 88.890000],
			[Date.UTC(2017, 6, 7), 66.670000],
			[Date.UTC(2017, 6, 7), 66.670000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 8), 5.560000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 10), 11.110000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 10), 11.110000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 66.670000],
			[Date.UTC(2017, 6, 11), 33.330000],
			[Date.UTC(2017, 6, 11), 33.330000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 11.110000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 77.780000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 77.780000],
			[Date.UTC(2017, 6, 14), 88.890000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 15), 66.670000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 17), 66.670000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 88.890000],
			[Date.UTC(2017, 6, 19), 100.000000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 77.780000],
			[Date.UTC(2017, 6, 21), 11.110000],
			[Date.UTC(2017, 6, 21), 11.110000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 66.670000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 26), 11.110000],
			[Date.UTC(2017, 6, 26), 11.110000],
			[Date.UTC(2017, 6, 26), 5.560000],
			[Date.UTC(2017, 6, 26), 88.890000],
			[Date.UTC(2017, 6, 27), 111.110000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 27), 66.670000],
			[Date.UTC(2017, 6, 27), 88.890000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 5.560000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 88.890000],
			[Date.UTC(2017, 6, 30), 11.110000],
			[Date.UTC(2017, 6, 30), 5.560000],
			[Date.UTC(2017, 6, 31), 33.330000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 66.670000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 77.780000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 2), 88.890000],
			[Date.UTC(2017, 7, 3), 11.110000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 66.670000],
			[Date.UTC(2017, 7, 3), 77.780000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 66.670000],
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 7), 66.670000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 88.890000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 55.560000],
			[Date.UTC(2017, 7, 8), 66.670000],
			[Date.UTC(2017, 7, 8), 77.780000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 9), 55.560000],
			[Date.UTC(2017, 7, 9), 88.890000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 66.670000],
			[Date.UTC(2017, 7, 10), 88.890000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 11), 77.780000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 66.670000],
			[Date.UTC(2017, 7, 12), 77.780000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 66.670000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 77.780000],
			[Date.UTC(2017, 7, 13), 88.890000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 77.780000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 33.330000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 66.670000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 66.670000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 66.670000],
		]    }]
}