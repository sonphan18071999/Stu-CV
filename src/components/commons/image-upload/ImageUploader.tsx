// ImageUploader.tsx
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { selectUserInformation } from "../../../redux/reducer/userInformationSlice";
import { ImageUploaderProps } from "../../../models/imageUploaderProps";
const defaultAvatar = require("../../../core/assets/images/avatar.png");

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const userInfo = useSelector(selectUserInformation);
  const [imageUrl, setImageUrl] = useState<string>(
    userInfo.avatar || defaultAvatar
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger file input click when image is clicked
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ];
    if (!validImageTypes.includes(file.type)) {
      alert("Please select a valid image file (JPEG, PNG, GIF, WEBP)");
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      alert("File size must be less than 5MB");
      return;
    }

    // Convert the file to a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setImageUrl(dataUrl);
      onImageUpload(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-uploader">
      <img
        onClick={handleImageClick}
        src={imageUrl}
        alt="Your profile picture"
        className="my-2 cursor-pointer hover:opacity-80 transition-opacity"
        width={310}
        height={50}
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png, image/gif, image/webp"
        style={{ display: "none" }}
      />
      <p className="text-xs text-gray-500 mt-1">
        Click on the image to upload a new photo
      </p>
    </div>
  );
};

export default ImageUploader;
