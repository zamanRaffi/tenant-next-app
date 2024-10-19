import React from 'react';

const DisplayVideos = ({ videos, w = 20, h = 20, mr = 0, mb = 2.5 }) => {
  return (
    <div className="flex flex-row flex-wrap ml-5 mr-5">
      {videos.map((video, index) => (
        <div key={index} className="p-2" style={{ width: `${w}rem`, height: `${h}rem`, marginRight: `${mr}rem`, marginBottom: `${mb}rem` }}>
          <video controls className="object-cover rounded-lg" style={{ width: `${w}rem`, height: `${h}rem` }}>
            <source src={video.preview} type={video.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default DisplayVideos;
