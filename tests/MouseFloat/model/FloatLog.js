describe('MF.model.FloatLog', function() {
    describe('#sumFloat', function() {
        var floatLog;
        beforeEach(function() {
            floatLog = new MF.model.FloatLog(1, 360000);
        });
        
        it('sums only the time spent floating', function() {
            floatLog.toggles = [
                {location: 3000},
                {location: 7000}
            ];
            
            console.log(floatLog.sumFloat(0));
            expect(floatLog.sumFloat(0)['0002']).toBe(4000);
        })
    })
});
