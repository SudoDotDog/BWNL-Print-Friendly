/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Statistic
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";
import { PrintFriendlyDescription } from "./description";

export type PrintFriendlyStatisticProps = {

    readonly label: string;

    readonly prefix: string;
    readonly postfix: string;
};

type PrintFriendlyStatisticWithThemeProps = PrintFriendlyStatisticProps & ThemeProps;

class PrintFriendlyStatisticBase extends React.PureComponent<PrintFriendlyStatisticWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<PrintFriendlyDescription
            label={this.props.label}
        >
            <div style={{
                fontSize: theme.fontSize.context,
            }}>
                {this.props.prefix}
                <span>{this.props.children}</span>
                {this.props.postfix}
            </div>
        </PrintFriendlyDescription>);
    }
}

export const PrintFriendlyStatistic: React.ComponentType<PrintFriendlyStatisticProps> = withTheme(PrintFriendlyStatisticBase);
