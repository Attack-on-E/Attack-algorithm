import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import PlayButton from "../components/atoms/PlayButton";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Start: NextPage = () => {
  return (
    <div className="border-solid border-4 border-red-500 bg-primary_img bg-opacity-50 bg-cover space-y-6 h-full rounded-3xl">
      <div className="text-6xl text-white flex justify-center items-center pt-20 mt-4 ">
        進撃のアルゴリズム
      </div>
      <div className="text-3xl text-white flex justify-center items-center mb-12">
        最強のアルゴリズムを考えよう!
      </div>

      <div className="flex justify-center items-center text-xl flex-col">
        <div className="mt-20 flex items-center">
          <PlayButton buttonText={"スタート"} href={"/gamePage"} />
        </div>
        <div className="mt-10 flex items-center">
          <PlayButton buttonText={"カスタム"} href={"./custom"} />
        </div>
      </div>
    </div>
  );
};

export default Start;
