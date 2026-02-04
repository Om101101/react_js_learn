import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://i.pinimg.com/736x/89/be/04/89be042f996a9b0dd7f92eefbc1e2343.jpg",
      name: "Om Jaiswal",
      description: "Om JAISWAL is good boy ",
    },
    {
      image:
        "https://i.pinimg.com/736x/83/ae/fb/83aefb6b7255907fe5933cb71f3dac7f.jpg",
      name: "Yashu",
      description: "Yashu  Jaiswal is good boy ",
    },
    {
      image:
        "https://i.pinimg.com/736x/cf/0c/16/cf0c162dc624ab4ae8cae4c4e939683d.jpg",
      name: "Himashu",
      description: "Himashu  Jaiswal is good boy ",
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-200 gap-10">
      {data.map((elem, index) => (
        <div key ={index} className="w-72 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          {/* Image */}
          <div className="w-full h-36">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt="card"
            />
          </div>

          {/* Content */}
          <div className="px-4 py-4">
            <h2 className="text-lg font-semibold text-zinc-800">
             {elem.name}
            </h2>

            <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
              {elem.description}
            </p>

            {/* Button */}
            <button className="mt-4 w-full bg-blue-300 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
