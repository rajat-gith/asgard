import React, { useEffect, useState } from "react";
import PageDescription from "../components/PageDescription";

function GeographyScreen() {
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/geography/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDesc(data);
      });
  }, []);

  return (
    <div className="GeographyScreen">
      <div className="title">
        <p>Geography Page</p>
      </div>

      <div className="img_banner">
        <img src="http://localhost:8000/images/geo.jpg" alt="" />
      </div>
      {desc && <PageDescription descriptions={desc} />}
    </div>
  );
}

export default GeographyScreen;
