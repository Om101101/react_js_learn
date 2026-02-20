import React from "react";

function Navbar1({ data }) {
  return (
    <div className="w-full px-20 py-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-50">
      
      <h3 className="text-2xl font-bold text-orange-600 tracking-wide">
        Orange Music
      </h3>

      <div className="flex items-center px-5 py-2 text-sm bg-orange-500 text-white rounded-full gap-3 shadow-lg">
        <h3 className="font-medium">Favourites</h3>
        <h4 className="bg-white text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold">
          {data.filter(item => item.added).length}
        </h4>
      </div>

    </div>
  );
}

export default Navbar1;