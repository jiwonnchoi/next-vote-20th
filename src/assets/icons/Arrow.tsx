import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 7 5"
    {...props}
  >
    <path fill="#000" d="M3.5 5 .036.5h6.928z" />
  </svg>
);
export default SvgArrow;
