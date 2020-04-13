/**
 * @author WMXPY
 * @namespace Print_Friendly
 * @description Theme
 */

import { BLACK, DARK_GRAY, FONT, NAVY } from "@bwnl/shiny-inline";
import * as React from "react";

export type PrintFriendlyTheme = {

    readonly color: {
        readonly title: string;
        readonly content: string;
        readonly main: string;
        readonly label: string;
    };
    readonly verticalMargin: {
        readonly small: string;
        readonly medium: string;
    };
    readonly padding: {
        readonly small: string;
        readonly medium: string;
        readonly large: string;
    };
    readonly fontSize: {
        readonly title: string;
        readonly subtitle: string;
        readonly large: string;
        readonly context: string;
        readonly label: string;
    };
    readonly fontFamily: {
        readonly context: string;
    };
    readonly borderWidth: {
        readonly lite: string;
        readonly title: string;
        readonly subtitle: string;
        readonly container: string;
    };
    readonly borderPadding: {
        readonly title: string;
        readonly subtitle: string;
        readonly container: string;
    };
};

export type ThemeProps = {
    readonly theme: PrintFriendlyTheme;
};

const getDefaultTheme = (): PrintFriendlyTheme => {

    const liteBorderWidth: string = '1px';
    const containerBorderWidth: string = '4px';
    const titleBorderWidth: string = '8px';
    const majorFontSize: string = '45px';
    const minorFontSize: string = '32px';
    const largeFontSize: string = '24px';
    const mainFontSize: string = '18px';
    const labelFontSize: string = '15px';

    return {

        color: {
            title: BLACK,
            content: BLACK,
            main: NAVY,
            label: DARK_GRAY,
        },
        verticalMargin: {
            small: '5px',
            medium: '8px',
        },
        padding: {
            small: '3px',
            medium: '5px',
            large: '8px',
        },
        fontSize: {
            title: majorFontSize,
            subtitle: minorFontSize,
            large: largeFontSize,
            context: mainFontSize,
            label: labelFontSize,
        },
        fontFamily: {
            context: FONT,
        },
        borderWidth: {
            lite: liteBorderWidth,
            title: titleBorderWidth,
            subtitle: titleBorderWidth,
            container: containerBorderWidth,
        },
        borderPadding: {
            title: '15px',
            subtitle: '12px',
            container: '8px',
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
