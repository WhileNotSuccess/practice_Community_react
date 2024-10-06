/* SearchResult.js */
import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/SearchResult.css";
import "../components/Nav";
import axios from "axios";

const SearchResult = () => {
  const location = useLocation();
  const { searchInput } = location.state || {};
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/list").then((response) => {
      setData(response.data);
    });
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div>
      <h1>검색 결과</h1>
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResult;
