import React, { useState } from "react";

function ProfileImageUpload() {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="mb-2 text-xs font-medium text-white-dimmed">
        Upload Profile Picture
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-white-dimmed border-2 border-dark-light rounded-md cursor-pointer bg-dark-light focus:outline-none focus:border-white-dimmed-heavy file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow file:text-dark-light hover:file:bg-white-dimmed"
      />
      {selectedImage && (
        <div className="mt-4">
          <img
            src={selectedImage as string}
            alt="Selected"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ProfileImageUpload;
