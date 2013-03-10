if (typeof MF == "undefined") {
    MF = {
        model: {}
    };
}

MF.model.FloatLog = function(id, duration) {
    this.toggles = [];
    this.state = 'Floating';
    
    this.getStatus = function() {
        return this.state;
    };
    
    this.sumFloat = function(inex) {
        var ret = {
            '0002': 0,
            '0204': 0,
            '0406': 0,
            '0006': 0
        };
        var sum = 0;
        var marker = 0;
        var floating = false;
        
        for (var i = 0; i < this.toggles.length; i++) {
            marker = this.toggles[i].location;
            if (floating) {
                var add = 0;
                if (i == this.toggles.length - 1) {
                    add += _V_('fst-video').currentTime() - marker;
                } else {
                    add += this.toggles[i + 1].location - marker;
                }
                
                if (add) {
                    var index = Math.floor(marker / 360000 / (1/MOUSE_PER_VIDEO));
                    var map = ['0002', '0204', '0406', '0006'];
                    ret[map[index]] += add
                }
            }
            floating = !floating;
        }
        
        return ret;
    };
    
    this.init = function(id, duration) {
        console.log(duration);
        this.id = id;
        this.duration = duration;
    };
    
    this.toggle = function(location) {
        this.toggles.push({
            location: location
        });
        console.log(location);
        
        this.state = this.state == 'Floating' ? 'Swimming' : 'Floating';
    };
    
    this.updateView = function(summary) {
        $('.heading', summary).text(this.getStatus());
        
        var duration = this.sumFloat(0)['0002'];
        var ms = duration % 1000;
        var s = Math.floor(duration / 1000);
        $('#f'+this.id+'_ival00-02', summary).text(
            s + 's ' + ms + 'ms'
        );
    };
    
    this.init(id, duration);
};

//MF.model.FloatLog.INITIAL_STATE = 'Floating';