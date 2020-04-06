/**
 * @author WMXPY
 * @namespace Print_Friendly_Helper
 * @description Page Cover
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import 'antd/dist/antd.css';
import * as React from 'react';
import { PrintFriendlyPageCover } from "../../src/index";

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

    return (<button onClick={() => printReactElementAsBody(
        (<PrintFriendlyPageCover>
            Hello
        </PrintFriendlyPageCover>),
    )}>Print</button>);
};
