// Section 10 Form Handling
// import React, {  useState } from "react";



import Demo_Form from "./src/Componets/Demo_Form_1";
import { useForm } from "react-hook-form";

function App3() {
  //Using Ref to get data from form
  /*  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value, email.current.value);
  }; */



// Form Handling Controlled Components 
/* const [val,setVal]= useState({name:""});
const handleSubmit =(eve)=>{
  eve.preventDefault() */



// Form Handling React Hook 

const{register,handleSubmit} =useForm();




  return (
    <>
      <div className="p-4">
        {/* Using Ref to get data from the input tag  */}
        {/*  <form action="" onSubmit={handleSubmit}>
          <input ref={name} type="text" placeholder="name" name="" id="" />
          <input ref={age} type="text" placeholder="age" name="" id="" />
          <input ref={email} type="email" placeholder="email" name="" id="" />

          <input type="submit" />
        </form> */}

        {/* Form Handling Controlled Components  */}
{/* <form action="" onSubmit={handleSubmit}>
  <input onChange={(eve)=>setVal({name: eve.target.value})} type="text" placeholder="Name" name="" id="" />
  <input type="submit" />
</form> */}

{/* Form Handling React Hook  */}
{/* npm install react-hook-form */}

<form action=""onSubmit={handleSubmit(data=> console.log(data))}>
  <input {...register('name')} type="text" placeholder="name" />
  <input {...register('email')} type="email" placeholder="Enter your Email " />
<input type="submit" />

</form>

      </div>
    </>
  );
}

export default App3;
