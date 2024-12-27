import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import { Buffer } from 'buffer';
import process from 'process';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import {
  MantineProvider,
  useMantineColorScheme,
} from '@mantine/core';
// theme.ts file from previous step
import mantineTheme, { getThemeWithConfig } from '../src/theme';
import {
  emotionTransform,
  MantineEmotionProvider,
} from '@mantine/emotion';

window.Buffer = Buffer;
window.process = process; // 挂载 process 到全局对象

const channel = addons.getChannel();

function ColorSchemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) =>
    setColorScheme('dark');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children} </>;
}

export const decorators = [
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()} </ColorSchemeWrapper>
  ),
  (renderStory: any) => {
    const colors = {
      primary: "#3271AE",
      red: "#CC0E00",
      green: "#1CC10B",
      background: "#F8C6B5",
      background1: "#F091A0",
      background2: "rgba(255,255,255,0.05)",
      foreground: "#000000",
      foreground1: "rgba(0,0,0,0.6)",
      divider: "rgba(255, 255, 255, 0.1)",
    }
    const theme = getThemeWithConfig({
      colors,
      fontFamily: "Inter",
    });
    return <MantineProvider theme={theme} >
      <MantineEmotionProvider>
        {renderStory()}
      </MantineEmotionProvider>
    </MantineProvider>
  },
];
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)

// const config = {
//   // Required
//   framework: '@storybook/react-vite',
//   stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)']
// };

// export default config;