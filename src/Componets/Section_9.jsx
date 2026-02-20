import React from "react";

function Section_9({ data, handelClick }) {
  const { image, artist, added, name } = data;
  return (
    <div className="w-60 bg-zinc-500 p-4 rounded-md flex gap-4 pb-10 relative mt-10">
      <div className="w-20 h-20 rounded-md bg-orange-500  overflow-hidden">
        <img className="w-full h-full object-cover  " src="{image}" alt="" />
      </div>
      <div>
        <h3 className="text-xl leading-none font-semibold">{name} </h3>
        <h6 className="text-sm ">{artist} </h6>
      </div>
      <button
        onClick={handelClick}
        className={`px-4 py-3 whitespace-nowrap ${added === false ? " bg-orange-600 " : "bg-green-700"} absolute text-white text-sm rounded-full bottom-0  left-1/2 -translate-x-[50%]  translate-y-[50%]`}
      >
        {added === false ? "Add To Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Section_9;
