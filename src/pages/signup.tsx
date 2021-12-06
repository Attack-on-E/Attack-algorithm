import { PrimaryButton, CommonInput } from "../components/atoms";
import { useCallback, useState } from "react";
import { adduser, addUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const [isUnique, setIsUnique] = useState(true);

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  const validate = (adduser: adduser) => {
    if (
      adduser.username === "" ||
      adduser.email === "" ||
      adduser.password === "" ||
      adduser.confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    } else if (password !== confirmPassword) {
      alert("パスワードが一致していません");
      return false;
    } else {
      dispatch(addUser(adduser));
    }
  };

  const adduser = {
    username: username,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  return (
    <div className="w-screen h-screen bg-black">
      <h2 className="text-center text-4xl pt-16">新規登録</h2>
      <div className="w-1/3 container mx-auto">
        <div className="h-8" />
        <CommonInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type="email"
          onChange={inputEmail}
        />
        <div className="h-8" />
        <CommonInput
          fullWidth={true}
          label={"パスワード"}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type="password"
          onChange={inputPassword}
        />
        <div className="h-8" />
        <CommonInput
          fullWidth={true}
          label={"パスワード(再確認)"}
          multiline={false}
          required={true}
          rows={1}
          value={confirmPassword}
          type="password"
          onChange={inputConfirmPassword}
        />
        <div className="h-16" />
        <div className="flex items-center justify-center">
          <PrimaryButton
            label={"アカウントを登録する"}
            onClick={() => validate(adduser)}
            isDisabled={!isUnique}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
