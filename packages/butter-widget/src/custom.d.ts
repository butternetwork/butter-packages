"use client";
// src/custom.d.ts
import '@mantine/core';

import {
  DefaultMantineColor,
  MantineColorsTuple,
} from '@mantine/core';

import type { EmotionStyles, EmotionSx } from '@mantine/emotion';

declare module '@mantine/core' {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }
}

declare module '@uauth/js' {
  export default class UAuth {
    constructor(config: { clientID: string; redirectUri: string });
    loginWithPopup(): Promise<any>;
  }
}



type ExtendedCustomColors =
  | 'primaryColorName'
  | 'secondaryColorName'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}