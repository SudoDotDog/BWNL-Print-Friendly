/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Information
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyPairTable } from "../../src";

export default {
    title: 'Components/Pair Table',
    component: PrintFriendlyPairTable,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyPairTable
            elements={[
                {
                    key: 'Hello',
                    value: 'World',
                },
                {
                    key: 'Hello',
                    value: 'World',
                },
            ]}
        />
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<PrintFriendlyPairTable
            elements={[
                {
                    key: 'Hello',
                    value: 'World',
                },
                {
                    key: 'Hello',
                    value: 'World',
                },
            ]}
        />),
    )}>Print</button>);
};
