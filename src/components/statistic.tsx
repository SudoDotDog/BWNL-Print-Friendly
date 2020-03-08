/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Statistic
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";
import { PrintFriendlyDescription } from "./description";

export type PrintFriendlyStatisticProps = {

    readonly label: string;
    readonly value: string | number | undefined | null;

    readonly emptyPolyfill?: string | number;

    readonly prefix?: string;
    readonly postfix?: string;
};

type PrintFriendlyStatisticWithThemeProps = PrintFriendlyStatisticProps & ThemeProps;

class PrintFriendlyStatisticBase extends React.PureComponent<PrintFriendlyStatisticWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<PrintFriendlyDescription
            label={this.props.label}
            style={{
                color: theme.color.main,
                fontSize: theme.fontSize.large,
                fontWeight: 'bold',
            }}
        >
            {this._renderContent()}
        </PrintFriendlyDescription>);
    }

    private _renderContent() {

        const polyfill: string | number = this.props.emptyPolyfill ? this.props.emptyPolyfill : 'N/A';

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

        if (this.props.prefix) {
            return (<span
                style={{
                    paddingRight: '5px',
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
                    paddingLeft: '5px',
                    fontWeight: 'normal',
                }}
            >{this.props.postfix}</span>);
        }
        return null;
    }
}

export const PrintFriendlyStatistic: React.ComponentType<PrintFriendlyStatisticProps> = withTheme(PrintFriendlyStatisticBase);
