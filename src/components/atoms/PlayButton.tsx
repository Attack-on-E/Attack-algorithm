import React from "react";
import Link from "next/link";

type PROPS = {
  buttonText: string;
  href: string;
};

const PlayButton: React.FC<PROPS> = (props) => {
  return (
    <button className="text-center text-3xl text-white w-80 py-5 shadow-2xl border-4 border-red-600 bg-primary bg-opacity-62  font-semibold rounded-full hover:bg-onPrimary">
      <Link href={props.href}>{props.buttonText}</Link>
    </button>
  );
};

export default PlayButton;
