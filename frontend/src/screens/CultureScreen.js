import { useState, useEffect } from "react";

import PageDescription from "../components/PageDescription";

import React from "react";

function CultureScreen() {
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    fetch(["http://127.0.0.1:8000/api/culture/"])
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDesc(data);
      });
  }, []);
  return (
    <div className="CultureScreen">
      <div className="img_banner">
        <img src="http://localhost:8000/images/culture.jpg" alt="" />
      </div>
      {desc && <PageDescription descriptions={desc} />}
    </div>
  );
}

export default CultureScreen;
