import { IconName } from "@fortawesome/fontawesome-svg-core";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type SocialLinkProps = {
  icon: IconName;
};

const SocialLink: React.FunctionComponent<SocialLinkProps> = (props): React.JSX.Element => {
  return (
    <>
      <FontAwesomeIcon size={"xl"} icon={solid(props.icon)} />
    </>
  );
};

export default SocialLink;