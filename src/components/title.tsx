/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Title
 */

import { NAVY } from "@bwnl/shiny-inline";
import * as React from "react";
import { ThemeProps, withTheme } from "../theme";

export type PrintFriendlyTitleProps = {
};

type PrintFriendlyTitleWithThemeProps = PrintFriendlyTitleProps & ThemeProps;

class PrintFriendlyTitleBase extends React.PureComponent<PrintFriendlyTitleWithThemeProps> {

    public render() {

        return (<div style={{
            borderLeftWidth: this.props.theme.borderWidth.title,
            borderLeftStyle: 'solid',
            borderLeftColor: NAVY,
            padding: '5px',
            paddingLeft: this.props.theme.borderPadding.title,
            fontSize: this.props.theme.fontSize.title,
            lineHeight: this.props.theme.fontSize.title,
            fontWeight: 'bold',
        }}>
            {this.props.children}
        </div>);
    }
}

export const PrintFriendlyTitle: React.ComponentType<PrintFriendlyTitleProps> = withTheme(PrintFriendlyTitleBase);
