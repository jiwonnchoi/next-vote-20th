"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "src/assets/icons";

type SelectProps = {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  disabled?: boolean;
};

export default function Dropdown({
  options,
  value,
  placeholder,
  onChange,
  name,
  disabled,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫힘
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* 드롭다운 버튼 */}
      <span
        className={`flex flex-row w-full items-center border-0 border-b border-black py-3 px-1.5 focus:outline-none ${
          disabled ? "text-gray-600 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <div
          className={`w-full Body_1_med }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {value || <span className="text-Grey-600">{placeholder}</span>}
        </div>
        <Arrow width={8} height={6} />
      </span>

      {/* 옵션 리스트 */}
      {isOpen && !disabled && (
        <ul
          className="absolute left-0 top-full w-full bg-white border border-black z-10 shadow-lg max-h-[12.25rem] overflow-y-auto"
          onBlur={() => setIsOpen(false)}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                // ChangeEvent 객체 생성
                const event = {
                  target: { name, value: option },
                } as React.ChangeEvent<HTMLSelectElement>;

                onChange(event); // handleInputChange 호출
                setIsOpen(false);
              }}
              className="Body_1_med py-2 px-4 hover:underline cursor-pointer text-center"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
