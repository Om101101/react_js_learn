import { useState } from "react";
import Card from "./Componets/Card";
import "./index.css";


function App() {
  const data = [
    {
      name: "Om Jaiswal",
      profession: "Frontend-Dev",
      image:
        "https://i.pinimg.com/736x/2a/cf/9a/2acf9a571bfc454d37877e2c5a136bda.jpg",
      friends: false,
    },
    {
      name: "Himashu Dixit ",
      profession: "BackedEnd-Dev",
      image:
        "https://i.pinimg.com/1200x/8f/e7/ad/8fe7ad7585f7d6f0465cb3d744e4761d.jpg",
      friends: false,
    },
    {
      name: "Vivek Sharma",
      profession: "Thalua",
      image:
        "https://i.pinimg.com/736x/f1/3d/0b/f13d0b98fb8e7c91b604cc7495ae857c.jpg",
      friends: false,
    },
    {
      name: "Aman Verma",
      profession: "Frontend Developer",
      image:
        "https://i.pinimg.com/474x/b1/5f/5c/b15f5ccf05d3f328267cf34064bd7699.jpg",
      friends: false,
    },
    {
      name: "Rahul Singh",
      profession: "UI/UX Designer",
      image:
        "https://i.pinimg.com/736x/b9/df/17/b9df17513794e4de87e3c1c89f0e9e44.jpg",
      friends: false,
    },
    {
      name: "Priya Mishra",
      profession: "Backend Developer",
      image:
        "https://i.pinimg.com/736x/c4/ee/1e/c4ee1e8a63ad02db5faf5827d4fcc083.jpg",
      friends: false,
    },
    {
      name: "Ankit Tiwari",
      profession: "Full Stack Developer",
      image:
        "https://i.pinimg.com/736x/ff/a9/d7/ffa9d7bbf64e91260778fe572018637a.jpg",
      friends: false,
    },
    {
      name: "Sneha Kapoor",
      profession: "Graphic Designer",
      image:
        "https://i.pinimg.com/1200x/d4/e1/fb/d4e1fb5179f39df14bf780d65ac75fd2.jpg",
      friends: false,
    },
  ];

  const [realdata, setRealData] = useState(data);
  const handleFriendsButton = (cardindex) => {
    setRealData((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      {/* <Card text="Know More " color="bg-blue-600" />
      <Card text="Download " color="bg-red-600" /> */}

      <div className="w-full min-h-screen bg-zinc-600 flex flex-wrap gap-6 items-center justify-center p-6">
        {realdata.map((item, index) => (
          // <Card
          //   image={item.image}
          //   name={item.name}
          //   profession={item.profession}
          // />
          <Card key={index} index={index}  handleClick={handleFriendsButton} values={item} />
        ))}
      </div>
    </>
  );
}

export default App;
