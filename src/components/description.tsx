/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Description
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyDescriptionProps = {

    readonly label: string;

    readonly style?: React.CSSProperties;
};

type PrintFriendlyDescriptionWithThemeProps = PrintFriendlyDescriptionProps & ThemeProps;

class PrintFriendlyDescriptionBase extends React.PureComponent<PrintFriendlyDescriptionWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div>
            <div style={{
                color: theme.color.label,
                fontSize: theme.fontSize.label,
            }}>{this.props.label}</div>
            <div style={this.props.style}>{this.props.children}</div>
        </div>);
    }
}

export const PrintFriendlyDescription: React.ComponentType<PrintFriendlyDescriptionProps> = withTheme(PrintFriendlyDescriptionBase);
