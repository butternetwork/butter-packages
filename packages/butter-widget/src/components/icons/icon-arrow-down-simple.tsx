"use client";
const IconArrowDownSimple = ({ color }: { color: string }) => {
  return (
    <svg
      width="9"
      height="5"
      viewBox="0 0 9 5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="oqyrtlynra" d="M0 0h9v5H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="7m4qecjg4b" fill="#fff">
          <use xlinkHref="#oqyrtlynra" />
        </mask>
        <path
          d="M8.835.163a.551.551 0 0 1 0 .784l-3.94 3.89a.566.566 0 0 1-.797 0L.158.95a.55.55 0 0 1 .007-.78.567.567 0 0 1 .788-.006l3.543 3.496L8.038.163a.566.566 0 0 1 .797 0"
          fill={color}
          mask="url(#7m4qecjg4b)"
        />
      </g>
    </svg>
  );
};

export default IconArrowDownSimple;
