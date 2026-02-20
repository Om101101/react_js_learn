import React from "react";
import Section_9 from "./Componets/Section_9";
import Navbar1 from "./Componets/Navbar1";
import "./index.css";

function App2() {
  const data = [
    {
      image:
        "https://i.pinimg.com/736x/7e/1c/82/7e1c823cdd06451a462d35415508379b.jpg",
      name: "Blinding Lights",
      artist: "The Weeknd",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/ab/4f/66/ab4f66d4a7a4c9b5d5b2e3a6f7e8a123.jpg",
      name: "Shape of You",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/21/5f/11/215f118bbf8fcb9e82fa3d9b2a1f4c55.jpg",
      name: "Levitating",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/91/af/22/91af2293b4e5b76c8f9a8c5d7f3a9c21.jpg",
      name: "Believer",
      artist: "Imagine Dragons",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/32/ab/78/32ab78c3d5f6e9a2b1c4d7e8f9a6b3c2.jpg",
      name: "Senorita",
      artist: "Shawn Mendes",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/54/cc/11/54cc1122aa33bb44cc55dd66ee77ff88.jpg",
      name: "Perfect",
      artist: "Ed Sheeran",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/67/dd/44/67dd4455aa9988776655443322110099.jpg",
      name: "Peaches",
      artist: "Justin Bieber",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/88/aa/99/88aa9900bb1122334455667788990011.jpg",
      name: "Stay",
      artist: "The Kid LAROI",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/12/34/56/123456abcdefabcdef123456abcdef.jpg",
      name: "Closer",
      artist: "The Chainsmokers",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/aa/bb/cc/aabbccddeeff00112233445566778899.jpg",
      name: "Faded",
      artist: "Alan Walker",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/11/22/33/11223344556677889900aabbccddeeff.jpg",
      name: "Heat Waves",
      artist: "Glass Animals",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/ff/ee/dd/ffeeddccbbaa99887766554433221100.jpg",
      name: "Havana",
      artist: "Camila Cabello",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/aa/11/bb/aa11bb22cc33dd44ee55ff6677889900.jpg",
      name: "Bad Guy",
      artist: "Billie Eilish",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/99/88/77/99887766554433221100ffeeddccbbaa.jpg",
      name: "Counting Stars",
      artist: "OneRepublic",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/44/55/66/44556677889900aabbccddeeff112233.jpg",
      name: "Girls Like You",
      artist: "Maroon 5",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/cc/bb/aa/ccbbaa99887766554433221100ffeedd.jpg",
      name: "Rockstar",
      artist: "Post Malone",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/77/66/55/7766554433221100ffeeddccbbaa9988.jpg",
      name: "Thunder",
      artist: "Imagine Dragons",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/aa/cc/dd/aaccdd11223344556677889900bbffee.jpg",
      name: "Love Me Like You Do",
      artist: "Ellie Goulding",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/bb/aa/cc/bbaacc11223344556677889900ddeeff.jpg",
      name: "Memories",
      artist: "Maroon 5",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/00/11/22/00112233445566778899aabbccddeeff.jpg",
      name: "On My Way",
      artist: "Alan Walker",
      added: false,
    },
  ];

  return (
    <>
      <div className="w-fulll h-screen bg-zinc-300 ">
        <Navbar1 />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          <Section_9 />
        </div>
      </div>
    </>
  );
}

export default App2;
