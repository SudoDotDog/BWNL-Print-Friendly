/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Table
 * @override Story
 */

import { printReactElementAsBody } from "@bwnl/print";
import * as React from 'react';
import { PrintFriendlyTable } from "../../src";

export default {
    title: 'Components/Table',
    component: PrintFriendlyTable,
};

export const Style = () => {

    return (<div>
        <h2>Regular</h2>
        <PrintFriendlyTable
            columns={[
                {
                    displayName: 'First',
                    key: 'first',
                },
                {
                    displayName: 'Mock',
                    key: 'second',
                },
            ]}
            data={[
                {
                    first: 'First',
                    second: 'Second',
                }, {
                    second: 'Second Second',
                    first: 'Second First',
                },
            ]}
        />
        <h2>Bordered</h2>
        <PrintFriendlyTable
            bordered
            columns={[
                {
                    displayName: 'First',
                    key: 'first',
                },
                {
                    displayName: 'Mock',
                    key: 'second',
                },
            ]}
            data={[
                {
                    first: 'First',
                    second: 'Second',
                }, {
                    second: 'Second Second',
                    first: 'Second First',
                },
            ]}
        />
    </div>);
};

export const Print = () => {

    return (<button onClick={() => printReactElementAsBody(
        (<div>
            <h2>Regular</h2>
            <PrintFriendlyTable
                columns={[
                    {
                        displayName: 'First',
                        key: 'first',
                    },
                    {
                        displayName: 'Mock',
                        key: 'second',
                    },
                ]}
                data={[
                    {
                        first: 'First',
                        second: 'Second',
                    }, {
                        second: 'Second Second',
                        first: 'Second First',
                    },
                ]}
            />
            <h2>Bordered</h2>
            <PrintFriendlyTable
                bordered
                columns={[
                    {
                        displayName: 'First',
                        key: 'first',
                    },
                    {
                        displayName: 'Mock',
                        key: 'second',
                    },
                ]}
                data={[
                    {
                        first: 'First',
                        second: 'Second',
                    }, {
                        second: 'Second Second',
                        first: 'Second First',
                    },
                ]}
            />
        </div>),
    )}>Print</button>);
};
