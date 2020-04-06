/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Subtitle
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlySubtitle } from "../../src";

export default {
    title: 'Components/Subtitle',
    component: PrintFriendlySubtitle,
};

export const Style = () => {

    return (<div>
        <PrintFriendlySubtitle>
            Hello World
        </PrintFriendlySubtitle>
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<PrintFriendlySubtitle>
            Hello World
        </PrintFriendlySubtitle>),
    )}>Print</button>);
};
