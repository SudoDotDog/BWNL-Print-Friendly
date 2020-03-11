/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Information
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyInformationProps = {

    readonly label: string;
    readonly value: string;

    readonly style?: React.CSSProperties;
};

type PrintFriendlyInformationWithThemeProps = PrintFriendlyInformationProps & ThemeProps;

class PrintFriendlyInformationBase extends React.PureComponent<PrintFriendlyInformationWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div>
            <span style={{
                color: theme.color.label,
                fontSize: theme.fontSize.label,
            }}>
                {this.props.label}
            </span>
            <span style={this.props.style}>
                {this.props.value}
            </span>
        </div>);
    }
}

export const PrintFriendlyInformation: React.ComponentType<PrintFriendlyInformationProps> = withTheme(PrintFriendlyInformationBase);
