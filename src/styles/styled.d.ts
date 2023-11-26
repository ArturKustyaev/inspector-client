import 'styled-components';
import { Theme } from '@mui/material/styles';
import { TypographyStyle } from '@mui/material/styles/createTypography';

interface CustomPalette {
  legends: {
    blue: string;
    green: string;
    red: string;
    darkred: string;
    yellow: string;
    skyblue: string;
    lightblue: string;
    darkblue: string;
    grayBlue: string;
    lightorange: string;
    orange: string;
    purple: string;
    pink: string;
    darkPink: string;
    lightgreen: string;
    lightLime: string;
    darkLime: string;
    olive: string;
    lightOlive: string;
    gray: string;
    disabled: string;
    divider: string;
  };
  bg: {
    gray: string;
    white: string;
    shades: string;
  };
  table: {
    yellow: string;
    orange: string;
    green: string;
    error: string;
    errorBg: string;
  };
  purple?: string;
  disabled?: string;
}

interface CustomPaletteColors {
  gray?: string;
}

interface CustomTypeText {
  dark?: string;
  light?: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface PaletteColor extends CustomPaletteColors {}
  interface SimplePaletteColorOptions extends CustomPaletteColors {}
  interface TypeText extends CustomTypeText {}
}

type CustomTypographyVariant = 'buttonMedium' | 'buttonSmall' | 'tooltip';
interface CustomTypography extends Record<CustomTypographyVariant, TypographyStyle> {}

declare module '@mui/material/styles' {
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends Partial<Record<CustomTypographyVariant, TypographyStyle>> {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends Record<CustomTypographyVariant, true> {}
}

type CustomButtonSize = 'thin';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides extends Record<CustomButtonSize, true> {}
}

type CustomTextfieldSize = 'large';

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides extends Record<CustomTextfieldSize, true> {}
}

type CustomIconColor = 'dark' | 'purple';

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides extends Record<CustomIconColor, true> {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type LegendColors = keyof CustomPalette['legends'];
