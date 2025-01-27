import React from "react";
import pp from "/friend-images/friend1.jpg";

const SharePost = () => {
  return (
    <div className="sticky top-0 flex w-full flex-col gap-5 rounded-bl-3xl rounded-br-3xl bg-white/60 backdrop-blur-md">
      <div className="flex gap-5">
        <img
          src={pp}
          alt="pic"
          className="w-20 h-18 cursor-pointer rounded-full border-2 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
        />
        <textarea
          placeholder="What's on your mind?"
          className="w-full resize-none rounded-2xl border p-3 shadow-md outline-none ring-transparent transition-all duration-200 hover:bg-gray-50 focus:-translate-y-1 focus:bg-gray-100 focus:shadow-xl focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
    </div>
  );
};

export default SharePost;
