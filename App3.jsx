// Section 10 Form Handling
import React, { useRef } from "react";
import Demo_Form from "./src/Componets/Demo_Form_1";

function App3() {
  const name = useRef(null)
  const age = useRef(null)
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(name.current.value,age.current.value)
}

  return (
    <>
      <div className="p-4">
        <form action=""onSubmit={handleSubmit}>
        <input  ref={name} type="text" placeholder="name" name="" id="" />
        <input ref={age} type="text" placeholder="age" name="" id="" />
        <input type="submit"  />
      </form>
      </div>
    </>
  );
}

export default App3;
