import React from "react";
// import React_JS_ from "./src/Componets/React_JS_Routing";
import { Link, NavLink, Route, Routes } from "react-router-dom";
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
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "Red" : "",
              };
            }}
            to="/"
            className="text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500 transition-all duration-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/user"
            style={({ isActive }) => ({
              color: isActive ? "#2563eb" : "#4b5563",
              fontWeight: isActive ? "600" : "400",
              borderBottom: isActive ? "2px solid #2563eb" : "none",
              paddingBottom: "4px",
              transition: "all 0.3s ease",
            })}
            className="text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500 transition-all duration-300"
          >
            User
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#ffffff" : "#4b5563",
              backgroundColor: isActive ? "#2563eb" : "transparent",
              fontWeight: isActive ? "600" : "500",
              padding: "8px 16px",
              borderRadius: "8px",
              border: isActive ? "1px solid #2563eb" : "1px solid transparent",
              boxShadow: isActive
                ? "0 4px 12px rgba(37, 99, 235, 0.3)"
                : "none",
              transform: isActive ? "scale(1.05)" : "scale(1)",
              transition: "all 0.3s ease",
            })}
            className="text-gray-300 hover:text-white hover:border-b-2 hover:border-blue-500 transition-all duration-300"
          >
            About
          </NavLink>
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
