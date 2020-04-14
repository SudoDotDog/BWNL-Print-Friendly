/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Description
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyDescriptionProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;

    readonly titleStyle?: React.CSSProperties;
    readonly titleClassName?: string;

    readonly contentStyle?: React.CSSProperties;
    readonly contentClassName?: string;

    readonly avoidInsideBreak?: boolean;

    readonly label: React.ReactNode;
};

type PrintFriendlyDescriptionWithThemeProps = PrintFriendlyDescriptionProps & ThemeProps;

class PrintFriendlyDescriptionBase extends React.PureComponent<PrintFriendlyDescriptionWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div
            style={{
                pageBreakInside: this.props.avoidInsideBreak ? 'avoid' : 'auto',
                ...this.props.style
            }}
            className={this.props.className}
        >
            <div
                style={{
                    color: theme.color.label,
                    fontSize: theme.fontSize.label,
                    ...this.props.titleStyle,
                }}
                className={this.props.titleClassName}
            >
                {this.props.label}
            </div>
            <div
                style={this.props.contentStyle}
                className={this.props.contentClassName}
            >
                {this.props.children}
            </div>
        </div>);
    }
}

export const PrintFriendlyDescription: React.ComponentType<PrintFriendlyDescriptionProps> = withTheme(PrintFriendlyDescriptionBase);
