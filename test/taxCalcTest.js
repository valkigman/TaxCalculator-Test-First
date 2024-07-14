import {assert} from 'chai';
import {taxCalc} from '../taxCalc.js';

describe('Tax calculator function', function(){
    it('function that calculates tax', function(){
        assert.equal(taxCalc(10000), 0, 'taxes on 10,000 = 0' );
    })
})