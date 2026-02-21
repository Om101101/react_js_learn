import React from "react";

function Form_Exercise() {
  return (
    <div className="mt-10 flex  gap-10 justify-center ">
      <form className="flex gap-10 " action="">
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name "
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image Url "
        />
        <input
          className="px-5 py-1 rounded-md bg-blue-600 text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form_Exercise;
