import photo from "@/assets/img/wayne.jpg";
import Image from "next/image";
import React from "react";

const MaskedPhoto: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div className={"image-container rounded-all"}>
        <Image src={photo} alt={photo.src} fill={false} placeholder={"blur"} height={800} width={800} />
      </div>
    </React.Fragment>
  );
};

export default MaskedPhoto;