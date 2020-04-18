/**
 * @author WMXPY
 * @namespace Print_Friendly_Helper
 * @description Page Cover
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyPageBreak } from "../../src/index";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Helper/Page Break',
    component: PrintFriendlyPageBreak,
};

export const Style = () => {

    return (<div>
        First Page
        <PrintFriendlyPageBreak />
        Second Page
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<div>
            First Page
            <PrintFriendlyPageBreak />
            Second Page
        </div>),
    )}>Print</button>);
};
