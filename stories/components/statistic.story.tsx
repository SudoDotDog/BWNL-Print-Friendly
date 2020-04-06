/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Statistic
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyStatistic } from "../../src";

export default {
    title: 'Components/Statistic',
    component: PrintFriendlyStatistic,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyStatistic
            label="Hello"
            value="Value"
            prefix="$"
            postfix="USD"
        />
    </div>);
};

export const PolyfillEmpty = () => {

    return (<div>
        <PrintFriendlyStatistic
            label="Hello"
            prefix="$"
            postfix="USD"
            value={undefined as any}
        />
        <PrintFriendlyStatistic
            label="Hello"
            emptyPolyfill="Nothing Here"
            prefix="$"
            postfix="USD"
            value={undefined as any}
        />
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<PrintFriendlyStatistic
            label="Hello"
            value="Value"
            prefix="$"
            postfix="USD"
        />),
    )}>Print</button>);
};
