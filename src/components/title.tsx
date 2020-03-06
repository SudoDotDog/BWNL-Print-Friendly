/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Title
 */

import { NAVY } from "@bwnl/shiny-inline";
import * as React from "react";
import { ThemeProps, withTheme } from "../theme";

export type PrintFriendlyTitleProps = {

    readonly fontSize?: string;
};

type PrintFriendlyTitleWithThemeProps = PrintFriendlyTitleProps & ThemeProps;

class PrintFriendlyTitleBase extends React.PureComponent<PrintFriendlyTitleWithThemeProps> {

    public render() {

        return (<div style={{
            borderLeft: `8px solid ${NAVY}`,
            padding: '5px',
            paddingLeft: '15px',
            fontSize: this.props.fontSize || '45px',
            lineHeight: this.props.fontSize || '45px',
            fontWeight: 'bold',
        }}>
            {this.props.children}
        </div>);
    }
}

export const PrintFriendlyTitle: React.ComponentType<PrintFriendlyTitleProps> = withTheme(PrintFriendlyTitleBase);
