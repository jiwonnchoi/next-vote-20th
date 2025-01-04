import { AboutUsMobile } from "src/assets/icons";
export default function Aboutus() {
  return (
    <div className="flex flex-col w-full relative">
      <div className="z-0 absolute w-[7.5625rem] h-[2.6875rem] bg-Blue_Grey top-[7.94rem] ml-5"></div>
      <div className="z-2 relative Headline_1 mt-[7.94rem] ml-[1.63rem]">
        MADE BY.
      </div>
      <div className="flex w-full px-9">
        <AboutUsMobile className="w-full mt-[2.69rem]" />
      </div>
    </div>
  );
}
