import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <g fill="#fff">
      <path d="m10 7 19.799 19.799-2.97 2.97L7.03 9.969z" />
      <path d="M7 27 26.799 7.201l2.97 2.97-19.8 19.799z" />
    </g>
  </svg>
);
export default SvgClose;
