"use client";

import { useMantineTheme } from "@mantine/core";

const IconPath = () => {
  const theme = useMantineTheme();
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="buiyfsvb2a" d="M0 0h7.078v6.813H0z" />
        <path id="8fxgawr3ac" d="M0 0h7.238v3.903H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={theme.colors.foreground[5]} opacity=".097" width="15" height="15" rx="7.5" />
        <path
          d="M7.914 4.865c0 .392-.32.712-.712.712a.719.719 0 0 1-.718-.712c0-.392.32-.712.712-.712.392 0 .718.32.718.712m-.718-1.33a1.33 1.33 0 0 0-1.33 1.325 1.33 1.33 0 0 0 2.66 0c0-.729-.596-1.326-1.33-1.326"
          fill={theme.colors.foreground[6]}
        />
        <g transform="translate(3 2)">
          <mask id="d1kw8bkyeb" fill="#fff">
            <use xlinkHref="#buiyfsvb2a" />
          </mask>
          <path
            d="M2.954 6.37a.347.347 0 0 0-.348-.348H.348A.347.347 0 0 0 0 6.37c0 .194.155.348.348.348h2.258a.343.343 0 0 0 .348-.348M5.67 4.593l-.188.188L4.19 6.06 2.722 4.593a2.439 2.439 0 0 1-.712-1.756 2.142 2.142 0 0 1 .662-1.54 2.23 2.23 0 0 1 3.048 0c.42.393.657.939.668 1.54a2.444 2.444 0 0 1-.718 1.756m1.408-1.772A2.801 2.801 0 0 0 6.195.788a2.916 2.916 0 0 0-3.992 0 2.845 2.845 0 0 0-.89 2.032c-.01.84.327 1.661.923 2.257l1.568 1.568a.566.566 0 0 0 .398.167.565.565 0 0 0 .397-.167L6.167 5.08a3.14 3.14 0 0 0 .91-2.258"
            fill={theme.colors.foreground[6]}
            mask="url(#d1kw8bkyeb)"
          />
        </g>
        <g transform="translate(4.667 8.034)">
          <mask id="nv2z3pcp1d" fill="#fff">
            <use xlinkHref="#8fxgawr3ac" />
          </mask>
          <path
            d="M6.084 0H4.179a.358.358 0 0 0-.359.359c0 .199.16.359.359.359h1.9a.434.434 0 0 1 .242.795.443.443 0 0 1-.248.077H1.154C.519 1.59 0 2.109 0 2.744c0 .634.519 1.159 1.154 1.159h2.81c.199 0 .359-.16.359-.359a.358.358 0 0 0-.359-.359h-2.81a.437.437 0 0 1 0-.872h4.93a1.157 1.157 0 0 0 1.154-1.159C7.238.519 6.719 0 6.084 0"
            fill={theme.colors.foreground[6]}
            mask="url(#nv2z3pcp1d)"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconPath;
