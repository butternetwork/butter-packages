"use client";
const IconOkYellow = ({ color }: { color: string }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="c84m3e038a" d="M0 0h12v12H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <mask id="v0wfljvonb" fill="#fff">
            <use xlinkHref="#c84m3e038a" />
          </mask>
          <path
            d="M6 .947A5.06 5.06 0 0 0 .947 6 5.06 5.06 0 0 0 6 11.053 5.06 5.06 0 0 0 11.053 6 5.06 5.06 0 0 0 6 .947M6 12c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6"
            fill={color}
            mask="url(#v0wfljvonb)"
          />
        </g>
        <path
          d="M5.597 8.16a.458.458 0 0 1-.322-.13L3.492 6.31a.433.433 0 0 1 0-.623.468.468 0 0 1 .643 0l1.462 1.41 2.748-2.65a.468.468 0 0 1 .643 0 .433.433 0 0 1 0 .623l-3.07 2.96a.485.485 0 0 1-.321.13"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default IconOkYellow;
