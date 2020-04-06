/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Information
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyInformation } from "../../src";

export default {
    title: 'Components/Information',
    component: PrintFriendlyInformation,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyInformation
            label="Hello"
        >
            World
        </PrintFriendlyInformation>
        <PrintFriendlyInformation
            label="With"
            separator=":"
        >
            Separator
        </PrintFriendlyInformation>
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<React.Fragment>
            <PrintFriendlyInformation
                label="Hello"
            >
                World
            </PrintFriendlyInformation>
            <PrintFriendlyInformation
                label="With"
                separator=":"
            >
                Separator
            </PrintFriendlyInformation>
        </React.Fragment>),
    )}>Print</button>);
};
