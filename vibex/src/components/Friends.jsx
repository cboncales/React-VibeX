import React from "react";
import friend1 from "/friend-images/friend1.jpg";
import friend2 from "/friend-images/friend2.jpg";
import friend3 from "/friend-images/friend3.jpg";
import friend4 from "/friend-images/friend4.jpg";
import friend5 from "/friend-images/friend5.jpg";
import friend6 from "/friend-images/friend6.jpg";
import friend7 from "/friend-images/friend7.jpg";

const Friends = ({ darkMode }) => {
  const friendsList = [
    { img: friend1, name: "Jhon Leovil" },
    { img: friend2, name: "Roy" },
    { img: friend3, name: "Stanley" },
    { img: friend4, name: "Greg" },
    { img: friend5, name: "Steven" },
    { img: friend6, name: "Emmanuel" },
    { img: friend7, name: "Ken" },
  ];

  return (
    <div className="sticky hidden xl:flex items-start justify-start flex-1">
      <div
        className={`sticky top-10 flex flex-col w-full gap-5 rounded-3xl border  p-5 text-center md:w-5/6 ${darkMode ? "border-gray-700 bg-black text-white" : "border-gray-300 bg-white"}`}
      >
        <h3 className="text-4xl font-semibold">Friends</h3>
        <ul className="flex w-full flex-col gap-5">
          {friendsList.map((friend, index) => (
            <li
              key={index}
              className={`flex cursor-pointer flex-wrap items-center justify-between gap-5 rounded-3xl bg-gray-100 p-3 transition-all duration-300  ${darkMode ? "bg-gray-900 hover:bg-gray-800" : "hover:bg-gray-200"}`}
            >
              <div className="flex items-center gap-5">
                <img
                  src={friend.img}
                  className="w-14 h-15 rounded-full md:w-16"
                  alt="friend pic"
                />
                <span className="text-lg font-semibold">{friend.name}</span>
              </div>
              <button className="rounded-3xl bg-blue-500 p-2 text-white transition-all duration-300 hover:bg-blue-400">
                Message
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
