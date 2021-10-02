import { useState, useEffect } from "react";
import allDataList from "./data.json";
import "./card.css";

function DataList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    setIsLoaded(true);
    setAllData(allDataList.users);
    setFilteredData(allDataList.users);
  }, []);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    const handleSearch = (event) => {
      let value = event.target.value;
      let result = [];
      console.log(value);
      result = allData.filter((data) => {
        return data.firstName.search(value) != -1;
      });
      setFilteredData(result);
    };
    return (
      /* here we map over the element and display each item as a card  */
      <div className="wrapper">
        <div className="App">
          <div style={{ margin: "0 auto", marginTop: "10%" }}>
            <label>Search:</label>
            <input type="text" onChange={(event) => handleSearch(event)} />
          </div>
        </div>
        <ul className="card-grid">
          {filteredData.map((item) => (
            <li>
              <article className="card" key={item.userId}>
                <div className="card-content">
                  <h2 className="card-name">{item.firstName}</h2>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataList;
