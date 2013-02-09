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
    
    this.sumFloat = function(index) {
        var sum = 0.0;
        var floating = true;
        for (var i = 0; i < this.toggles.length; i++) {
            if ((i % 2) * floating) {
                if (i == this.toggles.length - 1) {
                    sum += _V_('fst-video').currentTime() - this.toggles[i].location;
                } else {
                    sum += this.toggles[i + 1].location - this.toggles[i].location;
                }
            }
        }
        
        return sum;
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
        
        this.state = this.state == 'Floating' ? 'Swimming' : 'Floating';
        this.updateView();
    };
    
    this.updateView = function() {
        var summary = $('#floatlog-' + this.id);
        $('.heading', summary).text(this.getStatus());
        
        $('#f'+this.id+'_ival00-02', summary).text(this.sumFloat(0));
    };
    
    this.init(id, duration);
};