import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface ManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}