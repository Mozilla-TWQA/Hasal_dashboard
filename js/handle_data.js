/**
 * Created by Askeing on 2017/11/9.
 */

let timestamp_string = new Date().valueOf().toString();

let data_url = 'https://gist.githubusercontent.com/mozhasaldashboard/ecf936ce6a922ff71ea66365a1091596/raw/win_dashboard_data.json';
let update_data_url = data_url + '?' + timestamp_string;

let progress_url = 'https://gist.githubusercontent.com/mozhasaldashboard/82bb236b6840d0339bcae048f102f77c/raw/win_dashboard_progress.json'
let update_progress_url = progress_url + '?' + timestamp_string;

// handle data chart
var my_data;
$(window).on('data_ready', function(){
    casename_list.forEach(function(casename, idx) {
        let container_name = 'container' + (idx + 1);
        let platform = casename.split('_').slice(-1)[0];
        $(function () {Highcharts.chart(container_name, my_data[platform][casename]);});
    });
});

$.getJSON(update_data_url, function(response){
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

    let latest_revsion = my_progress.windows10.revision || '';
    if (latest_revsion) {
        let latest_rev_elem = document.getElementById('latest_build_rev');
        latest_rev_elem.innerHTML = '[<a class="color_silver" href="https://hg.mozilla.org/mozilla-central/rev/' + latest_revsion + '" target="_blank">' + latest_revsion.substring(0, 12) + '</a>]';
    }

    let latest_archive_dir = my_progress.windows10.archive_dir || '';
    let latest_archive_url = my_progress.windows10.archive_url || '';
    if (latest_archive_dir && latest_archive_url) {
        let latest_archive_elem = document.getElementById('latest_build_archive');
        latest_archive_elem.innerHTML = '(<a class="color_silver" href="' + latest_archive_url + '" target="_blank">' + latest_archive_dir + '</a>)';
    }

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

$.getJSON(update_progress_url, function(response){
    my_progress = response;
    $(window).trigger('progress_ready');
});
