interface GenericObject {
    [key: string]: string
}

interface PaletteType {
    [key: string]: GenericObject
}

export interface ThemeType {
    fonts: GenericObject,
    colors: GenericObject,
    palette: PaletteType
}