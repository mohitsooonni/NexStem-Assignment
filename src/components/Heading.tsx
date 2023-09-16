import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({
  text,
}) => {
  return (
    <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
      {text}
    </h1>
  );
};

export default Heading;
