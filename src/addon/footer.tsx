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

    readonly pageNumber?: boolean;
};

type PrintFriendlyFooterWithThemeProps = PrintFriendlyFooterProps & ThemeProps;

class PrintFriendlyFooterBase extends React.PureComponent<PrintFriendlyFooterWithThemeProps> {

    private readonly _id: string = randomUnique();

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<React.Fragment>
            {this._renderStyle()}
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

    private _renderStyle() {

        if (this.props.pageNumber) {

            return (<style dangerouslySetInnerHTML={{
                __html: [
                    `@page {counter-increment: page;}`,
                    `#${this._id}:after {content: counter(page);}`
                ].join(''),
            }}></style>);
        }
        return null;
    }
}

export const PrintFriendlyFooter: React.ComponentType<PrintFriendlyFooterProps> = withTheme(PrintFriendlyFooterBase);
