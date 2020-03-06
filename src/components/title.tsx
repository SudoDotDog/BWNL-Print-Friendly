/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Title
 */

import { NAVY } from "@bwnl/shiny-inline";
import * as React from "react";

export type PrintFriendlyTitleProps = {

    readonly fontSize?: string;
};

export class PrintFriendlyTitle extends React.PureComponent<PrintFriendlyTitleProps> {

    public render() {

        return (<div style={{
            borderLeft: `8px solid ${NAVY}`,
            padding: '5px',
            paddingLeft: '15px',
            fontSize: this.props.fontSize ?? '45px',
            lineHeight: this.props.fontSize ?? '45px',
            fontWeight: 'bold',
        }}>
            {this.props.children}
        </div>);
    }
}
