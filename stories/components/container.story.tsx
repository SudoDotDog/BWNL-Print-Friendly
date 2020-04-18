/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Container
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyContainer } from "../../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Components/Container',
    component: PrintFriendlyContainer,
};

export const Style = () => {

    return (<div>
        <PrintFriendlyContainer style={{ margin: '5px' }}>
            Hello
        </PrintFriendlyContainer>
        <PrintFriendlyContainer style={{ margin: '5px' }}
            border
        >
            With Border
        </PrintFriendlyContainer>
        <PrintFriendlyContainer style={{ margin: '5px' }}
            border
            wideBorder
        >
            With Wide Border
        </PrintFriendlyContainer>
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<React.Fragment>
            <PrintFriendlyContainer style={{ margin: '5px' }}>
                Hello
            </PrintFriendlyContainer>
            <PrintFriendlyContainer style={{ margin: '5px' }}
                border
            >
                With Border
            </PrintFriendlyContainer>
            <PrintFriendlyContainer style={{ margin: '5px' }}
                border
                wideBorder
            >
                With Wide Border
            </PrintFriendlyContainer>
        </React.Fragment>),
    )}>Print</button>);
};
