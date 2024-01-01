import React, { useRef, useState } from "react";
import downloadIcon from "../icons/DownloadImg.svg";
import clip from "../icons/clip.svg";
import { toast } from "react-toastify";

const ImageUploader = ({ image, setImage }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current != null) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (file) => {
    if (file) {
      if (file.type === "image/jpeg" && file.size <= 10 * 1024 * 1024) {
        const reader = new FileReader();

        reader.onload = () => {
          setImage(reader.result);
        };

        reader.readAsDataURL(file);
      } else {
        toast.error("File must be a JPG image and should not exceed 10 MB");
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();

    handleFile(e.dataTransfer.files[0]);
  };

  const handleFileInput = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="border border-dashed border-[#ABA7AF] rounded mt-1 p-6 flex flex-col justify-center items-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        ref={fileInputRef}
        className="hidden"
      />

      <img
        src={downloadIcon}
        alt="download"
        className="h-[36px] w-[40px]"
        onClick={handleButtonClick}
        role="button"
      />

      <p className="text-textBlack text-xs mt-2">
        Drag here or click the button below to upload{" "}
      </p>

      <p
        role="button"
        aria-label="image upload"
        className="flex py-1 px-3 bg-primary rounded text-white text-sm gap-x-2 my-6"
        onClick={handleButtonClick}
      >
        <img src={clip} alt="download clip" />
        Choose file
      </p>

      {!image && (
        <p className="text-sm text-[#4B3A5A]">
          Maximum upload size: 10MB (.jpg)
        </p>
      )}

          <div className={`${image?"h-24 w-16":""}mt-6`}>
        {image && <img src={image} alt="Uploaded Preview" className="h-20 w-16" />}
      </div>
    </div>
  );
};

export default ImageUploader;
