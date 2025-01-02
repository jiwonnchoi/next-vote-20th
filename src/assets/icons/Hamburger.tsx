import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <g fill="#191F28">
      <path d="M4 7.5h28v4.2H4zM4 15.904h28v4.2H4zM4 24.3h28v4.2H4z" />
    </g>
  </svg>
);
export default SvgHamburger;
