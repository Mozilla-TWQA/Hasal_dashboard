/**
 * Created by Askeing on 2017/11/9.
 */

// handle data chart
var my_data;
$(window).on('data_ready', function(){
    casename_list.forEach(function(casename, idx) {
        let container_name = 'container' + (idx + 1);
        let platform = casename.split('_').slice(-1)[0];
        $(function () {Highcharts.chart(container_name, my_data[platform][casename]);});
    });
});

$.getJSON('https://gist.githubusercontent.com/askeing/afb41db54c6a67eee9c9146ff8b193d8/raw/win_dashboard_data.json', function(response){
    my_data = response;
    $(window).trigger('data_ready');
});

// handle progress chart
var my_progress;
$(window).on('progress_ready', function(){
    // latest build datetime
    let latest_ts = new Date(my_progress.latest_timestamp_js);
    let latest_ts_text = latest_ts.toUTCString();
    let latest_ts_elem = document.getElementById('latest_build_timestamp');
    latest_ts_elem.textContent = latest_ts_text;

    // refresh datetime
    let refresh_ts = new Date(my_progress.cuttrnt_utc_timestamp_js);
    let refresh_ts_text = refresh_ts.toUTCString();
    let refresh_ts_elem = document.getElementById('refresh_timestamp');
    refresh_ts_elem.textContent = refresh_ts_text;

    // update gauge chart
    $('#container-windows8').highcharts(my_progress.windows8.gauge);
    $('#container-windows10').highcharts(my_progress.windows10.gauge);

    // update latest build progress by suite
    let platforms = ['windows8', 'windows10'];
    platforms.forEach(function(platform) {
        let suites = Object.keys(my_progress[platform]['suite_status']);
        suites.forEach(function(suite){
            browsers = ['firefox', 'chrome'];
            browsers.forEach(function(browser){
                let status_code = my_progress[platform]['suite_status'][suite][browser];
                let html_id = platform + '-' + suite + '-' + browser;
                let html_id_elem = document.getElementById(html_id);

                if (status_code == 0) {
                    html_id_elem.className = 'success';
                    html_id_elem.innerText = 'OK';
                } else if (status_code == 1) {
                    html_id_elem.className = 'running';
                    html_id_elem.innerText = 'Running';
                } else {
                    html_id_elem.className = 'error';
                    html_id_elem.innerText = 'Error';
                }
            })
        })
    });

});

$.getJSON('https://gist.githubusercontent.com/askeing/385eecc00262175a67c0540daacbb786/raw/win_dashboard_progress.json', function(response){
    my_progress = response;
    $(window).trigger('progress_ready');
});