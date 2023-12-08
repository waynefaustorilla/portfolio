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
    <Link href={props.link} target={"_blank"}>
      <button type="button" className={"border border-black p-4 active:scale-90 rounded-full hover:scale-125 ease-in-out transition-all hover:shadow-lg"}>
        <FontAwesomeIcon size={"xl"} icon={["fab", props.icon]} />
      </button>
    </Link>
  );
};

export default SocialLink;