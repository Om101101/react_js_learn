import { useParams } from "react-router-dom";

function User_details() {
  const { name } = useParams();

  return (
    <div>
      <h1 className="text-3xl text-center mt-10">
        User Name: {name}
      </h1>
    </div>
  );
}

export default User_details;