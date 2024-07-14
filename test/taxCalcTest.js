import {assert} from 'chai';
import {taxCalc} from '../taxCalc.js';

describe('Tax calculator function', function(){
    it('First tax bracket', function(){
        assert.equal(taxCalc(10000), 0, 'taxes on 10,000 = 0' );
    })
    it('Second tax bracket', function(){
        assert.equal(taxCalc(13000), 2600, 'taxes on 13000 = 2600' );
    })
    it('third tax bracket', function(){
        assert.equal(taxCalc(40000), 16000, 'taxes on 40000 = 16000' );
    })
})