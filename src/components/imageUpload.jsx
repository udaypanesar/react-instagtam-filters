import { useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState();

  const onInputChange = (event) => {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <input type="file" name="uImage" onChange={onInputChange} />
      <img src={file} />
    </>
  );
};

export default ImageUpload;
