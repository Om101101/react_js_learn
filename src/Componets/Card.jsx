import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="w-52 bg-blue-200 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden">
      
      <div className=" w-full h-32 bg-pink-300"></div>
      <div className="w-full px-3 py-4"></div>
      <h2 className="font-semibold">Google Basic </h2>
      <p className="text-sm mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis praesentium a et.</p>
      </div>
    </div>
  );
}

export default Card;
