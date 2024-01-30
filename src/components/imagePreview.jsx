import { useRef } from "react";
import { toPng } from "html-to-image";
import styled from "styled-components";

const ImagePreview = ({ fileName, imgFilter }) => {
  const elementRef = useRef(null);

  const onButtonClick = () => {
    console.log(fileName);
    toPng(elementRef.current, { cacheBust: false })
      .then((data) => {
        const link = document.createElement("a");
        link.download = "image.png";
        link.href = data;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Figure ref={elementRef} className={imgFilter} style={{  }}>
        <img style={{ width: "100%" }} src={fileName} />
        <Button onClick={onButtonClick}>{imgFilter}</Button>
      </Figure>
    </>
  );
};

export default ImagePreview;

// Styled components to apply CSS

const Figure = styled.figure`
    max-width: 350px;
    max-height:350px;
    overflow: hidden;
    position: relative;
`
const Button = styled.button`
  position: absolute;
  bottom: 1em;
  right: 0;
  padding: 0.25em 1em 0.25em 0.25em;
  background: #000;
  color: #fff;
`;
