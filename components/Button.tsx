import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter ${full && "w-full"} gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={10} />}
      <label className="bold-16 cursor-pointer  whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
