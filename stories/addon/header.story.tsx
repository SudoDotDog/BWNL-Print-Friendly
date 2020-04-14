/**
 * @author WMXPY
 * @namespace Print_Friendly_Addon
 * @description Header
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyHeader, PrintFriendlyPageBreak } from "../../src";

export default {
    title: 'Addon/Header',
    component: PrintFriendlyHeader,
};


export const Style = () => {

    return (<PrintFriendlyHeader>
        Header
    </PrintFriendlyHeader>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<React.Fragment>
            <PrintFriendlyHeader>
                Header
            </PrintFriendlyHeader>
            Page 1
            <PrintFriendlyPageBreak />
            Page 2
            <PrintFriendlyPageBreak />
            Page 3
            <PrintFriendlyPageBreak />
        </React.Fragment>),
    )}>Print</button>);
};
