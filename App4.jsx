import React, { useState } from "react";
import Form_Exercise from "./src/Componets/Form_Exercise";
import Cards_Form from "./src/Componets/Cards_Form";
function App4() {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };
  const handleRemove=(id)=>{
    const filterData = users.filter((item, index) => index !== id);
    setUsers(filterData);
  }
  return (
    <div className="w-full h-screen bg-red-300  flex items-center justify-center">
      <div className="w-full px-10 ">
        <Cards_Form handleRemove={handleRemove} users={users} />
        <Form_Exercise handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App4;
