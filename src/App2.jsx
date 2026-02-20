import React, { useState } from "react";
import Section_9 from "./Componets/Section_9";
import Navbar1 from "./Componets/Navbar1";
import "./index.css";

function App2() {
  const data = [
    {
      image:
        "https://i.pinimg.com/736x/f6/f1/bb/f6f1bbcb7ed3bb8a5f5ad7dcc601de41.jpg",
      name: "Blinding Lights",
      artist: "The Weeknd",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/84/7c/0d/847c0d211160c6dde17dda0fc9d9f433.jpg",
      name: "Shape of You",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/d9/7e/f0/d97ef049fa398af8cf8855a70b0cb59e.jpg",
      name: "Levitating",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/7b/d0/0b/7bd00b12e4e9c82b1f1ee579ed907a5c.jpg",
      name: "Believer",
      artist: "Imagine Dragons",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/21/33/15/213315e1448925d22666162d21a1ee8a.jpg",
      name: "Senorita",
      artist: "Shawn Mendes",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/f6/f1/bb/f6f1bbcb7ed3bb8a5f5ad7dcc601de41.jpg",
      name: "Blinding Lights",
      artist: "The Weeknd",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/84/7c/0d/847c0d211160c6dde17dda0fc9d9f433.jpg",
      name: "Shape of You",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/d9/7e/f0/d97ef049fa398af8cf8855a70b0cb59e.jpg",
      name: "Levitating",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/7b/d0/0b/7bd00b12e4e9c82b1f1ee579ed907a5c.jpg",
      name: "Believer",
      artist: "Imagine Dragons",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/21/33/15/213315e1448925d22666162d21a1ee8a.jpg",
      name: "Senorita",
      artist: "Shawn Mendes",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/f6/f1/bb/f6f1bbcb7ed3bb8a5f5ad7dcc601de41.jpg",
      name: "Blinding Lights",
      artist: "The Weeknd",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/84/7c/0d/847c0d211160c6dde17dda0fc9d9f433.jpg",
      name: "Shape of You",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/d9/7e/f0/d97ef049fa398af8cf8855a70b0cb59e.jpg",
      name: "Levitating",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/7b/d0/0b/7bd00b12e4e9c82b1f1ee579ed907a5c.jpg",
      name: "Believer",
      artist: "Imagine Dragons",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/21/33/15/213315e1448925d22666162d21a1ee8a.jpg",
      name: "Senorita",
      artist: "Shawn Mendes",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/21/33/15/213315e1448925d22666162d21a1ee8a.jpg",
      name: "Senorita",
      artist: "Shawn Mendes",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  [];

  return (
    <>
      <div className="w-full h-full bg-zinc-300 ">
        <Navbar1 data={songData} />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, index) => (
            <Section_9
              data={obj}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App2;
