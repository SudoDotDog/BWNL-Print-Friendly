/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Information
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyInformationProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;

    readonly label: React.ReactNode;

    readonly separator?: React.ReactNode;
};

type PrintFriendlyInformationWithThemeProps = PrintFriendlyInformationProps & ThemeProps;

class PrintFriendlyInformationBase extends React.PureComponent<PrintFriendlyInformationWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div>
            <span
                style={{
                    color: theme.color.label,
                    fontSize: theme.fontSize.label,
                }}
                className={this.props.className}
            >
                {this.props.label}
                {this._renderSeparator()}
            </span>
            <span style={this.props.style}>
                {this.props.children}
            </span>
        </div>);
    }

    private _renderSeparator() {

        if (this.props.separator) {

            if (typeof this.props.separator === 'string') {

                return (<span style={{
                    paddingRight: this.props.theme.padding.small,
                }}>{this.props.separator}</span>);
            }
            return this.props.separator;
        }
        return (<span style={{
            paddingRight: this.props.theme.padding.small,
        }} />);
    }
}

export const PrintFriendlyInformation: React.ComponentType<PrintFriendlyInformationProps> = withTheme(PrintFriendlyInformationBase);
