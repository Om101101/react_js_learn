import React from "react";
// import React_JS_ from "./src/Componets/React_JS_Routing";
import { Link, Route, Routes } from "react-router-dom";
import React_JS_Routing from "./src/Componets/React_JS_Routing";
import User_Routes from "./src/Componets/User_Routes";
import About_Routes from "./src/Componets/About_Routes";

//Raect JS Routing_
function App5() {
  return (
    <>
      <nav className="w-full bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 shadow-lg px-8 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold tracking-wide">MyApp</h1>

        <div className="flex gap-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            to="/user"
            className="text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500 transition-all duration-300"
          >
            User
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500 transition-all duration-300"
          >
            About
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<React_JS_Routing />} />
        <Route path="/user" element={<User_Routes />} />
        <Route path="/about" element={<About_Routes />} />
      </Routes>
    </>
  );
}

export default App5;
