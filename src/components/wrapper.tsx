/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Wrapper
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyWrapperProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;

    readonly avoidInsideBreak?: boolean;
};

type PrintFriendlyWrapperWithThemeProps = PrintFriendlyWrapperProps & ThemeProps;

class PrintFriendlyWrapperBase extends React.PureComponent<PrintFriendlyWrapperWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div
            style={{
                pageBreakInside: this.props.avoidInsideBreak ? 'avoid' : 'auto',
                ...this.props.style
            }}
            className={this.props.className}
        >
            {this.props.children}
        </div>);
    }
}

export const PrintFriendlyWrapper: React.ComponentType<PrintFriendlyWrapperProps> = withTheme(PrintFriendlyWrapperBase);
