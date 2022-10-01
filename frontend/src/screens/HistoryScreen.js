import React, { useEffect, useState } from "react";
import PageDescription from "../components/PageDescription";

function HistoryScreen() {
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/history/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDesc(data);
      });
  }, []);

  return (
    <div className="HistoryScreen">
      <div className="title">
        <h2>History Page</h2>
      </div>
      <div className="img_banner">
        <img src="http://localhost:8000/images/history.jpg" alt="" />
      </div>
      {desc && <PageDescription descriptions={desc} />}
    </div>
  );
}

export default HistoryScreen;
