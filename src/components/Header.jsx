import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCart, IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 border-b px-28 bg-gradient-to-r from-sky-400 via-sky-600 to-sky-400">
      {/* BRAND */}
      <Link to="/">
        <div className="flex items-center justify-start animate-bounce">
          <img className="w-24" src="./images-removebg-preview.png" alt="" />
          <p className="text-xl font-bold text-white hover:cursor-pointer ">
            shoppingKuy!
          </p>
        </div>
      </Link>

      {/* SEARCH BAR */}
      <Input className="max-w-[500px] ml-10" placeholder="Search Product...." />

      {/* BUTTONS */}
      <div className="flex items-center h-5 space-x-4">
        <div className="flex space-x-2">
          <Link to="/cart">
            <Button
              className="px-3 py-2 font-bold text-white transition duration-500 ease-in-out cursor-pointer hover:bg-sky-400 hover:-translate-x-2"
              size="icon"
              variant="ghost"
            >
              <IoCart className="w-6 h-6 text-white" />
            </Button>
          </Link>
          <Button
            className="px-3 py-2 font-bold text-white transition duration-500 ease-in-out cursor-pointer hover:bg-sky-400 hover:-translate-x-2"
            size="icon"
            variant="ghost"
          >
            <IoHeart className="w-6 h-6 text-destructive" />
          </Button>
        </div>

        <div className="flex items-center space-x-4 h-7">
          <Separator orientation="vertical" className="w-px h-full bg-white" />
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="font-bold transition duration-500 ease-in-out text-sky-500 hover:-translate-x-1"
          >
            Login
          </Button>
          <Button
            variant="outline"
            className="font-bold transition duration-500 ease-in-out text-sky-500 hover:-translate-x-1"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
