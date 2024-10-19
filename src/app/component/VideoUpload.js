import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const VideoUpload = ({ onFilesChange, maxSize, ml = 0, mb = 0, w = 20, h = 20 }) => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'video/*',
        onDrop: acceptedFiles => {

            const maxFileSize = maxSize * 1024 * 1024; // Convert MB to bytes
            const validFiles = acceptedFiles.filter(file => file.size <= maxFileSize);
            if (validFiles.length < acceptedFiles.length) {
                alert('Some files were too large and were not uploaded.');
            }

            const newFiles = acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            setFiles(newFiles);
            onFilesChange(newFiles);
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
                className="border-2 border-dashed border-gray-600 rounded-lg p-4 mb-4 cursor-pointer flex items-center justify-center"
                style={{
                    marginLeft: `${ml}rem`,
                    marginBottom: `${mb}rem`,
                    width: `${w}rem`,
                    height: `${h}rem`
                }}
            >
                <input {...getInputProps()} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-12 h-12" fill="#e44320"><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
            </div>
        </div>
    );
};

export default VideoUpload;
