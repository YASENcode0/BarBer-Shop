import React from "react";
import video from '../assets/6549275-uhd_3840_2160_25fps.mp4'

export default function Main() {
  return (
    <div className="Main">
      <div className="clip1">
        <h1>Hello World</h1>
        <h1>Hello Hi World</h1>
        <h6>It is eader will be distracted by the</h6>
        <h6>
          It is a long established fact that a reader will be distracted by the
        </h6>
        <div className="Btns-Main">
          <button className="Main-Btn-1">0</button>
          <button className="Main-Btn-2">0</button>
        </div>
      </div>
      <div className="clip2">
        <video className="clip2-video" width="380" height="215" muted controls poster="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1713033642~exp=1713037242~hmac=842e28169ad123926f8b20c8ac3334d1c9a18b6dd44160553eef405037e33472&w=826">
      <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
