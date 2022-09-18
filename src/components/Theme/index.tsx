import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles'
import generateTheme from './theme'

type ThemeProps = {
    children: React.ReactNode
}

const Theme: React.FunctionComponent<ThemeProps> = ({ children }: ThemeProps) => {
    const theme = generateTheme()
    return <ThemeProvider theme={ theme }>
        <MUIThemeProvider theme={ theme }>
            { children }
        </MUIThemeProvider>
    </ThemeProvider>
}

export default Theme