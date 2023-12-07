import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type SocialLinkProps = {
  icon: IconName;
  link: string;
};

const SocialLink: React.FunctionComponent<SocialLinkProps> = (props): React.JSX.Element => {
  return (
    <Link href={props.link} target="_blank">
      <FontAwesomeIcon size={"xl"} icon={["fab", props.icon]} />
    </Link>
  );
};

export default SocialLink;