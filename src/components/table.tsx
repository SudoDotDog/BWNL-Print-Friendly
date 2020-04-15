/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Table
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlyTableColumn = {

    readonly displayName: string;
    readonly key: string;
    readonly render: <T extends any = any>(value: T) => React.ReactNode;
};

export type PrintFriendlyTableProps = {

    readonly style?: React.CSSProperties;
    readonly className?: string;

    readonly tableStyle?: React.CSSProperties;
    readonly tableClassName?: string;

    readonly columns: PrintFriendlyTableColumn[];
    readonly data: Array<Record<string, string | number | boolean>>;

    readonly bordered?: boolean;
};

type PrintFriendlyTableWithThemeProps = PrintFriendlyTableProps & ThemeProps;

class PrintFriendlyTableBase extends React.PureComponent<PrintFriendlyTableWithThemeProps> {

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
                <thead>
                    {this._renderHeader()}
                </thead>
                <tbody>
                    {this._renderBody()}
                </tbody>
            </table>
        </div>);
    }

    private _renderHeader() {

        const theme: PrintFriendlyTheme = this.props.theme;
        return <tr
            style={{
                fontSize: theme.fontSize.context,
                pageBreakInside: 'avoid',
            }}
        >
            {this.props.columns.map((column: PrintFriendlyTableColumn, index: number) => {
                return <th
                    key={index}
                    style={{
                        ...this._getBorderStyle(),
                        ...this._getCellStyle(),
                    }}
                >
                    {column.displayName}
                </th>
            })}
        </tr>
    }

    private _renderBody() {

        return this.props.data.map((data: Record<string, string | number | boolean>, dataIndex: number) => {

            return (<tr
                key={dataIndex}
                style={{
                    pageBreakInside: 'avoid',
                }}
            >
                {this.props.columns.map((column: PrintFriendlyTableColumn, columnIndex: number) => {
                    return (<td
                        key={columnIndex}
                        style={{
                            ...this._getBorderStyle(),
                            ...this._getCellStyle(),
                        }}
                    >
                        {this._renderValue(data[column.key], column.render)}
                    </td>);
                })}
            </tr>);
        });
    }

    private _renderValue(value: any, renderFunction?: (value: any) => React.ReactNode): React.ReactNode {

        if (renderFunction) {
            return renderFunction(value);
        }

        switch (typeof value) {
            case 'string': return value;
            case 'number': return value;
            case 'boolean': return String(value);
        }
        return value;
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

    private _getCellStyle(): React.CSSProperties {

        const theme: PrintFriendlyTheme = this.props.theme;
        return {
            padding: theme.padding.small,
        };
    }
}

export const PrintFriendlyTable: React.ComponentType<PrintFriendlyTableProps> = withTheme(PrintFriendlyTableBase);
