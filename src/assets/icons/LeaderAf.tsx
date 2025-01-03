import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaderAf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 280 141"
    {...props}
  >
    <g filter="url(#Leader_af_svg__a)">
      <ellipse
        cx={119.5}
        cy={85}
        stroke="#F9FAFB"
        strokeWidth={3}
        rx={92.5}
        ry={48}
        shapeRendering="crispEdges"
      />
    </g>
    <path
      stroke="url(#Leader_af_svg__b)"
      strokeWidth={4}
      d="M207 78.5c0 12.002-9.306 23.35-25.436 31.817C165.527 118.734 143.234 124 118.5 124s-47.027-5.266-63.064-13.683C39.306 101.85 30 90.502 30 78.5s9.306-23.35 25.436-31.817C71.473 38.266 93.766 33 118.5 33s47.027 5.266 63.064 13.683C197.694 55.15 207 66.498 207 78.5Z"
    />
    <path
      fill="#FFEFB1"
      d="m45.5 0 12.29 33.21L91 45.5 57.79 57.79 45.5 91 33.21 57.79 0 45.5l33.21-12.29z"
    />
    <ellipse cx={206} cy={65.5} fill="#F9FAFB" rx={6} ry={6.5} />
    <path
      fill="#E3E8F5"
      d="M166 10h6v6h-6zM166 75h6v7h-6zM274 75h6v7h-6zM274 10h6v6h-6z"
    />
    <path
      fill="#F9FAFB"
      fillOpacity={0.8}
      stroke="#E3E8F5"
      strokeWidth={3}
      d="M170.5 14.5h105v62h-105z"
    />
    <defs>
      <linearGradient
        id="Leader_af_svg__b"
        x1={42.101}
        x2={193.711}
        y1={39.986}
        y2={117.087}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B7BE8" />
        <stop offset={1} stopColor="#E3E8F5" />
      </linearGradient>
      <filter
        id="Leader_af_svg__a"
        width={208.5}
        height={112}
        x={5}
        y={29}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-14} />
        <feGaussianBlur stdDeviation={3.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_131_68" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_131_68"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgLeaderAf;
