import React from "react";
import { Link } from "react-router-dom";

function User_Routes() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center">User_React</h1>

      <div className="flex flex-col space-y-4 mt-6">
        <Link to="/user/om">Om Jaiswal</Link>
        <Link to="/user/harsh">Harsh Hai</Link>
        <Link to="/user/yashu">Yashu Jaiswal</Link>
        <Link to="/user/abhay">Abhay Jaiswal</Link>
      </div>
    </div>
  );
}

export default User_Routes;
