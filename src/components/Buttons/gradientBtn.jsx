"use client";;
import React from "react";

const GradientButton = ({
  title,
  className,
  type = "button",
  handleBtn
}) => {
  return (
    <button
      className={`${className} z-10 py-3 px-7 bg-gradient-to-r from-gradientStart to-gradientEnd rounded-lg font-jost text-base text-white capitalize hover:drop-shadow-lg transition-all`}
      type={type}
      onClick={handleBtn}>
      {title}
    </button>
  );
};

export default GradientButton;
