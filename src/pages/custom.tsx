import React from "react";
import { IconButton } from "@material-ui/core";

const custom = () => {
    const []

  const blueClicked = () => {
    console.log("clicked");
  };

  const clickAction = (index: null | number) => {

  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-1/2  h-3/4 bg-fire-img justify-center">
        <div className="border-solid border-4 border-red-500 bg-primary_img bg-opacity-50 bg-cover h-full rounded-3xl flex justify-center items-center">
          <div className="h-3/4 w-1/12 flex justify-center border-2 border-red-500 bg-red-300 bg-opacity-90">
            <div className="flex-container mt-12">
              <IconButton onClick={blueClicked}>
                <div className="flex rounded-full h-12 w-12 bg-blue-400 border-blue-500 border-4" />
              </IconButton>
              <div className="flex justify-center items-center">制御</div>
            </div>
          </div>
          <div className="h-3/4 w-4/12 flex justify-center items-center border-2 border-red-500 bg-red-300 bg-opacity-90">
            <div className="flex-container w-3/5">
              <div className="px-full h-12 bg-blue-400 my-5 border-blue-500 border-4 flex justify-center items-center text-white text-lg" onClick={() => clickAction()}>
                右に進む
              </div>
              <div className="px-full h-12 bg-blue-400 my-5 border-blue-500 border-4 flex justify-center items-center text-white text-lg">
                ジャンプ
              </div>
            </div>
          </div>
          <div className="h-3/4 w-5/12 flex justify-center border-2 border-red-500 bg-red-300 bg-opacity-90"></div>
        </div>
      </div>
    </div>
  );
};

export default custom;
