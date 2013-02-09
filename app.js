var MOUSE_PER_VIDEO = 4;

$(document).ready(function() {
    _V_('fst-video').ready(function(){
        var floatLogs = [];
        for (var i = 0; i < MOUSE_PER_VIDEO; i++) {
            floatLogs.push(new MF.model.FloatLog(i, _V_('fst-video').duration()));

            var details = $(
                '<div class="floatlog-summary" id="floatlog-' + i + '">'
                    + '<div class="heading">(...)</div>'
                    + '<table>'
                        + '<thead><th>Interval</th><th>Float Time</th></thead>'
                        + '<tbody>'
                            + '<tr><th>:00 - :02</th><td id="f'+i+'_ival00-02">...</td></tr>'
                            + '<tr><th>:02 - :04</th><td id="f'+i+'_ival02-04">...</td></tr>'
                            + '<tr><th>:04 - :06</th><td id="f'+i+'_ival04-06">...</td></tr>'
                            + '<tr><th>:00 - :06</th><td id="f'+i+'_ival00-06">...</td></tr>'
                        + '</tbody>'
                    + '</table>'
                + '</div>'
            );

            details.appendTo($('#test-details'));
        }

        $('#video-hijack').click(function(e) {
            var index = Math.floor( e.pageX / $(this).width() / .25);
            var video = _V_('fst-video');

            floatLogs[index].toggle(video.currentTime());
            console.log(floatLogs[index].toggles);

            var div = $('<div style="background-color: white;"></div>');
            div.hide();
            div.css('width', $(this).width() / 4);
            div.css('height', $(this).height());
            div.css('position', 'absolute');
            div.css('left', index * $(this).width() / 4);

            $(this).append(div);
            div.fadeTo(100, 0.5).fadeOut(100);
        });
    });
});