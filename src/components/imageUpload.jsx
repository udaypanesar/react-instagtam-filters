import { useState } from "react";
import styled from "styled-components";
import ImagePreview from "./imagePreview";

const ImageUpload = () => {
  const [file, setFile] = useState();

  const imgFilters = ["aden",  "brooklyn", "earlybird", "kelvin", "moon", "nashville", "slumber", "toaster", "walden"];

  const onInputChange = (event) => {
    console.log(event.target.files);
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <Div>
      <h1 style={{textAlign:"center",color:"coral"}}>Image Filter</h1>
      <input type="file" style={{marginLeft:"160px"}} onChange={onInputChange} />
      <Ul>
        {imgFilters.map((imgFilter) => {
          return (
            <>
              <li style={{listStyle:"none"}}>
                <ImagePreview key={imgFilter} fileName={file} imgFilter={imgFilter} />
              </li>
            </>
          );
        })}
      </Ul>
    </Div>
  );
};

export default ImageUpload;

// Styled components to apply CSS
const Div = styled.div`
  max-width:1500px;
  margin:0 auto;
`
const Ul = styled.ul`
  display: flex;
  flex-wrap:wrap;
  justify-content:center
`