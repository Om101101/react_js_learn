import React from "react";
import { useForm } from "react-hook-form";

function Form_Exercise({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handeFromSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };
  return (
    <div className="mt-16 flex justify-center">
      <form
        onSubmit={handleSubmit(handeFromSubmit)}
        className="bg-white shadow-xl rounded-2xl p-8 w-[500px] space-y-5 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Add New User
        </h2>

        {/* Name Input */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter full name"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter email address"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />
        </div>

        {/* Image URL */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Image URL
          </label>
          <input
            {...register("image")}
            type="text"
            placeholder="Paste image URL"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default Form_Exercise;
