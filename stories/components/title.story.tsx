/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Title
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyTitle } from "../../src";

export default {
    title: 'Components/Title',
    component: PrintFriendlyTitle,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyTitle>
            Hello World
        </PrintFriendlyTitle>
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<PrintFriendlyTitle>
            Hello World
        </PrintFriendlyTitle>),
    )}>Print</button>);
};
