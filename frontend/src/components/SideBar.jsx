import { useNavigate } from "react-router-dom";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import { CirclePlus, LogOutIcon } from "lucide-react";
import { UserButton,useClerk } from "@clerk/clerk-react";
import { dummyUserData } from "../assets/assets.js";
import logo from '../assets/logo.png'

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
const user = dummyUserData[0];
  const {signOut}= useClerk();
  return (
    <div
      className={`w-60 h-screen xl:w-72 bg-white  border-gray-200 border-r flex flex-col justify-between  max-sm:absolute top-0 bottom-0 z-20 ${sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"} transition-all duration-300 ease-in-out`}
    >
      <div className="w-full">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt=""
          className="w-30  ml-14 mt-0 cursor-pointer  "
        />
        <hr className="border-gray-300 mb-8" />

        <MenuItems setSidebarOpen={setSidebarOpen} />

        <Link
          to="create-post"
          className="flex items-center justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition text-white cursor-pointer"
        >
          <CirclePlus className="w-5 h-5" />
          Create Post
        </Link>
      </div>
      <div className=" w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div className="flex gap-2 items-center cursor-pointer">
            <UserButton />
            <div>
            <h1 className="text-sm font-medium">{user?.full_name}</h1>
            <p className="text-xs text-gray-500">@{user?.username}</p>
            </div>
            </div>
      <LogOutIcon onClick={signOut} className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"/>
        </div>
      
    </div>
  );
};

export default SideBar;
