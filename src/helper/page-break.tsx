/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Page Break
 */

import * as React from "react";

export type PrintFriendlyPageBreakProps = {
};

export class PrintFriendlyPageBreak extends React.PureComponent<PrintFriendlyPageBreakProps> {

    public render() {

        return (<div
            style={{
                pageBreakAfter: 'always',
            }}
        />);
    }
}
