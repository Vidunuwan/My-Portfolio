import { useState } from "react";

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function List({ items, title, onSelectItem }: Props) {
  const [selectedIndex, setSelectedInex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
          key={index}
            onClick={() => {
              setSelectedInex(index);
              onSelectItem(item);
            }}
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
    </>
  );
}

export default List;
