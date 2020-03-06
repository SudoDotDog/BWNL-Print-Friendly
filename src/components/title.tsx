/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Title
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyTitleProps = {
};

type PrintFriendlyTitleWithThemeProps = PrintFriendlyTitleProps & ThemeProps;

class PrintFriendlyTitleBase extends React.PureComponent<PrintFriendlyTitleWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div style={{
            borderLeftWidth: theme.borderWidth.title,
            borderLeftStyle: 'solid',
            borderLeftColor: theme.color.main,
            padding: '5px',
            paddingLeft: theme.borderPadding.title,
            fontSize: theme.fontSize.title,
            lineHeight: theme.fontSize.title,
            fontWeight: 'bold',
        }}>
            {this.props.children}
        </div>);
    }
}

export const PrintFriendlyTitle: React.ComponentType<PrintFriendlyTitleProps> = withTheme(PrintFriendlyTitleBase);
