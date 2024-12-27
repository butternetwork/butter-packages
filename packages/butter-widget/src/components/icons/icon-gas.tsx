"use client";

import { useMantineTheme } from "@mantine/core";

const IconGas = () => {
  const theme = useMantineTheme();
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="oh0fnbvbta" d="M0 0h9.246v8.454H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={theme.colors.foreground[5]} opacity=".097" width="15" height="15" rx="7.5" />
        <g transform="translate(3 3)">
          <mask id="xyrmv7rjxb" fill="#fff">
            <use xlinkHref="#oh0fnbvbta" />
          </mask>
          <path
            d="M8.89 1.495a.352.352 0 0 0-.354.355v4.459c0 .21-.17.38-.38.381a.381.381 0 0 1-.38-.368h.008V2.936c0-.713-.58-1.293-1.294-1.293v.71c.295 0 .538.22.577.503h-.002v3.453a1.09 1.09 0 1 0 2.18 0V1.85a.355.355 0 0 0-.354-.355zM7.1 8.099a.357.357 0 0 1-.355.355H.353a.355.355 0 0 1 0-.71h6.39a.357.357 0 0 1 .355.355zm-5.782-.355V1.015c0-.168.137-.305.304-.305h3.855c.168 0 .304.137.304.305v6.729h.71V1.015C6.49.454 6.036 0 5.476 0H1.62C1.06 0 .607.454.607 1.015v6.729h.71z"
            fill={theme.colors.foreground[6]}
            mask="url(#xyrmv7rjxb)"
          />
        </g>
        <path
          d="M8.07 9.193a.357.357 0 0 1-.355.355H5.382a.355.355 0 0 1 0-.71h2.333a.357.357 0 0 1 .355.355"
          fill={theme.colors.foreground[6]}
        />
      </g>
    </svg>
  );
};

export default IconGas;
