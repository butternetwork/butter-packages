"use client";

import { useMantineTheme } from "@mantine/core";

const IconRevert = () => {
  const theme = useMantineTheme();
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="2sa6psilla" d="M0 0h12.248v12.248H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={theme.colors.primary[6]} opacity=".104" width="25" height="25" rx="12.5" />
        <rect
          fill={theme.colors.primary[6]}
          x="1.613"
          y="1.613"
          width="21.774"
          height="21.774"
          rx="10.887"
        />
        <g transform="translate(6.376 6.376)">
          <mask id="9ocnc6x0lb" fill="#fff">
            <use xlinkHref="#2sa6psilla" />
          </mask>
          <path
            d="M11.63 9.027s-1.118 1.722-2.88 2.645c-1.761.923-3.94.658-5.363-.238-1.424-.897-1.905-1.652-1.905-1.652l-1.228.703S0 10.608 0 10.317v-4.4s0-.393.299-.251c.247.116 2.945 1.652 3.797 2.135.468.207.058.381.058.381l-1.183.677s.676.846 1.664 1.297c1.06.555 2.048.62 3.264.161.793-.296 1.722-1.064 2.399-2.2l1.332.91zM.618 3.221S1.736 1.498 3.498.576c1.761-.923 3.94-.658 5.363.238 1.424.897 1.905 1.652 1.905 1.652l1.228-.703s.254-.123.254.167v4.4s0 .394-.3.252c-.246-.116-2.944-1.651-3.796-2.136-.468-.206-.058-.38-.058-.38l1.183-.678S8.6 2.544 7.613 2.092c-1.06-.555-2.048-.62-3.264-.162-.787.297-1.716 1.065-2.386 2.2L.618 3.22z"
            fill={theme.colors.foreground[6]}
            mask="url(#9ocnc6x0lb)"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconRevert;
