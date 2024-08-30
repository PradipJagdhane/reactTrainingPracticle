import { useState, useEffect } from "react";
import useCounter from "./counuter";



function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function TitleUpdater() {
  const [title, setTitle] = useState("Default Title");
  const {count, incre, decre} = useCounter();

  useDocumentTitle(title);

  return (
    <div>
      <h2>{count}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter document title"
      />
      <p>Current title: {title}</p>
      <button onClick={incre}> incemennt</button>
      <button onClick={decre}> incemennt</button>
    </div>
  );
}

export default TitleUpdater;
