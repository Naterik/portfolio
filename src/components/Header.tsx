import React from "react";
import { Moon } from 'lucide-react';
import { Globe } from 'lucide-react';
const Header = () => {
  return (
    <>
      <div className="flex space-x-3 my-4 items-center">
        <a href="/" className=" text-2xl font-semibold  text-primary">
          Khuong
        </a>
        <div>
          <ul className=" flex gap-4 items-center">
            <li>
              <a href="" className="hover:text-white-50">
                About
              </a>
            </li>
            <li className="hover:text-white-50">
              <a href="" >Project</a>
            </li>
            <li className="hover:text-white-50">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={()=>{}} className="hover:text-white-50 "> <Moon className="hover:bg-gray-300 rounded-full cursor-pointer"/></button>
        <button onClick={()=>{}} className="hover:text-white-50 "> <Globe className="hover:bg-gray-300 rounded-full cursor-pointer"/></button>  
      </div>
    </>
  );
};

export default Header;
