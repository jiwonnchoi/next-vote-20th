import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 53 53"
    {...props}
  >
    <circle cx={26.5} cy={26.5} r={26} fill="#F2F4F6" stroke="#B0B8C1" />
    <circle cx={26.5} cy={20.5} r={9.5} fill="#D9D9D9" />
    <path
      fill="#D9D9D9"
      fillRule="evenodd"
      d="M8.3 43.9c3.651-6.213 10.404-10.382 18.13-10.382 7.903 0 14.786 4.362 18.374 10.81a25.2 25.2 0 0 1-18.046 7.576c-7.281 0-13.844-3.078-18.457-8.005"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProfile;
