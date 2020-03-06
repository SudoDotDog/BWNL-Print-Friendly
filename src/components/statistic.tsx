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
            style={{
                color: theme.color.main,
                fontSize: theme.fontSize.large,
                fontWeight: 'bold',
            }}
        >
            <span
                style={{
                    paddingRight: '5px',
                    fontWeight: 'normal',
                }}
            >{this.props.prefix}</span>
            <span>{this.props.children}</span>
            <span
                style={{
                    fontSize: theme.fontSize.context,
                    paddingLeft: '5px',
                    fontWeight: 'normal',
                }}
            >{this.props.postfix}</span>
        </PrintFriendlyDescription>);
    }
}

export const PrintFriendlyStatistic: React.ComponentType<PrintFriendlyStatisticProps> = withTheme(PrintFriendlyStatisticBase);
