/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Theme
 */

import { GRAY, NAVY } from "@bwnl/shiny-inline";
import * as React from "react";

export type PrintFriendlyTheme = {

    readonly color: {
        readonly main: string;
        readonly label: string;
    };
    readonly fontSize: {
        readonly title: string;
        readonly subtitle: string;
        readonly label: string;
    };
    readonly borderWidth: {
        readonly title: string;
        readonly subtitle: string;
    };
    readonly borderPadding: {
        readonly title: string;
        readonly subtitle: string;
    };
};

export type ThemeProps = {
    readonly theme: PrintFriendlyTheme;
};

const getDefaultTheme = (): PrintFriendlyTheme => {

    const titleBorderWidth: string = '8px';
    return {

        color: {
            main: NAVY,
            label: GRAY,
        },
        fontSize: {
            title: '45px',
            subtitle: '32px',
            label: '15px',
        },
        borderWidth: {
            title: titleBorderWidth,
            subtitle: titleBorderWidth,
        },
        borderPadding: {
            title: '15px',
            subtitle: '12px',
        },
    };
};

const PrintFriendlyThemeContext: React.Context<PrintFriendlyTheme> = React.createContext<PrintFriendlyTheme>(getDefaultTheme());

export const PrintFriendlyThemeConsumer = PrintFriendlyThemeContext.Consumer;
export const PrintFriendlyThemeProvider: React.ComponentType<React.ProviderProps<Partial<PrintFriendlyTheme>>> = (props: React.ProviderProps<Partial<PrintFriendlyTheme>>) => {

    const defaultTheme: PrintFriendlyTheme = getDefaultTheme();
    const combinedTheme: PrintFriendlyTheme = {
        ...defaultTheme,
        ...props.value,
    };

    return React.createElement(PrintFriendlyThemeContext.Provider, {
        value: combinedTheme,
    }, props.children);
};

export const withTheme = <T>(Component: any): React.ComponentType<T> => {

    return <P extends React.Props<T>>(originProps: P) => {

        return React.createElement(PrintFriendlyThemeConsumer, {} as any, (context: PrintFriendlyTheme) => {

            return React.createElement(Component, {
                ...originProps,
                theme: context,
            }, originProps.children);
        });
    };
};
