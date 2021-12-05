import type { AppProps } from "next/app";
import Header from "../components/organisms/Header";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
