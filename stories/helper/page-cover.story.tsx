/**
 * @author WMXPY
 * @namespace Print_Friendly_Helper
 * @description Page Cover
 * @override Story
 */

import { printReactElementAsPage } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyPageCover } from "../../src/index";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Helper/Page Cover',
    component: PrintFriendlyPageCover,
};

export const Style = () => {

    return (<PrintFriendlyPageCover>
        Hello
    </PrintFriendlyPageCover>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsPage(
        (<PrintFriendlyPageCover
            size="A4"
        >
            Hello
        </PrintFriendlyPageCover>),
    )}>Print</button>);
};
