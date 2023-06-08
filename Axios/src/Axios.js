import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

const Axios = () => {
  // empty array in the useState is because we have array in response
  const [data, setData] = useState([]);

  // to hit the api we have to use useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API);
    // we have response but to show it on frontend , we have to use useState .
    setData(response.data);
  };

  return (
    <>
      Axios is working
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
      {console.log(data)}
    </>
  );
};

export default Axios;
