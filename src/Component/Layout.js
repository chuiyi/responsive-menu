import { Global, css } from '@emotion/react';
import React from 'react';
import { Box, useColorStyle, useColorMode, useTheme } from '@tonic-ui/react';

function Layout(props) {
    const [colorMode] = useColorMode();
    const [colorStyle] = useColorStyle({ colorMode });
    const { fontSizes, lineHeights } = useTheme();
    const backgroundColor = colorStyle.background.primary;
    const color = colorStyle.color.primary;

    return (
        <>
            <Global
                styles={css`
                    :root {
                        color-scheme: ${colorMode};
                    }
                    :focus:not(:focus-visible) {
                        outline: none;
                    }
                    body {
                        font-size: ${fontSizes.sm};
                        line-height: ${lineHeights.sm};
                        text-align: center;
                    }
                `}
            />
            <Box backgroundColor={backgroundColor} color={color} fontSize="sm" lineHeight="sm" height="100vh" {...props} />
        </>
    );
}

export default Layout;
