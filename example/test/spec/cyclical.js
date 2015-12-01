describe('Cyclical JSON', function() {
    it('should fail with explicit message when testing cyclic structures', function() {
        var luke = { name: 'Luke' },
            leia = { name: 'Leia' };
        luke.sister = leia;
        leia.brother = luke;

        expect(function() {
          expect(luke).property('mother', 'Padmé');
        }).to.throw("expected { Object (name, sister) } to have a property 'mother'");
    });
});
