import { useParams } from "react-router-dom";

function User_details() {
  const { name } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      <div
        className="bg-white/10 backdrop-blur-lg border border-white/20 
                  shadow-2xl rounded-2xl p-10 text-center 
                  hover:scale-105 transition-all duration-300"
      >
        <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
          👤 User Name: <span className="text-blue-400 capitalize">{name}</span>
        </h1>

        <p className="text-lg text-gray-300 mt-2">
          Hello {name} 👋😊 Welcome to your profile!
        </p>
      </div>
    </div>
  );
}

export default User_details;
