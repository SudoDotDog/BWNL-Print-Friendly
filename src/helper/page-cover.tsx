/**
 * @author WMXPY
 * @namespace Print_Friendly_Helper
 * @description Page Cover
 */

import * as React from "react";

export type PrintFriendlyPageCoverProps = {

    readonly htmlStyle?: React.CSSProperties;
    readonly htmlClassName?: string;

    readonly bodyStyle?: React.CSSProperties;
    readonly bodyClassName?: string;

    readonly CSSLinks?: string[];
    readonly scriptLinks?: string[];
};

export class PrintFriendlyPageCover extends React.PureComponent<PrintFriendlyPageCoverProps> {

    public render() {

        return (<html
            style={this.props.htmlStyle}
            className={this.props.htmlClassName}
        >
            <head>
                {this._renderCSSLinks()}
            </head>
            <body
                style={this.props.bodyStyle}
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
}
