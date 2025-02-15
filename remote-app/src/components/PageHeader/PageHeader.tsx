import React from "react";

type Props = {
  title: string;
};

const PageHeader: React.FC<Props> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default PageHeader;
