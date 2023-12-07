import React from "react";
import photo from "@/assets/img/wayne.jpg";

const style: React.CSSProperties = {
  width: "80%",
  height: "80%",
  marginTop: "5em",
  backgroundImage: `url(${photo.src})`,
  backgroundPosition: "135% 5%",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  borderRadius: "50%",
  boxShadow: "5px 5px 10px #2d2d2d55"
};

const MaskedPhoto: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <span style={style}></span>
    </React.Fragment>
  );
};

export default MaskedPhoto;