import React, { useRef } from "react";
import { User } from "lucide-react";

const AvatarUploader = ({ image, onChange }) => {
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onChange) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          onChange(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="cursor-pointer w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
    >
      {image ? (
        <img src={image} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <User className="w-4 h-4 text-white" />
      )}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default AvatarUploader;
