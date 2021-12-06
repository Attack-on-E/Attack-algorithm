import AppLogoImage from "../../../public/favicon.ico";
import Image from "next/image";
import Link from "next/link";

type Props = {
  disabled?: boolean;
};

const AppLogo = (props: Props) => {
  if (props.disabled) {
    return (
      <Image
        className=""
        src={AppLogoImage}
        alt="AppLogoImage"
        width={36}
        height={36}
      />
    );
  } else {
    return (
      <Link href="/">
        <>
          <Image
            className=""
            src={AppLogoImage}
            alt="AppLogoImage"
            width={36}
            height={36}
          />
        </>
      </Link>
    );
  }
};
export default AppLogo;
