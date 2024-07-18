"use client";
import React, { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";

interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  buttonType?: "button" | "submit";
  textStyles?: string;
  rightICon?: string;
  isDisabled?: boolean;
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  buttonType,
  textStyles,
  rightICon,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={buttonType}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightICon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightICon}
            alt="Right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
