import React from "react";

function Section_9({ data, handleClick, index }) {
  const { image, artist, added, name } = data;
  return (
    <div className="w-60 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-4 rounded-2xl flex gap-4 pb-12 relative mt-10 hover:-translate-y-2">
      <div className="w-20 h-20 rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <h6 className="text-sm text-gray-500">{artist}</h6>
      </div>

      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-2 whitespace-nowrap transition-all duration-300 ${
          added === false
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-green-600 hover:bg-green-700"
        } absolute text-white text-xs font-semibold rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-lg`}
      >
        {added === false ? "Add To Favourites" : "Added"}
      </button>
    </div>
  );
}

export default Section_9;
