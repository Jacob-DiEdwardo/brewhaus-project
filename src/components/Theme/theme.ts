import { createTheme } from '@material-ui/core/styles'

const generateTheme = () => {
    const theme = {
        fonts: {
            Arial: 'Arial,Helvetica,sans-serif'
        },
        colors: {
            white: '#fff',
            gray: '#eee',
            green: '#2e8540'
        },
        palette: {
            primary: {
                main: '#692F12'
            },
            secondary: {
                main: '#FEE68C'
            },
            alternative: {
                main: '#000000'
            },
            error: {
                main: '#e00034'
            },
            warning: {
                main: '#ff9001'
            }
        }
    }
    return createTheme(theme)
}

export default generateTheme