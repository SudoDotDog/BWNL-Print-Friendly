/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Description
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyDescription } from "../../src";

export default {
    title: 'Components/Description',
    component: PrintFriendlyDescription,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyDescription
            label="Hello"
        >
            World
        </PrintFriendlyDescription>
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<PrintFriendlyDescription
            label="Hello"
        >
            World
        </PrintFriendlyDescription>),
    )}>Print</button>);
};
