import React from "react";
import pp from "/friend-images/friend1.jpg";

const SharePost = ({ darkMode }) => {
  return (
    <div
      className={`sticky top-0 flex w-full flex-col gap-5 rounded-bl-3xl rounded-br-3xl backdrop-blur-md p-5 border-b border-l border-r  ${darkMode ? "border-gray-700 bg-black/60 text-white" : "bg-white/60 text-black border-gray-300"}`}
    >
      <div className="flex gap-5">
        <img
          src={pp}
          alt="pic"
          className="w-20 h-18 cursor-pointer rounded-full border-2 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
        />
        <textarea
          placeholder="What's on your mind?"
          className={`w-full resize-none rounded-2xl border  p-3 shadow-md outline-none ring-transparent transition-all duration-200  focus:-translate-y-1  focus:shadow-xl focus:ring-2 focus:ring-blue-500 ${darkMode ? "border-gray-700 bg-black/60 focus:bg-gray-900 text-white" : "border-gray-200 bg-white/60 text-black focus:bg-gray-100 hover:bg-gray-50"}`}
        ></textarea>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center justify-start gap-3 ">
          <div className="flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            People
          </div>
          <div className="flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Location
          </div>
          <div className="flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            Mood
          </div>
        </div>
        <button className="rounded-3xl bg-blue-500 px-5 py-2 text-white transition-all duration-200 hover:bg-blue-600 focus:bg-blue-400">
          Share
        </button>
      </div>
    </div>
  );
};

export default SharePost;
