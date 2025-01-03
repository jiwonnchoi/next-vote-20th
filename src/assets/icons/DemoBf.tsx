import * as React from "react";
import type { SVGProps } from "react";
const SvgDemoBf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 210 188"
    {...props}
  >
    <path
      fill="#5DA9FF"
      d="m142.5 0 15.256 22.67 26.817-5.243-5.243 26.817L202 59.5l-22.67 15.256 5.243 26.817-26.817-5.242L142.5 119l-15.256-22.67-26.817 5.243 5.243-26.817L83 59.5l22.67-15.256-5.243-26.817 26.817 5.243z"
    />
    <g filter="url(#Demo_bf_svg__a)">
      <ellipse
        cx={95}
        cy={131.5}
        stroke="#F9FAFB"
        strokeWidth={3}
        rx={93}
        ry={48.5}
        shapeRendering="crispEdges"
      />
    </g>
    <path
      stroke="url(#Demo_bf_svg__b)"
      strokeWidth={4}
      d="M183 125.5c0 12.002-9.306 23.35-25.436 31.817C141.527 165.734 119.234 171 94.5 171s-47.027-5.266-63.064-13.683C15.306 148.85 6 137.502 6 125.5s9.306-23.35 25.436-31.817C47.473 85.266 69.766 80 94.5 80s47.027 5.266 63.064 13.683C173.694 102.15 183 113.498 183 125.5Z"
    />
    <ellipse cx={6} cy={121.5} fill="#EAF4FF" rx={6} ry={6.5} />
    <path
      fill="#FFEFB1"
      d="m165 119 8.913 24.087L198 152l-24.087 8.913L165 185l-8.913-24.087L132 152l24.087-8.913z"
    />
    <defs>
      <linearGradient
        id="Demo_bf_svg__b"
        x1={18.101}
        x2={169.711}
        y1={86.987}
        y2={164.087}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3E8F5" />
        <stop offset={1} stopColor="#1B7BE8" />
      </linearGradient>
      <filter
        id="Demo_bf_svg__a"
        width={209.5}
        height={113}
        x={0.5}
        y={75}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={14} />
        <feGaussianBlur stdDeviation={3.25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_82_39" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_82_39"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgDemoBf;
