import * as React from "react";
import type { SVGProps } from "react";
const SvgStarRed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 80 79"
    {...props}
  >
    <path
      fill="#DF4646"
      fillOpacity={0.57}
      d="m40 0 11.919 16.449 20.136-.824-5.274 19.688 13.191 15.422-18.495 8.101-3.688 20.054L40 69.305 22.21 78.89l-3.687-20.054L.028 50.735l13.19-15.422-5.273-19.688 20.136.824z"
    />
  </svg>
);
export default SvgStarRed;
