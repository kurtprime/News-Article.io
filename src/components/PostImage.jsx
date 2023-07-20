import { useState, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { uploadImage } from "../plugins/uploadImage";

export const PostImage = ({ addImageSuccessful }) => {
  // This code sends an API to a 3rd party library that uploads and serves the image
  // Added a spinner for user-experience and this component returns an image {fileURL}
  // Do not touch any of the code

  const [hover, setHover] = useState(false);
  const imageInput = useRef();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e) => {
    try {
      const { fileUrl } = await uploadImage.uploadFile(e.target.files[0], {
        onProgress,
      });
      imageInput.current.value = "";
      setImage(fileUrl);
      addImageSuccessful(fileUrl);
    } catch (e) {
      console.warn(`Error: ${e}`);
    }
    setIsLoading(false);
  };
  const onProgress = ({ progress }) => {
    setIsLoading(true);
    console.log(`File uploading: ${progress}% complete.`);
  };

  return (
    <div
      onMouseOver={() => {
        if (image) setHover(true);
      }}
      onMouseOut={() => {
        if (image) setHover(false);
      }}
      className="image-uploader"
      style={{
        backgroundImage: image ? `url(${image})` : "#f8f9fc",
        backgroundSize: "cover",
      }}>
      {isLoading ? <LoadingSpinner /> : ""}

      {!image ? (
        <label
          className="image-button"
          style={{
            display: image ? "none" : "block",
          }}>
          <input
            type="file"
            name="image_upload"
            onChange={handleImageUpload}
            ref={imageInput}
          />
          + Add Image
        </label>
      ) : (
        <label className="image-button whitespace-nowrap transition-all hover:opacity-90 opacity-0">
          <input
            type="file"
            name="image_upload"
            onChange={handleImageUpload}
            ref={imageInput}
          />
          + Add new Image
        </label>
      )}
    </div>
  );
};
