import * as ReactTestUtils from "react-addons-test-utils";
import * as React from "react";
import Link from "../../main/components/Link";
import ReactElement = __React.ReactElement;
import {VisibilityFilter} from "../../main/model/reducerModel";

interface Props {
    active:boolean,
    onClick:()=>void,
    filter:VisibilityFilter
}

function getProps():Props {
    return {
        active: false,
        onClick: () => {},
        filter:"SHOW_ALL"
    }
}

function renderLink(props:Props):ReactElement<Props>{
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(React.createElement(Link, props));
    return renderer.getRenderOutput();
}

describe("link component", function() {
    it('render anchor link when not active', function(){
        const props = getProps();
        props.active = false;
        const result = renderLink(props);
        expect(result.type).toBe('a');
    });
    it('render no anchor link when active', function(){
        const props = getProps();
        props.active = true;
        const result = renderLink(props);
        expect(result.type).toBe('span');
    });
});