import axios from "axios";
import React from "react";

function App7() {
  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        id: 0,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={getproduct}
        className="px-5 py-2 bg-red-500 text-black rounded-md hover:bg-red-600 transition duration-300"
      >
        Click Me
      </button>
       <button
        onClick={addproduct}
        className="px-5 py-2 bg-red-500 text-black rounded-md hover:bg-red-600 transition duration-300"
      >
        Add product 
      </button>
    </div>
  );
}

export default App7;
