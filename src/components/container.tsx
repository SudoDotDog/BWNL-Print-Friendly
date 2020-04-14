/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Container
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyContainerProps = {

    readonly avoidInsideBreak?: boolean;

    readonly border?: boolean;
    readonly wideBorder?: boolean;

    readonly style?: React.CSSProperties;
    readonly className?: string;
};

type PrintFriendlyContainerWithThemeProps = PrintFriendlyContainerProps & ThemeProps;

class PrintFriendlyContainerBase extends React.PureComponent<PrintFriendlyContainerWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div
            style={{
                pageBreakInside: this.props.avoidInsideBreak ? 'avoid' : 'auto',
                padding: theme.padding.medium,
                ...this._borderStyle(),
                ...this._wideBorderStyle(),
                ...this.props.style,
            }}
            className={this.props.className}
        >
            {this.props.children}
        </div>);
    }

    private _borderStyle(): React.CSSProperties {

        const theme: PrintFriendlyTheme = this.props.theme;
        if (this.props.border) {
            return {
                borderWidth: theme.borderWidth.lite,
                borderStyle: 'solid',
                borderColor: theme.color.border,
            };
        }
        return {};
    }

    private _wideBorderStyle(): React.CSSProperties {

        const theme: PrintFriendlyTheme = this.props.theme;
        if (this.props.wideBorder) {
            return {
                borderLeftWidth: theme.borderWidth.container,
                borderLeftStyle: 'solid',
                borderLeftColor: theme.color.border,
                paddingLeft: theme.borderPadding.container,
            };
        }
        return {};
    }
}

export const PrintFriendlyContainer: React.ComponentType<PrintFriendlyContainerProps> = withTheme(PrintFriendlyContainerBase);
