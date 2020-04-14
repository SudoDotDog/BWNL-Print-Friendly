/**
 * @author WMXPY
 * @namespace Print_Friendly_Addon
 * @description Footer
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";
import { randomUnique } from "@sudoo/random";

export type PrintFriendlyFooterProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;

    readonly avoidInsideBreak?: boolean;
};

type PrintFriendlyFooterWithThemeProps = PrintFriendlyFooterProps & ThemeProps;

class PrintFriendlyFooterBase extends React.PureComponent<PrintFriendlyFooterWithThemeProps> {

    private readonly _id: string = randomUnique();

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<React.Fragment>
            <style dangerouslySetInnerHTML={{
                __html: `
                @page {counter-increment: page;}
                #${this._id}:after {content: counter(page);}
                `,
            }}></style>
            <footer
                id={this._id}
                style={{
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    ...this.props.style
                }}
                className={this.props.className}
            >
                {this.props.children}
            </footer>
        </React.Fragment>);
    }
}

export const PrintFriendlyFooter: React.ComponentType<PrintFriendlyFooterProps> = withTheme(PrintFriendlyFooterBase);
