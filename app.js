var START_TIME = Date.now();

var _V_ = function() {
    this.dur  = 60000 * 15;
    
    this.currentTime = function() {
        return Date.now() - START_TIME;
    };
    
    this.duration = function() {
        return this.dur;
    };
    
    return this;
};

var MOUSE_PER_VIDEO = 3;

$(document).ready(function() {
    var floatLogs = [];
    for (var i = 0; i < MOUSE_PER_VIDEO; i++) {
        floatLogs.push(new MF.model.FloatLog(i, _V_('').duration()));
    }
    
    $('#xmain').click(function(e) {
        
        var index = Math.floor( e.clientX / $(this).width() / (1/MOUSE_PER_VIDEO)) + 1;
        floatLogs[index].toggle(_V_('').currentTime());
        floatLogs[index].updateView($('#floatlog-' + index));

        var div = $('<div style="background-color: white;"></div>');
        div.hide();
        div.css('width', $(this).width() / MOUSE_PER_VIDEO);
        div.css('height', $(this).height());
        div.css('position', 'absolute');
        div.css('left', (index - 1) * $(this).width() / MOUSE_PER_VIDEO);

        $(this).append(div);
        div.fadeTo(100, 0.5).fadeOut(100);
    });
});