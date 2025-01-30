import React from "react";
import Posts from "./Posts";
import SharePost from "./SharePost";
import image1 from "/post-images/1.jpg";
import image2 from "/post-images/2.jpg";
import image3 from "/post-images/3.jpg";
import image4 from "/post-images/4.jpg";
import image5 from "/post-images/5.jpg";
import image6 from "/post-images/6.jpg";
import image7 from "/post-images/7.jpg";
import image8 from "/post-images/8.jpg";
import friend1 from "/friend-images/friend1.jpg";
import friend2 from "/friend-images/friend2.jpg";
import friend3 from "/friend-images/friend3.jpg";
import friend4 from "/friend-images/friend4.jpg";
import friend5 from "/friend-images/friend5.jpg";
import friend6 from "/friend-images/friend6.jpg";
import friend7 from "/friend-images/friend7.jpg";

const Feed = ({ darkMode }) => {
  return (
    <div className="flex flex-[2] flex-col items-center justify-center gap-3 px-3">
      <SharePost darkMode={darkMode} />
      <Posts image={image6} friend={friend1} name="Jhon Leovil" />
      <Posts image={image2} friend={friend5} name="Steven" />
      <Posts image={image1} friend={friend6} name="Emmanuel" />
      <Posts image={image8} friend={friend2} name="Roy" />
      <Posts image={image3} friend={friend3} name="Stanley" />
      <Posts image={image5} friend={friend7} name="Ken" />
      <Posts image={image4} friend={friend4} name="Greg" />
      <Posts image={image7} friend={friend3} name="Stanley" />
    </div>
  );
};

export default Feed;
