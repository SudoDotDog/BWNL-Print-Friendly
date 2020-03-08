/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Page Cover
 */

import * as React from "react";

export type PrintFriendlyPageCoverProps = {
};

export class PrintFriendlyPageCover extends React.PureComponent<PrintFriendlyPageCoverProps> {

    public render() {

        return (<html>
            <head></head>
            <body>
                {this.props.children}
            </body>
        </html>);
    }
}
