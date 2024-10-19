import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onFilesChange , ml=0, mb=0, w=20, h=20}) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const updatedFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      );
      setFiles(updatedFiles);
      onFilesChange(updatedFiles); // Pass updated files to parent component
    }
  });

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-600 rounded-lg p-8 cursor-pointer flex items-center justify-center" 
        style={{ marginLeft: `${ml}rem`,
        marginBottom:`${mb}rem`,
        width: `${w}rem`,
        height: `${h}rem`}}
      >
        <input {...getInputProps()} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  className="w-12 h-12" fill='#d9d9d9'><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
      </div>
    </div>
  );
};

export default ImageUpload;





