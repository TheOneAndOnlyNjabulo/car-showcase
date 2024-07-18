"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { calculateCarRent } from "@/utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    year,
    make,
    model,
    transmission,
    drive,
    fuel_type,
    highway_mpg,
  } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      {/* Car Details */}
      <div className="ca-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      {/* car Price */}
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold"> /day</span>
      </p>
      {/* car Price Ends */}
      {/* Car Image */}
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car Model"
          fill
          priority
          className="object-contain"
        />
      </div>
      {/* Car Image Ends */}

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {/* Div Item start */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering tag"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {/* Div Items Ends */}
          {/* Div Item start */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire tag" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          {/* Div Items Ends */}
          {/* Div Item start */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas tag" />
            <p className="text-[14px]">{city_mpg} KML</p>
          </div>
          {/* Div Items Ends */}
        </div>

        {/* Button Starts */}
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="W-full flex py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Button Ends */}
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(!isOpen)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
