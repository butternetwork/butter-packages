"use client";
import { useMantineTheme } from "@mantine/core";
const IconArrowRight = () => {
  const theme = useMantineTheme();
  return (
    <svg
      width="6"
      height="8"
      viewBox="0 0 6 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1.204 7.843 4.59-3.466c.275-.208.275-.546 0-.754L1.204.156a.876.876 0 0 0-.998 0c-.275.208-.275.546 0 .753L4.296 4 .207 7.09c-.275.209-.275.546 0 .754a.872.872 0 0 0 .998 0"
        fill={theme.colors.foreground[6]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowRight;
