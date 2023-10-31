import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

const FileUploader = () => {
  const [fileUrl, setfileUrl] = useState("");
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // setfileUrl(acceptedFiles);
    console.log(acceptedFiles);
    setfileUrl(acceptedFiles[0].path);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      //   className="flex flex-center bg-dark-3  rounded-xl cursor-pointer  "
      className={
        isDragActive
          ? "flex transition-all flex-center bg-dark-4  rounded-xl cursor-pointer "
          : "flex flex-center transition-all bg-dark-3  rounded-xl cursor-pointer "
      }
    >
      <input {...getInputProps()} className="cursor-pointer " />
      {fileUrl ? (
        <div>{fileUrl}</div>
      ) : (
        <div className="file_uploader-box ">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="file-upload"
          />
          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag photo here
          </h3>
          <p className="text-light-4 small-regular mb-6">PNG, JPG</p>
          <Button className="shad-button_dark_4">Select image</Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
