import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/slices/userSlice";
import ImageArea from "../../components/molecules/ImageArea";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser).user;
  const [image, setImage] = useState({ id: "", path: "" });

  useEffect(() => {
    if (user.image.path) {
      setImage(user.image);
    }
  }, [user.image]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      {user && (
        <div className="">
          <ImageArea image={image} setImage={setImage} required={true} />

          <div className="text-center text-white">
            <h2 className="text-5xl">{user.username}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
