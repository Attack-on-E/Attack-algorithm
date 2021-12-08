import { PButton } from "../atoms";
import { auth } from "../../firebase/firebase";

const BeforeLoginButton = () => {
  const provider = new auth();
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="flex justify-around">
      <PButton
        buttonText="Githubでログイン"
        onClick={() => handleOnClick(githubProvider)}
      />
    </div>
  );
};
export default BeforeLoginButton;
