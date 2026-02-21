import React from "react";
import Card_form from "./Card_form";

function Cards_Form({ users, handleRemove }) {
  return (
    <div
      className="w-full max-h-[450px] overflow-y-auto 
                flex flex-wrap justify-center gap-6 
                p-6 bg-gradient-to-br from-zinc-100 to-zinc-200 
                rounded-2xl shadow-inner 
                scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
    >
      {users.map((item, index) => {
        return (
          <Card_form
            key={index}
            user={item}
            handleRemove={() => handleRemove(index)}
          />
        );
      })}
    </div>
  );
}

export default Cards_Form;
