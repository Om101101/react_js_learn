import React from "react";

function Card_form({ user, handleRemove, key }) {
  return (
    <div className="w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-5 flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-md">
        <img
          className="w-full h-full object-cover"
          src={user.image}
          alt="profile"
        />
      </div>

      {/* Name */}
      <h1 className="mt-4 text-xl font-bold text-gray-800">{user.name}</h1>

      {/* Email */}
      <h4 className="text-sm text-gray-500 mt-1 break-all">{user.email}</h4>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        Passionate developer who loves building modern and interactive web
        experiences.
      </p>

      {/* Remove Button */}
      <button
        onClick={() => handleRemove(key)}
        className="mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white text-sm font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        Remove
      </button>
    </div>
  );
}

export default Card_form;
