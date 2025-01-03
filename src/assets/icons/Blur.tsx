import * as React from "react";
import type { SVGProps } from "react";

interface BlurProps extends SVGProps<SVGSVGElement> {
  position: { x: number; y: number };
}

const SvgBlur = ({ position, ...props }: BlurProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 97 97"
    style={{
      position: "fixed",
      transform: `translate(${position.x - 48.5}px, ${position.y - 48.5}px)`,
      transition: "transform 0.3s ease-out",
      pointerEvents: "none",
    }}
    {...props}
  >
    <g filter="url(#Blur_svg__a)">
      <circle cx={48.5} cy={48.5} r={27.5} fill="#AAD2FF" />
    </g>
    <defs>
      <filter
        id="Blur_svg__a"
        width={95.4}
        height={95.4}
        x={0.8}
        y={0.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_40_4772"
          stdDeviation={10.1}
        />
      </filter>
    </defs>
  </svg>
);

export default SvgBlur;
