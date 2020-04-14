/**
 * @author WMXPY
 * @namespace Print_Friendly_Addon
 * @description Header
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyHeaderProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;
};

type PrintFriendlyHeaderWithThemeProps = PrintFriendlyHeaderProps & ThemeProps;

class PrintFriendlyHeaderBase extends React.PureComponent<PrintFriendlyHeaderWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                ...this.props.style
            }}
            className={this.props.className}
        >
            {this.props.children}
        </header>);
    }
}

export const PrintFriendlyHeader: React.ComponentType<PrintFriendlyHeaderProps> = withTheme(PrintFriendlyHeaderBase);
