import Image from "next/image";
import AboutUsPc from "src/assets/images/AboutUs_pc.png";
import { AboutUsMobile } from "src/assets/icons";

export default function Aboutus() {
  return (
    <>
      <div className="flex flex-col w-full relative pc:hidden">
        <div className="z-0 absolute w-[7.5625rem] h-[2.6875rem] bg-Blue_Grey top-[7.94rem] ml-5"></div>
        <div className="z-2 relative Headline_1 mt-[7.94rem] ml-[1.63rem]">
          MADE BY.
        </div>
        <div className="self-center w-[80%] mb-24">
          <AboutUsMobile className="w-full mt-[2.69rem]" />
        </div>
      </div>
      <div
        className="relative w-[60%] hidden mt-36 pc:flex min-w-[40rem]"
        style={{ aspectRatio: "56 / 35" }}
      >
        <Image
          src={AboutUsPc}
          alt="About Us"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
}
