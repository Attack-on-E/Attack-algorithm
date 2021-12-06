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
    <>
      <section className="w-full h-full flex items-center justify-center">
        {user && (
          <div className="">
            <ImageArea image={image} setImage={setImage} required={true} />

            <div className="text-center">
              <h2 className="text-5xl">{user.username}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default Profile;
