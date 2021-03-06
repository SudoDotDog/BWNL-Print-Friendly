/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Pair Table
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyPairTableElement = {

    readonly key: string;
    readonly value: string;
};

export type PrintFriendlyPairTableProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;

    readonly tableStyle?: React.CSSProperties;
    readonly tableClassName?: string;

    readonly elements: PrintFriendlyPairTableElement[];

    readonly keyWidth?: string;
    readonly bold?: boolean;
    readonly bordered?: boolean;
};

type PrintFriendlyPairTableWithThemeProps = PrintFriendlyPairTableProps & ThemeProps;

class PrintFriendlyPairTableBase extends React.PureComponent<PrintFriendlyPairTableWithThemeProps> {

    public constructor(props: PrintFriendlyPairTableWithThemeProps) {

        super(props);

        this._renderRow = this._renderRow.bind(this);
    }

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div
            className={this.props.className}
            style={{
                marginTop: theme.verticalMargin.small,
                marginBottom: theme.verticalMargin.small,
                ...this.props.style,
            }}
        >
            <table
                style={{
                    width: '100%',
                    fontSize: theme.fontSize.regular,
                    borderCollapse: 'collapse',
                    ...this.props.tableStyle,
                }}
                className={this.props.tableClassName}
            >
                <tbody>
                    {this.props.elements.map(this._renderRow)}
                </tbody>
            </table>
        </div>);
    }

    private _renderRow(element: PrintFriendlyPairTableElement, index: number) {

        const theme: PrintFriendlyTheme = this.props.theme;
        const keyWidth: string = this.props.keyWidth ?? '35%';

        return (<tr
            key={index}
            style={{
                pageBreakInside: 'avoid',
            }}
        >
            <td
                style={{
                    textAlign: 'right',
                    width: keyWidth,
                    color: theme.color.label,
                    paddingRight: theme.padding.medium,
                    ...this._getBorderStyle(),
                }}
            >
                {element.key}
            </td>
            <td
                style={{
                    fontWeight: this.props.bold ? 'bold' : 'normal',
                    paddingLeft: theme.padding.medium,
                    color: theme.color.content,
                    ...this._getBorderStyle(),
                }}
            >
                {element.value}
            </td>
        </tr>);
    }

    private _getBorderStyle(): React.CSSProperties {

        const theme: PrintFriendlyTheme = this.props.theme;

        if (this.props.bordered) {

            return {
                borderWidth: theme.borderWidth.lite,
                borderStyle: 'solid',
                borderColor: theme.color.border,
            };
        }
        return {};
    }
}

export const PrintFriendlyPairTable: React.ComponentType<PrintFriendlyPairTableProps> = withTheme(PrintFriendlyPairTableBase);
