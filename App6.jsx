import axios from "axios";

function App6() {
  const getproduct = () => {
    const api = "https://fakestoreapi.com/products/1";
    axios
      .get(api)
      .then((products) => {
        console.log(products.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={getproduct}
          className="px-6 py-3 bg-pink-300 font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          Get Product
        </button>
      </div>
      <div className="mt-2 text-center">
        <p className="text-lg font-medium bg-zinc-700 text-gray-700">
          Product Details Will Appear Here
        </p>
      </div>
    </>
  );
}

export default App6;
