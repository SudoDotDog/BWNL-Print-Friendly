/**
 * @author WMXPY
 * @namespace Print_Friendly_Components
 * @description Subtitle
 */

import * as React from "react";
import { PrintFriendlyTheme, ThemeProps, withTheme } from "../theme";

export type PrintFriendlySubtitleProps = {
};

type PrintFriendlySubtitleWithThemeProps = PrintFriendlySubtitleProps & ThemeProps;

class PrintFriendlySubtitleBase extends React.PureComponent<PrintFriendlySubtitleWithThemeProps> {

    public render() {

        const theme: PrintFriendlyTheme = this.props.theme;

        return (<div style={{
            borderLeftWidth: theme.borderWidth.subtitle,
            borderLeftStyle: 'solid',
            borderLeftColor: theme.color.main,
            padding: theme.padding.medium,
            paddingLeft: theme.borderPadding.subtitle,
            fontSize: theme.fontSize.subtitle,
            lineHeight: theme.fontSize.subtitle,
            fontWeight: 'bold',
        }}>
            {this.props.children}
        </div>);
    }
}

export const PrintFriendlySubtitle: React.ComponentType<PrintFriendlySubtitleProps> = withTheme(PrintFriendlySubtitleBase);
