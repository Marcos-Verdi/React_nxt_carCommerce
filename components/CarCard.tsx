"use client";

import { CarProps } from '@/types/index'
import { calculateRent, generateCarImagesUrl } from '@/utils/index';
import React,{ useState } from 'react'
import Image from '@/node_modules/next/image'
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;
}

export default function CarCard({car}: CarCardProps) {

  const [isOpen, setIsOpen] = useState(false);

  const {city_mpg, make, model, year, transmission, drive} = car;

  const carRental = calculateRent(city_mpg, year)

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRental}
        <span className='self-end text-[14px] font-semibold'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={generateCarImagesUrl(car)}
          alt="car-model"
          fill priority
          className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col items-center'>
            <Image
              src='steering-wheel.svg'
              height={15}
              width={15}
              alt="steering-wheel" />
            <p>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='tire.svg'
              height={15}
              width={15}
              alt="steering-wheel" />
            <p>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src='gas.svg'
              height={15}
              width={15}
              alt="steering-wheel" />
            <p>{city_mpg} MPG</p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='right-arrow.svg'
            handleClick={() => setIsOpen(true)} />
        </div>

      </div>
      
      <CarDetails isOpen={isOpen} car={car} closeModal={() => setIsOpen(false)} />
      
    </div>
  )
}
