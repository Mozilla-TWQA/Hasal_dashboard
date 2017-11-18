/**
 * Created by Askeing on 2017/11/9.
 */

let timestamp_string = new Date().valueOf().toString();

let progress_url = 'https://gist.githubusercontent.com/mozhasaldashboard/82bb236b6840d0339bcae048f102f77c/raw/win_dashboard_progress.json'
let update_progress_url = progress_url + '?' + timestamp_string;

// handle progress
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

    // update latest build progress by suite
    let platforms = ['windows8', 'windows10'];
    platforms.forEach(function(platform) {
        let casesnames = Object.keys(my_progress[platform]['cases']);
        casesnames.forEach(function(casesname){
            browsers = ['firefox', 'chrome'];
            browsers.forEach(function(browser){
                let result_number = my_progress[platform]['cases'][casesname][browser];
                let html_id = casesname + '-' + platform + '-' + browser;
                let html_id_elem = document.getElementById(html_id);

                if (result_number >= 6) {
                    html_id_elem.className = 'success';
                    html_id_elem.innerText = 'OK (' + result_number + ')';
                } else if (result_number > 0) {
                    html_id_elem.className = 'running';
                    html_id_elem.innerText = 'Running (' + result_number + ')';
                } else {
                    html_id_elem.className = 'error';
                    html_id_elem.innerText = 'Error (' + result_number + ')';
                }
            })
        })
    });

});

$.getJSON(update_progress_url, function(response){
    my_progress = response;
    $(window).trigger('progress_ready');
});
