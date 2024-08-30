import React, { useMemo, useState } from "react";

const NoRender = () => {
  const [head, setHead] = useState("");
  const [render, setRender] = useState("");

  //   const usemeno = useMemo(function render() {
  //     console.log("component render");
  //   });

  const usememo = useMemo(
    function usemeno() {
      console.log("componetnt rendering");
    },

    [render]
  );

  return (
    <div>
      <h1>Reduce unnecessary render udsing {head}</h1>
      <br /> <br />
      <h2>Render State{render}</h2>
      {usememo}
      Head
      <input
        type="text"
        value={head}
        onChange={(e) => setHead(e.target.value)}
      />
      <br /> <br />
      Render{" "}
      <input
        type="text"
        value={render}
        onChange={(e) => setRender(e.target.value)}
      />
    </div>
  );
};

export default NoRender;
