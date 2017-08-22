var gsearch_ail_select_search_suggestion_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_search_suggestion_windows10'
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
			[Date.UTC(2017, 2, 16), 11.110000],
			[Date.UTC(2017, 2, 16), 11.110000],
			[Date.UTC(2017, 2, 16), 166.670000],
			[Date.UTC(2017, 2, 16), 33.330000],
			[Date.UTC(2017, 2, 16), 33.330000],
			[Date.UTC(2017, 2, 16), 33.330000],
			[Date.UTC(2017, 2, 30), 11.110000],
			[Date.UTC(2017, 2, 30), 11.110000],
			[Date.UTC(2017, 2, 30), 22.220000],
			[Date.UTC(2017, 2, 30), 22.220000],
			[Date.UTC(2017, 2, 30), 33.330000],
			[Date.UTC(2017, 2, 30), 33.330000],
			[Date.UTC(2017, 3, 14), 11.110000],
			[Date.UTC(2017, 3, 14), 22.220000],
			[Date.UTC(2017, 3, 14), 22.220000],
			[Date.UTC(2017, 3, 14), 33.330000],
			[Date.UTC(2017, 3, 14), 33.330000],
			[Date.UTC(2017, 3, 14), 33.330000],
			[Date.UTC(2017, 3, 14), 33.330000],
			[Date.UTC(2017, 3, 14), 33.330000],
			[Date.UTC(2017, 3, 14), 55.560000],
			[Date.UTC(2017, 3, 27), 11.110000],
			[Date.UTC(2017, 3, 27), 11.110000],
			[Date.UTC(2017, 3, 27), 22.220000],
			[Date.UTC(2017, 3, 27), 22.220000],
			[Date.UTC(2017, 3, 27), 22.220000],
			[Date.UTC(2017, 3, 27), 33.330000],
			[Date.UTC(2017, 3, 27), 33.330000],
			[Date.UTC(2017, 3, 27), 33.330000],
			[Date.UTC(2017, 4, 11), 11.110000],
			[Date.UTC(2017, 4, 11), 11.110000],
			[Date.UTC(2017, 4, 11), 11.110000],
			[Date.UTC(2017, 4, 11), 11.110000],
			[Date.UTC(2017, 4, 11), 22.220000],
			[Date.UTC(2017, 4, 11), 5.560000],
			[Date.UTC(2017, 4, 11), 5.560000],
			[Date.UTC(2017, 4, 26), 11.110000],
			[Date.UTC(2017, 4, 26), 22.220000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 33.330000],
			[Date.UTC(2017, 4, 26), 55.560000],
			[Date.UTC(2017, 5, 1), 11.110000],
			[Date.UTC(2017, 5, 1), 11.110000],
			[Date.UTC(2017, 5, 1), 33.330000],
			[Date.UTC(2017, 5, 1), 33.330000],
			[Date.UTC(2017, 5, 1), 33.330000],
			[Date.UTC(2017, 5, 1), 33.330000],
			[Date.UTC(2017, 5, 1), 5.560000],
			[Date.UTC(2017, 5, 2), 22.220000],
			[Date.UTC(2017, 5, 2), 22.220000],
			[Date.UTC(2017, 5, 2), 33.330000],
			[Date.UTC(2017, 5, 2), 33.330000],
			[Date.UTC(2017, 5, 2), 33.330000],
			[Date.UTC(2017, 5, 2), 44.440000],
			[Date.UTC(2017, 5, 2), 44.440000],
			[Date.UTC(2017, 5, 3), 11.110000],
			[Date.UTC(2017, 5, 3), 11.110000],
			[Date.UTC(2017, 5, 3), 22.220000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 3), 33.330000],
			[Date.UTC(2017, 5, 4), 11.110000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 4), 33.330000],
			[Date.UTC(2017, 5, 4), 5.560000],
			[Date.UTC(2017, 5, 6), 11.110000],
			[Date.UTC(2017, 5, 6), 22.220000],
			[Date.UTC(2017, 5, 6), 22.220000],
			[Date.UTC(2017, 5, 6), 33.330000],
			[Date.UTC(2017, 5, 6), 33.330000],
			[Date.UTC(2017, 5, 6), 33.330000],
			[Date.UTC(2017, 5, 6), 33.330000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 44.440000],
			[Date.UTC(2017, 5, 7), 55.560000],
			[Date.UTC(2017, 5, 7), 11.110000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 22.220000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 7), 33.330000],
			[Date.UTC(2017, 5, 8), 22.220000],
			[Date.UTC(2017, 5, 8), 22.220000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 8), 33.330000],
			[Date.UTC(2017, 5, 9), 11.110000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 33.330000],
			[Date.UTC(2017, 5, 9), 5.560000],
			[Date.UTC(2017, 5, 11), 11.110000],
			[Date.UTC(2017, 5, 11), 22.220000],
			[Date.UTC(2017, 5, 11), 33.330000],
			[Date.UTC(2017, 5, 11), 33.330000],
			[Date.UTC(2017, 5, 11), 33.330000],
			[Date.UTC(2017, 5, 11), 33.330000],
			[Date.UTC(2017, 5, 11), 33.330000],
			[Date.UTC(2017, 5, 11), 66.670000],
			[Date.UTC(2017, 5, 11), 66.670000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 66.670000],
			[Date.UTC(2017, 5, 12), 11.110000],
			[Date.UTC(2017, 5, 12), 11.110000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 33.330000],
			[Date.UTC(2017, 5, 12), 77.780000],
			[Date.UTC(2017, 5, 13), 200.000000],
			[Date.UTC(2017, 5, 13), 33.330000],
			[Date.UTC(2017, 5, 13), 33.330000],
			[Date.UTC(2017, 5, 13), 66.670000],
			[Date.UTC(2017, 5, 14), 100.000000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 88.890000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 14), 11.110000],
			[Date.UTC(2017, 5, 14), 22.220000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 33.330000],
			[Date.UTC(2017, 5, 14), 44.440000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 22.220000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 11.110000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 33.330000],
			[Date.UTC(2017, 5, 16), 66.670000],
			[Date.UTC(2017, 5, 17), 11.110000],
			[Date.UTC(2017, 5, 17), 11.110000],
			[Date.UTC(2017, 5, 17), 22.220000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 17), 33.330000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 22.220000],
			[Date.UTC(2017, 5, 18), 222.220000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 18), 33.330000],
			[Date.UTC(2017, 5, 19), 11.110000],
			[Date.UTC(2017, 5, 19), 144.440000],
			[Date.UTC(2017, 5, 19), 22.220000],
			[Date.UTC(2017, 5, 19), 33.330000],
			[Date.UTC(2017, 5, 19), 33.330000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 200.000000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 11.110000],
			[Date.UTC(2017, 5, 21), 22.220000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 21), 33.330000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 22.220000],
			[Date.UTC(2017, 5, 22), 33.330000],
			[Date.UTC(2017, 5, 22), 33.330000],
			[Date.UTC(2017, 5, 22), 33.330000],
			[Date.UTC(2017, 5, 22), 422.220000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 22.220000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 66.670000],
			[Date.UTC(2017, 5, 24), 11.110000],
			[Date.UTC(2017, 5, 24), 211.110000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 33.330000],
			[Date.UTC(2017, 5, 24), 55.560000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 22.220000],
			[Date.UTC(2017, 5, 25), 22.220000],
			[Date.UTC(2017, 5, 25), 222.220000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 33.330000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 88.890000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 11.110000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 33.330000],
			[Date.UTC(2017, 5, 26), 44.440000],
			[Date.UTC(2017, 5, 26), 66.670000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 55.560000],
			[Date.UTC(2017, 5, 28), 88.890000],
			[Date.UTC(2017, 5, 28), 144.440000],
			[Date.UTC(2017, 5, 28), 22.220000],
			[Date.UTC(2017, 5, 28), 244.440000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 33.330000],
			[Date.UTC(2017, 5, 28), 55.560000],
			[Date.UTC(2017, 5, 29), 11.110000],
			[Date.UTC(2017, 5, 29), 11.110000],
			[Date.UTC(2017, 5, 29), 11.110000],
			[Date.UTC(2017, 5, 29), 22.220000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 29), 33.330000],
			[Date.UTC(2017, 5, 30), 22.220000],
			[Date.UTC(2017, 5, 30), 33.330000],
			[Date.UTC(2017, 5, 30), 5.560000],
			[Date.UTC(2017, 6, 1), 188.890000],
			[Date.UTC(2017, 6, 1), 33.330000],
			[Date.UTC(2017, 6, 1), 33.330000],
			[Date.UTC(2017, 6, 1), 33.330000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 2), 11.110000],
			[Date.UTC(2017, 6, 2), 11.110000],
			[Date.UTC(2017, 6, 2), 11.110000],
			[Date.UTC(2017, 6, 2), 166.670000],
			[Date.UTC(2017, 6, 2), 22.220000],
			[Date.UTC(2017, 6, 2), 233.330000],
			[Date.UTC(2017, 6, 2), 33.330000],
			[Date.UTC(2017, 6, 2), 33.330000],
			[Date.UTC(2017, 6, 4), 11.110000],
			[Date.UTC(2017, 6, 4), 166.670000],
			[Date.UTC(2017, 6, 4), 188.890000],
			[Date.UTC(2017, 6, 4), 211.110000],
			[Date.UTC(2017, 6, 4), 222.220000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 5), 11.110000],
			[Date.UTC(2017, 6, 5), 166.670000],
			[Date.UTC(2017, 6, 5), 222.220000],
			[Date.UTC(2017, 6, 5), 244.440000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 200.000000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 7), 11.110000],
			[Date.UTC(2017, 6, 7), 5.560000],
			[Date.UTC(2017, 6, 8), 222.220000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 8), 22.220000],
			[Date.UTC(2017, 6, 8), 33.330000],
			[Date.UTC(2017, 6, 10), 11.110000],
			[Date.UTC(2017, 6, 10), 200.000000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 22.220000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 133.330000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 11), 11.110000],
			[Date.UTC(2017, 6, 11), 222.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 233.330000],
			[Date.UTC(2017, 6, 13), 11.110000],
			[Date.UTC(2017, 6, 13), 222.220000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 14), 200.000000],
			[Date.UTC(2017, 6, 14), 244.440000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 15), 133.330000],
			[Date.UTC(2017, 6, 15), 155.560000],
			[Date.UTC(2017, 6, 15), 188.890000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 222.220000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 144.440000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 222.220000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 21), 222.220000],
			[Date.UTC(2017, 6, 21), 233.330000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 26), 155.560000],
			[Date.UTC(2017, 6, 26), 222.220000],
			[Date.UTC(2017, 6, 26), 5.560000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 155.560000],
			[Date.UTC(2017, 6, 27), 166.670000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 144.440000],
			[Date.UTC(2017, 6, 28), 155.560000],
			[Date.UTC(2017, 6, 28), 166.670000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 166.670000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 1), 188.890000],
			[Date.UTC(2017, 7, 1), 188.890000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 3), 11.110000],
			[Date.UTC(2017, 7, 3), 144.440000],
			[Date.UTC(2017, 7, 3), 166.670000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 222.220000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 144.440000],
			[Date.UTC(2017, 7, 4), 188.890000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 233.330000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 5), 155.560000],
			[Date.UTC(2017, 7, 5), 188.890000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 6), 133.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 7), 11.110000],
			[Date.UTC(2017, 7, 7), 144.440000],
			[Date.UTC(2017, 7, 7), 177.780000],
			[Date.UTC(2017, 7, 7), 44.440000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 222.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 33.330000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 9), 33.330000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 33.330000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 55.560000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 188.890000],
			[Date.UTC(2017, 7, 11), 288.890000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 11), 33.330000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 33.330000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 11.110000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 22.220000],
			[Date.UTC(2017, 7, 13), 33.330000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 14), 33.330000],
			[Date.UTC(2017, 7, 15), 11.110000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 22.220000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 33.330000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 11.110000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 33.330000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 11.110000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 22.220000],
			[Date.UTC(2017, 7, 17), 33.330000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
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
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 5, 13), 155.560000],
			[Date.UTC(2017, 5, 13), 5.560000],
			[Date.UTC(2017, 5, 13), 5.560000],
			[Date.UTC(2017, 5, 13), 5.560000],
			[Date.UTC(2017, 5, 14), 122.220000],
			[Date.UTC(2017, 5, 14), 155.560000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 155.560000],
			[Date.UTC(2017, 5, 14), 166.670000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 14), 5.560000],
			[Date.UTC(2017, 5, 16), 188.890000],
			[Date.UTC(2017, 5, 16), 188.890000],
			[Date.UTC(2017, 5, 16), 5.560000],
			[Date.UTC(2017, 5, 16), 155.560000],
			[Date.UTC(2017, 5, 16), 5.560000],
			[Date.UTC(2017, 5, 17), 5.560000],
			[Date.UTC(2017, 5, 18), 211.110000],
			[Date.UTC(2017, 5, 18), 5.560000],
			[Date.UTC(2017, 5, 18), 5.560000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 19), 5.560000],
			[Date.UTC(2017, 5, 21), 166.670000],
			[Date.UTC(2017, 5, 21), 188.890000],
			[Date.UTC(2017, 5, 21), 222.220000],
			[Date.UTC(2017, 5, 21), 5.560000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 11.110000],
			[Date.UTC(2017, 5, 22), 166.670000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 22), 5.560000],
			[Date.UTC(2017, 5, 24), 133.330000],
			[Date.UTC(2017, 5, 24), 155.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 133.330000],
			[Date.UTC(2017, 5, 24), 188.890000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 24), 5.560000],
			[Date.UTC(2017, 5, 25), 11.110000],
			[Date.UTC(2017, 5, 25), 133.330000],
			[Date.UTC(2017, 5, 25), 155.560000],
			[Date.UTC(2017, 5, 25), 188.890000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 25), 5.560000],
			[Date.UTC(2017, 5, 26), 22.220000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 26), 5.560000],
			[Date.UTC(2017, 5, 28), 11.110000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 166.670000],
			[Date.UTC(2017, 5, 28), 166.670000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 28), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 29), 5.560000],
			[Date.UTC(2017, 5, 30), 177.780000],
			[Date.UTC(2017, 5, 30), 5.560000],
			[Date.UTC(2017, 5, 30), 5.560000],
			[Date.UTC(2017, 6, 1), 177.780000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 1), 5.560000],
			[Date.UTC(2017, 6, 2), 188.890000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 2), 5.560000],
			[Date.UTC(2017, 6, 4), 133.330000],
			[Date.UTC(2017, 6, 4), 133.330000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 4), 5.560000],
			[Date.UTC(2017, 6, 5), 133.330000],
			[Date.UTC(2017, 6, 5), 155.560000],
			[Date.UTC(2017, 6, 5), 211.110000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 5), 133.330000],
			[Date.UTC(2017, 6, 5), 5.560000],
			[Date.UTC(2017, 6, 6), 133.330000],
			[Date.UTC(2017, 6, 6), 133.330000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 6), 5.560000],
			[Date.UTC(2017, 6, 7), 133.330000],
			[Date.UTC(2017, 6, 7), 5.560000],
			[Date.UTC(2017, 6, 8), 5.560000],
			[Date.UTC(2017, 6, 8), 5.560000],
			[Date.UTC(2017, 6, 8), 144.440000],
			[Date.UTC(2017, 6, 8), 144.440000],
			[Date.UTC(2017, 6, 10), 133.330000],
			[Date.UTC(2017, 6, 10), 144.440000],
			[Date.UTC(2017, 6, 10), 188.890000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 10), 133.330000],
			[Date.UTC(2017, 6, 10), 177.780000],
			[Date.UTC(2017, 6, 10), 5.560000],
			[Date.UTC(2017, 6, 11), 11.110000],
			[Date.UTC(2017, 6, 11), 200.000000],
			[Date.UTC(2017, 6, 11), 5.560000],
			[Date.UTC(2017, 6, 13), 144.440000],
			[Date.UTC(2017, 6, 13), 155.560000],
			[Date.UTC(2017, 6, 13), 133.330000],
			[Date.UTC(2017, 6, 13), 144.440000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 13), 5.560000],
			[Date.UTC(2017, 6, 14), 177.780000],
			[Date.UTC(2017, 6, 14), 177.780000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 14), 5.560000],
			[Date.UTC(2017, 6, 15), 166.670000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 15), 5.560000],
			[Date.UTC(2017, 6, 17), 133.330000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 133.330000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 17), 5.560000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 133.330000],
			[Date.UTC(2017, 6, 19), 155.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 19), 5.560000],
			[Date.UTC(2017, 6, 21), 133.330000],
			[Date.UTC(2017, 6, 21), 155.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 21), 5.560000],
			[Date.UTC(2017, 6, 22), 5.560000],
			[Date.UTC(2017, 6, 22), 5.560000],
			[Date.UTC(2017, 6, 23), 5.560000],
			[Date.UTC(2017, 6, 24), 11.110000],
			[Date.UTC(2017, 6, 26), 111.110000],
			[Date.UTC(2017, 6, 26), 5.560000],
			[Date.UTC(2017, 6, 26), 5.560000],
			[Date.UTC(2017, 6, 27), 177.780000],
			[Date.UTC(2017, 6, 27), 144.440000],
			[Date.UTC(2017, 6, 27), 166.670000],
			[Date.UTC(2017, 6, 27), 5.560000],
			[Date.UTC(2017, 6, 28), 122.220000],
			[Date.UTC(2017, 6, 28), 133.330000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 5.560000],
			[Date.UTC(2017, 6, 28), 5.560000],
			[Date.UTC(2017, 6, 28), 133.330000],
			[Date.UTC(2017, 6, 28), 133.330000],
			[Date.UTC(2017, 6, 28), 133.330000],
			[Date.UTC(2017, 6, 28), 144.440000],
			[Date.UTC(2017, 6, 28), 155.560000],
			[Date.UTC(2017, 6, 28), 5.560000],
			[Date.UTC(2017, 6, 30), 5.560000],
			[Date.UTC(2017, 6, 30), 5.560000],
			[Date.UTC(2017, 7, 1), 122.220000],
			[Date.UTC(2017, 7, 1), 155.560000],
			[Date.UTC(2017, 7, 1), 177.780000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 1), 5.560000],
			[Date.UTC(2017, 7, 2), 133.330000],
			[Date.UTC(2017, 7, 2), 166.670000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 2), 5.560000],
			[Date.UTC(2017, 7, 3), 177.780000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 3), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 177.780000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 111.110000],
			[Date.UTC(2017, 7, 4), 5.560000],
			[Date.UTC(2017, 7, 5), 177.780000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 5), 5.560000],
			[Date.UTC(2017, 7, 6), 133.330000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 6), 5.560000],
			[Date.UTC(2017, 7, 7), 133.330000],
			[Date.UTC(2017, 7, 7), 144.440000],
			[Date.UTC(2017, 7, 7), 155.560000],
			[Date.UTC(2017, 7, 7), 166.670000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 7), 5.560000],
			[Date.UTC(2017, 7, 8), 133.330000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 188.890000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 8), 11.110000],
			[Date.UTC(2017, 7, 8), 22.220000],
			[Date.UTC(2017, 7, 8), 5.560000],
			[Date.UTC(2017, 7, 9), 155.560000],
			[Date.UTC(2017, 7, 9), 5.560000],
			[Date.UTC(2017, 7, 10), 133.330000],
			[Date.UTC(2017, 7, 10), 22.220000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 10), 5.560000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 11.110000],
			[Date.UTC(2017, 7, 11), 144.440000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 22.220000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 11), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 11.110000],
			[Date.UTC(2017, 7, 12), 22.220000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 12), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 13), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 14), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 15), 5.560000],
			[Date.UTC(2017, 7, 16), 22.220000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 16), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 17), 5.560000],
			[Date.UTC(2017, 7, 18), 11.110000],
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
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
		]    }]
}