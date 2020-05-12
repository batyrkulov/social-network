import React from "react";
import {create} from 'react-test-renderer';
import {Paginator} from "../../../../Common/Paginator/Paginator";


describe('Paginator component', ()=> {
    test('There should be four spans', ()=> {
        let cmp = create(<Paginator total={40} pageSize={10}/>);
        expect(cmp.root.findAllByType('span').length).toBe(4);
    });

    test('There should be five spans', ()=> {
        let cmp = create(<Paginator total={41} pageSize={10}/>);
        expect(cmp.root.findAllByType('span').length).toBe(5);
    });
});