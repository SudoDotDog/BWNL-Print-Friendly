/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Container
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyContainerProps = {

    readonly border?: boolean;
    readonly wideBorder?: boolean;
};

type PrintFriendlyContainerWithThemeProps = PrintFriendlyContainerProps & ThemeProps;

class PrintFriendlyContainerBase extends React.PureComponent<PrintFriendlyContainerWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div style={{
            padding: theme.padding.medium,
            ...this._borderStyle(),
            ...this._wideBorderStyle(),
        }}>
            {this.props.children}
        </div>);
    }

    private _borderStyle(): React.CSSProperties {

        const theme: PrintFriendlyTheme = this.props.theme;
        if (this.props.border) {
            return {
                borderWidth: theme.borderWidth.lite,
                borderStyle: 'solid',
                borderColor: theme.color.main,
            };
        }
        return {};
    }

    private _wideBorderStyle(): React.CSSProperties {

        const theme: PrintFriendlyTheme = this.props.theme;
        if (this.props.border) {
            return {
                borderLeftWidth: theme.borderWidth.container,
                borderLeftStyle: 'solid',
                borderLeftColor: theme.color.main,
                paddingLeft: theme.borderPadding.container,
            };
        }
        return {};
    }
}

export const PrintFriendlyContainer: React.ComponentType<PrintFriendlyContainerProps> = withTheme(PrintFriendlyContainerBase);
