/**
 * @author WMXPY
 * @namespace Print_Friendly_Helper
 * @description Page Cover
 */

import { TRANSPARENT } from "@bwnl/shiny-inline";
import * as React from "react";

export type PageCoverOrientationType = 'auto' | 'landscape' | 'portrait';
export type PageCoverSizeType = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'JIS-B5' | 'JIS-B4' | 'legal' | 'letter' | 'ledger' | 'tabloid';

export type PrintFriendlyPageCoverProps = {

    readonly htmlStyle?: React.CSSProperties;
    readonly htmlClassName?: string;

    readonly bodyStyle?: React.CSSProperties;
    readonly bodyClassName?: string;

    readonly polyfillTransparentBorder?: boolean;

    readonly CSSLinks?: string[];
    readonly scriptLinks?: string[];

    readonly orientation?: PageCoverOrientationType;
    readonly size?: PageCoverSizeType;
};

export class PrintFriendlyPageCover extends React.PureComponent<PrintFriendlyPageCoverProps> {

    public render() {

        return (<html
            style={this.props.htmlStyle}
            className={this.props.htmlClassName}
        >
            <head>
                {this._renderCSSLinks()}
                {this._renderPageStyleBlock()}
            </head>
            <body
                style={{
                    ...this._getExtraBodyStyle(),
                    ...this.props.bodyStyle
                }}
                className={this.props.bodyClassName}
            >
                {this.props.children}
            </body>
            {this._renderScriptLinks()}
        </html>);
    }

    private _renderCSSLinks() {

        const links: string[] = this.props.CSSLinks || [];
        return links.map(
            (link: string, index: number) => (<link
                key={index}
                href={link}
                rel="stylesheet"
                type="text/css"
            />),
        );
    }

    private _renderScriptLinks() {

        const links: string[] = this.props.scriptLinks || [];
        return links.map(
            (link: string, index: number) => (<script
                key={index}
                src={link}
            />),
        );
    }

    private _getExtraBodyStyle(): React.CSSProperties {

        if (this.props.polyfillTransparentBorder) {
            return {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: TRANSPARENT,
            };
        }
        return {};
    }

    private _renderPageStyleBlock(): React.ReactNode {

        const size: PageCoverSizeType = this.props.size ?? 'A4';
        const orientation: PageCoverOrientationType = this.props.orientation ?? 'auto';

        const text: string = `${size} ${orientation}`;

        return (<style
            dangerouslySetInnerHTML={{
                __html: `@page {size: ${text};}`,
            }}
        />);
    }
}
