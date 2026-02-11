//  Profile Crd
// import React from "react";
// function Card() {
//   const data = [
//     {
//       image:
//         "https://i.pinimg.com/736x/89/be/04/89be042f996a9b0dd7f92eefbc1e2343.jpg",
//       name: "Om Jaiswal",
//       description: "Om JAISWAL is good boy ",
//       LearnMore: true,
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/83/ae/fb/83aefb6b7255907fe5933cb71f3dac7f.jpg",
//       name: "Yashu",
//       description: "Yashu  Jaiswal is good boy ",
//       LearnMore: false,
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/cf/0c/16/cf0c162dc624ab4ae8cae4c4e939683d.jpg",
//       name: "Himashu",
//       description: "Himashu  Jaiswal is good boy ",
//       LearnMore: true,
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/cf/0c/16/cf0c162dc624ab4ae8cae4c4e939683d.jpg",
//       name: "Vivek ",
//       description: "Abhay   Jaiswal is good boy ",
//       LearnMore: false,
//     },
//   ];
//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-zinc-200 gap-10">
//       {data.map((elem, index) => (
//         <div
//           key={index}
//           className="w-72 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//         >
//           {/* Image */}
//           <div className="w-full h-36">
//             <img
//               className="w-full h-full object-cover"
//               src={elem.image}
//               alt="card"
//             />
//           </div>

//           {/* Content */}
//           <div className="px-4 py-4">
//             <h2 className="text-lg font-semibold text-zinc-800">{elem.name}</h2>

//             <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
//               {elem.description}
//             </p>

//             {/* Button */}
//             <button
//               className={`mt-4 w-full ${ elem.LearnMore ? ' bg-blue-300  hover:bg-blue-500 ': 'bg-red-300 hover:bg-red-500'} text-white py-2 rounded-lg text-sm font-mediumtransition`}
//             >
//               {elem.LearnMore ? "Online" : "Offline"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;

//  Music Crd using Handling Events
/* import React from "react";

function Card() {
  const data = [
    {
      name: "Raatan Lambiyan",
      description: "Feel the emotions in every beat and lyric.",
      ActionRow: "🎧 Listen in HD",
    },
    {
      name: "Ishq Di Baarish",
      description: "A melody that stays in your heart forever",
      ActionRow: "🔥 Trending Today",
    },
    {
      name: "Dil Tu Jaan Tu",
      description: "Soft, slow, and deeply emotional vibes.",
      ActionRow: "🌙 Night Mood",
    },
    {
      name: "Safar Tera Mera",
      description: "A journey of love, memories, and feelings.",
      ActionRow: "",
    },
    {
      name: "Khamoshiyaan",
      description: "Perfect song for headphones and peaceful moments.",
      ActionRow: "❤️ Add to Favorites",
    },
  ];
  const dlw=()=>{alert(' ⬇ Download after add')}
  return (
  <div className="w-full min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                flex items-center justify-center px-6">
  
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
    {data.map((item, index) => (
      <div
        key={index}
        className="song group w-[300px] sm:w-[320px] p-5 rounded-2xl
                   bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl
                   transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      >
        
        <h3 className="font-bold text-2xl text-white group-hover:text-yellow-300 transition-colors duration-300">
          🎵 {item.name}
        </h3>

       
        <p className="text-sm mt-3 text-white/80 leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xs text-white/70">
            {item.ActionRow}
          </span>

          <button onClick={dlw}
            className="px-4 py-2 text-sm font-semibold rounded-full text-white
                       bg-gradient-to-r from-green-400 to-emerald-600
                       hover:from-emerald-500 hover:to-green-600
                       active:scale-95 transition-all duration-300 shadow-lg"
          >
            ⬇ Download
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Card;

 */
/* //  Using the Sate managemnt - UseState()
import React, { useState } from 'react'

function Card() {
  // const ans= useState('om ');
  // console.log(ans[0])
  // ans[0]= vale 
  // ans[1]= function
  // const [score ,setScore]=useState(1110);
  const [banned, SetBanned]=useState(false);

  return (
    // <div>{score} </div>
    <>
    <div className='p-4'>
      <h1>{score} </h1>
      <button onClick={()=>setScore(200)} className='px-2 py-1 bg-blue-400 mt-2 rounded-full text-xs text-white'>Get Score </button>
    </div>
    <div className='p-4'>
      <h1> {banned.toString()} </h1>
      <button onClick={()=>SetBanned(!banned)} className='px-5 py-3 mt-2 rounded-full bg-gray-700 text-white'> Click me  </button>
    </div>
    
    </>
  )
}

export default Card */
/* 
import React, { useState } from 'react'

function Card() {
  const [val ,setVal] = useState(12)
  return (
    <div className='p-4'>
     <h1>{val}</h1>
     <button onClick={()=> setVal((prev)=> prev+1)} className='px-3 py-1 bg-green-400 text-white rounded-md'>Click me </button>
      </div>
  )
}

export default Card */

/* import React, { useState } from "react";

function Card() {
  const [val, setVal] = useState({ name: "Om Jaiswal ", isBanned: false });
  return (
    <div className="p-4">
      <h1> Name: {val.name}</h1>
      <h2>Banned:{val.isBanned.toString()}</h2>
      <button onClick={()=>setVal({...val, isBanned:!val.isBanned}) } className={`px-3 py-1 ${val.isBanned ? " bg-green-400" : " bg-red-400"} text-white rounded-full`}>Click me </button>
    </div>
  );
}

export default Card; */
/* import React, { useState } from 'react'

function Card() {
const [val,setVal]= useState({name: "Harsh", age:24});
  return (
    <div className='px-4 py-5'>
     
      <button  className='px-4 py-2 bg-green-400 text-white rounded-full' onClick={()=>{
         setVal({...val, gender:"male"});


      }}>Click me</button>
    </div>
  )
}

export default Card */
/* This code snippet is a React component named `Card` that demonstrates the use of the `useState` hook
in React. */
/* import React, { useState } from "react";

function Card() {
  const [val, setVal] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  return (
    <div className="py-5 px-8">
      {val.map((item) => (
        <h1>{item} </h1>
      ))}
      <button
        onClick={() =>
          setVal(() => {
            return val.filter((item, index) => index != val.length - 1);
          })
        }
        className="px-4 py-2 bg-green-300  text-white rounded-full"
      >
       
      </button>
    </div>
  );
}

export default Card; */
/* import React from 'react'

function Card() {
  return (
    <div>Card</div>
  )
}

export default Card */

