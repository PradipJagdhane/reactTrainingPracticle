import React, { useContext } from "react";
import Passrops from "./propsContext";

const GetProps = () => {
  const props = useContext(Passrops);

  return (
    <div>
      <h2>{props}</h2>
    </div>
  );
};

export default GetProps;
