import React from "react";
import AppLogo from "../atoms/AppLogo";
import { Label } from "../atoms/index";

type PROPS = {};

const Header: React.FC<PROPS> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="w-screen">
      <div className="w-full h-1/2 py-2 flex items-center bg-black text-white">
        <div className="w-1/6">
          <div className="text-xl text-center">進撃のアルゴリズム</div>
          <div className="text-xs text-center">Attack algorithm</div>
        </div>
        /
        <div className="w-1/6 text-xl text-center">
          　論理的思考力学習アプリ
        </div>
        <div className="w-1/3" />
        <div className="w-1/6 text-xl text-center">開発チーム</div>：
        <div className="w-1/6">
          <div className="text-xl text-center">進撃のE</div>
          <div className="text-xs text-center">Attack on E</div>
        </div>
      </div>
      <div className="w-full flex items-center h-1/2 py-2 bg-red-600">
        <button className="flex items-center w-1/10 pl-16">
          <AppLogo />
        </button>
        <div className="flex justify-evenly w-1/4 items-center">
          <Label labelText="ホーム" href={"/"} />
          <Label labelText="概要" href={"/"} />
          <Label labelText="ランキング" href={"/"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
