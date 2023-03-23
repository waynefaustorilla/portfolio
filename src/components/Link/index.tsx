import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode,
  href: string
}

const Link: FunctionComponent<Props> = ({ href, className, children }) => {
  const handleScrollIntoView = (event: React.MouseEvent): void => {
    event.preventDefault();

    const target = document.querySelector(href);

    target && target.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  };

  return (
    <a className={className} href={href} onClick={handleScrollIntoView}>{children}</a>
  );
};

export default Link;