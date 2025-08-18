// import React, { forwardRef } from "react";

// const AvatarUploader = forwardRef(({ onChange }, ref) => {
//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0];
//     if (file && onChange) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const result = reader.result;
//         if (typeof result === "string") {
//           onChange(result);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <input
//       type="file"
//       accept="image/*"
//       ref={ref}
//       hidden
//       onChange={handleImageChange}
//     />
//   );
// });

// export default AvatarUploader;
// src/components/AvatarUploader.jsx
import React, { forwardRef } from "react";

const AvatarUploader = forwardRef(({ onChange }, ref) => {
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !onChange) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") onChange(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <input
      type="file"
      accept="image/*"
      ref={ref}
      hidden
      onChange={handleImageChange}
    />
  );
});

export default AvatarUploader;
