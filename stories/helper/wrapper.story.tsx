/**
 * @author WMXPY
 * @namespace Print_Friendly_Helper
 * @description Wrapper
 * @override Story
 */

import { printReactElementAsPage } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyWrapper } from "../../src/index";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Helper/Wrapper',
    component: PrintFriendlyWrapper,
};

export const Style = () => {

    return (<PrintFriendlyWrapper>
        Hello
    </PrintFriendlyWrapper>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsPage(
        (<PrintFriendlyWrapper>
            Hello
        </PrintFriendlyWrapper>),
    )}>Print</button>);
};
