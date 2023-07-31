import React from "react";

export default function Logo({ classNames, props }: any) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width={80}
      height={80}
      viewBox="0 0 792 792"
      xmlSpace="preserve"
      className="stroke-[12px] fill-none stroke-primary-900 dark:stroke-primary-100 hover:stroke-primary-900/80 dark:hover:stroke-primary-100/80 transition-colors"
      {...props}
    >
      <path d="M265 606.3L265 187.3 528 187.3" />
      <path d="M265 606.3L396.5 191.15 528 606.3" />
      <path d="M265 397.3L528 397.3" />
      <path d="M446 187.3c47 13.23 79.97 55.71 81 104 1 46.81-28.23 89.6-72.59 106" />
      <path d="M350.32 397.3L507.32 606.3" />
      <path d="M528 187.3L528 606.3" />
    </svg>
  );
}
