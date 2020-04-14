/**
 * @author WMXPY
 * @namespace Print_Friendly_Addon
 * @description Header
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";
import { randomUnique } from "@sudoo/random";

export type PrintFriendlyHeaderProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;
};

type PrintFriendlyHeaderWithThemeProps = PrintFriendlyHeaderProps & ThemeProps;

class PrintFriendlyHeaderBase extends React.PureComponent<PrintFriendlyHeaderWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<React.Fragment>
            <style dangerouslySetInnerHTML={{
                __html: `
                @page { 
                    size: auto;
                    padding-top: 200px;
                }
                `,
            }}></style>
            <header
                style={{
                    position: 'fixed',
                    top: '-10px',
                    left: 0,
                    ...this.props.style
                }}
                className={this.props.className}
            >
                {this.props.children}
            </header>
        </React.Fragment>);
    }
}

export const PrintFriendlyHeader: React.ComponentType<PrintFriendlyHeaderProps> = withTheme(PrintFriendlyHeaderBase);
