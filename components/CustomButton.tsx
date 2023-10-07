"use client";

import { CustomButtonProps } from '@/types/index';
import React from 'react'

export default function CustomButton({title, containerStyles,handleClick,btnType,textStyles,rightIcon}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={ btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
    </button>
  )
}
