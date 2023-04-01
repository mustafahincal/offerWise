import { useAuthContext } from "@/contexts/Auth";
import React from "react";
import profile from "../../assets/imgs/profile.jpeg";
import Image from "next/image";
const Profile = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="w-full mx-4 md:w-2/3 lg:w-1/2  flex flex-col bg-white rounded-md shadow-item md:mx-auto">
      <div className="w-full h-[500px]">
        <Image
          src={profile}
          alt=""
          className="rounded-t-md w-full h-full object-cover"
        />
      </div>
      <div className="text-center bg-white">
        <div className="w-full  border-2 py-3 px-20 font-bold">
          <div>{currentUser?.name}</div>
        </div>
        <div className="w-full border-2  py-3 px-20 font-bold">
          <div>{currentUser?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
