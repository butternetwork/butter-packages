"use client";
const IconArrowDownLong = ({ color }: { color: string }) => {
  return (
    <svg
      width="6"
      height="29"
      viewBox="0 0 6 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} fillRule="evenodd">
        <rect x="2.183" width="1" height="28" rx=".5" />
        <rect
          transform="rotate(-30 1.683 26.5)"
          x="1.183"
          y="24"
          width="1"
          height="5"
          rx=".5"
        />
        <rect
          transform="scale(-1 1) rotate(-30 0 40.245)"
          x="3.183"
          y="24"
          width="1"
          height="5"
          rx=".5"
        />
      </g>
    </svg>
  );
};

export default IconArrowDownLong;
