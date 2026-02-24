import React from "react";
import { Link } from "react-router-dom";

function User_Routes() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center">User_React</h1>

     <div className="flex flex-col items-center mt-10 space-y-5">

  <Link
    to="/user/om"
    className="w-72 text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 
               text-white font-semibold tracking-wide shadow-md
               hover:shadow-xl hover:scale-105 hover:from-indigo-600 hover:to-blue-500
               transition-all duration-300 ease-in-out"
  >
    Om Jaiswal
  </Link>

  <Link
    to="/user/harsh"
    className="w-72 text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 
               text-white font-semibold tracking-wide shadow-md
               hover:shadow-xl hover:scale-105 hover:from-teal-600 hover:to-emerald-500
               transition-all duration-300 ease-in-out"
  >
    Harsh Hai
  </Link>

  <Link
    to="/user/yashu"
    className="w-72 text-center py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 
               text-white font-semibold tracking-wide shadow-md
               hover:shadow-xl hover:scale-105 hover:from-pink-600 hover:to-purple-500
               transition-all duration-300 ease-in-out"
  >
    Yashu Jaiswal
  </Link>

  <Link
    to="/user/abhay"
    className="w-72 text-center py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 
               text-white font-semibold tracking-wide shadow-md
               hover:shadow-xl hover:scale-105 hover:from-red-600 hover:to-orange-500
               transition-all duration-300 ease-in-out"
  >
    Abhay Jaiswal
  </Link>

</div>

    </div>
  );
}

export default User_Routes;
