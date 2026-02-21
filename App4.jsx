import React, { useState } from "react";
import Form_Exercise from "./src/Componets/Form_Exercise";
import Cards_Form from "./src/Componets/Cards_Form";
function App4() {
  const [users, setUsers] = useState([]);
  return (
    <div className="w-full h-screen bg-red-300  flex items-center justify-center">
      <div className="w-full px-10 ">
        <Cards_Form users={users} />
        <Form_Exercise />
      </div>
    </div>
  );
}

export default App4;
