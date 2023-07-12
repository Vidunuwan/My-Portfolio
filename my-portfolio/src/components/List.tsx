import { useState } from "react";

function List() {
  const items = ["HRMS", "Taxi", "AutoLk", "Report Genarator", "LMS"];
  const [selectedIndex,setSelectedInex]=useState(-1);
  

  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          onClick={()=>{setSelectedInex(index);}}
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
