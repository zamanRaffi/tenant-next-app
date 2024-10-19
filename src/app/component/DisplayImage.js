import React from 'react';

const DisplayImages = ({ images, w = 20, h = 20, mr = 0, mb = 2.5 }) => {
  // console.log('Images in DisplayImages:', images); // Debugging statement

  return (
    <div className="flex flex-row flex-wrap ml-5 mr-5">
      {images.map((image, index) => (
        <div key={index} style={{ width: `${w}rem`, height: `${h}rem`, marginRight: `${mr}rem`, marginBottom: `${mb}rem` }}>
          <img
            src={image.preview}
            alt={`uploaded-${index}`}
            className="object-cover rounded-lg"
            style={{ width: `${w}rem`, height: `${h}rem` }}
          />
        </div>
      ))}
    </div>
  );
};


export default DisplayImages;
