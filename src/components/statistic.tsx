/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Statistic
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";
import { PrintFriendlyDescription, PrintFriendlyDescriptionProps } from "./description";

export type PrintFriendlyStatisticProps = {

    readonly value: string | number | undefined | React.ReactNode | null;

    readonly emptyPolyfill?: string | React.ReactNode | number;

    readonly prefix?: string;
    readonly postfix?: string;
} & PrintFriendlyDescriptionProps;

type PrintFriendlyStatisticWithThemeProps = PrintFriendlyStatisticProps & ThemeProps;

class PrintFriendlyStatisticBase extends React.PureComponent<PrintFriendlyStatisticWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<PrintFriendlyDescription
            label={this.props.label}
            style={this.props.style}
            className={this.props.className}
            titleStyle={this.props.titleStyle}
            titleClassName={this.props.titleClassName}
            contentStyle={{
                color: theme.color.main,
                fontSize: theme.fontSize.large,
                fontWeight: 'bold',
                ...this.props.contentStyle,
            }}
            contentClassName={this.props.contentClassName}
            avoidInsideBreak={this.props.avoidInsideBreak}
        >
            {this._renderContent()}
        </PrintFriendlyDescription>);
    }

    private _renderContent() {

        const polyfill: string | React.ReactNode | number = this.props.emptyPolyfill ? this.props.emptyPolyfill : 'N/A';

        if (typeof this.props.value === 'undefined'
            || this.props.value === null) {
            return (<span>{polyfill}</span>);
        }

        return (<React.Fragment>
            {this._renderPrefix()}
            <span>{this.props.value}</span>
            {this._renderPostfix()}
        </React.Fragment>);
    }

    private _renderPrefix() {

        const theme: PrintFriendlyTheme = this.props.theme;
        if (this.props.prefix) {
            return (<span
                style={{
                    paddingRight: theme.padding.medium,
                    fontWeight: 'normal',
                }}
            >{this.props.prefix}</span>);
        }
        return null;
    }

    private _renderPostfix() {

        const theme: PrintFriendlyTheme = this.props.theme;
        if (this.props.postfix) {
            return (<span
                style={{
                    fontSize: theme.fontSize.context,
                    paddingLeft: theme.padding.medium,
                    fontWeight: 'normal',
                }}
            >{this.props.postfix}</span>);
        }
        return null;
    }
}

export const PrintFriendlyStatistic: React.ComponentType<PrintFriendlyStatisticProps> = withTheme(PrintFriendlyStatisticBase);
