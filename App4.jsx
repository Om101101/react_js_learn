import React, { useState } from "react";
import Form_Exercise from "./src/Componets/Form_Exercise";
import Cards_Form from "./src/Componets/Cards_Form";
function App4() {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };
  const handleRemove = (id) => {
    const filterData = users.filter((item, index) => index !== id);
    setUsers(filterData);
  };
  return (
    <div
      className="w-full min-h-screen 
                bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 
                flex items-center justify-center p-6"
    >
      <div className="w-full px-10 ">
        <Cards_Form handleRemove={handleRemove} users={users} />
        <Form_Exercise handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App4;
