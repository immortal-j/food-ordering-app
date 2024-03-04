import { useState } from "react";
import { data } from "../utils/constants";
import ResCard from "./ResCard";
const Body = () => {
  const [filteredList, setFilteredList] = useState(data);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        onClick={() => {
          let above4Cards = filteredList.filter((item) => item.avgRating > 4.4);
          console.log(above4Cards);
          setFilteredList(above4Cards);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {filteredList.map((item) => {
          return <ResCard key={item?.id} cardData={item}></ResCard>;
        })}
      </div>
    </div>
  );
};
export default Body;
