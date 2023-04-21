import React from "react";

export default function Logo({ classNames, props }: any) {
  return (
    <svg
      width={24}
      height={29}
      viewBox="0 0 24 29"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12.3443V0H12.0028V5.11444H6.50503V12.3495H15.8639V12.3677H16.8291V0H23.3342V29H16.8291V17.8148H6.50503V28.0254H6.46306V29H0V28.0254V12.3443Z"
        className={classNames}
      />
    </svg>
  );
}

