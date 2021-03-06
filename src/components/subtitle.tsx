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
            color: theme.color.title,
            borderLeftWidth: theme.borderWidth.subtitle,
            borderLeftStyle: 'solid',
            borderLeftColor: theme.color.main,
            padding: theme.padding.small,
            paddingLeft: theme.borderPadding.subtitle,
            marginTop: theme.verticalMargin.small,
            marginBottom: theme.verticalMargin.small,
            fontSize: theme.fontSize.subtitle,
            lineHeight: theme.fontSize.subtitle,
            fontWeight: 'bold',
        }}>
            {this.props.children}
        </div>);
    }
}

export const PrintFriendlySubtitle: React.ComponentType<PrintFriendlySubtitleProps> = withTheme(PrintFriendlySubtitleBase);
