/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Description
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyDescriptionProps = {

    readonly label: string;
};

type PrintFriendlyDescriptionWithThemeProps = PrintFriendlyDescriptionProps & ThemeProps;

class PrintFriendlyDescriptionBase extends React.PureComponent<PrintFriendlyDescriptionWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div>
            <div>{this.props.label}</div>
            <div>{this.props.children}</div>
        </div>);
    }
}

export const PrintFriendlyDescription: React.ComponentType<PrintFriendlyDescriptionProps> = withTheme(PrintFriendlyDescriptionBase);
