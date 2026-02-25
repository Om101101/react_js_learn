import React from "react";

function TestTailwind() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Tailwind Working ✅
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          Agar ye colors, shadow aur gradient dikh raha hai, to Tailwind CSS
          sahi se work kar raha hai.
        </p>

        <button className="px-6 py-3 bg-green-500 text-blue-400  font-bold rounded-xl hover:bg-green-700 transition duration-300">
          Hover Me
        </button>
      </div>
    </div>
  );
}

export default TestTailwind;
