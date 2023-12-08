import photo from "@/assets/img/wayne.jpg";
import Image from "next/image";
import React from "react";

const MaskedPhoto: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <div className={"rounded-full shadow"}>
        <Image src={photo} alt={photo.src} quality={75} placeholder={"blur"} fill={false} height={800} width={800} style={{ borderRadius: "10000px" }} />
      </div>
    </React.Fragment>
  );
};

export default MaskedPhoto;