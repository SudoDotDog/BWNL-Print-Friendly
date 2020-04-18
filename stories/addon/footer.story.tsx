/**
 * @author WMXPY
 * @namespace Print_Friendly_Addon
 * @description Footer
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyFooter, PrintFriendlyPageBreak } from "../../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Addon/Footer',
    component: PrintFriendlyFooter,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyFooter style={{ margin: '5px' }}>
            Page:&nbsp;
        </PrintFriendlyFooter>
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<React.Fragment>
            <PrintFriendlyFooter style={{ margin: '5px' }}>
                Page:&nbsp;
            </PrintFriendlyFooter>
            Page 1
            <PrintFriendlyPageBreak />
            Page 2
            <PrintFriendlyPageBreak />
            Page 3
            <PrintFriendlyPageBreak />
        </React.Fragment>),
    )}>Print</button>);
};
