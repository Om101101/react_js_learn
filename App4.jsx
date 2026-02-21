import React from "react";
import Form_Exercise from "./src/Componets/Form_Exercise";
import Cards_Form from "./src/Componets/Cards_Form";
function App4() {
  return (
    <>
      <div className="w-full h-screen bg-pink-400 flex items-center justify-center">
        <div className="container mx-auto ">
            <Cards_Form/>
            <Form_Exercise/>
        </div>
      </div>
    </>
  );
}

export default App4;
