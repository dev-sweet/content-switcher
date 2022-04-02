import React, { useState } from "react";
import "./ContentSwitcher.css";
const ContentSwitcher = () => {
  const [selectedItem, setSelectedItem] = useState<string>("selected1");
  interface button {
    id: string;
    text: string;
  }
  const buttons: button[] = [
    { id: "selected1", text: "hour" },
    { id: "selected2", text: "day" },
    { id: "selected3", text: "week" },
    { id: "selected4", text: "month" },
    { id: "selected5", text: "year" },
  ];
  const handleClick = (event: any) => {
    setSelectedItem(event.target.id);
  };
  return (
    <div style={{ paddingTop: "50px" }}>
      <div className='button-group'>
        {buttons.map((btn) => (
          <button
            key={btn.id}
            id={btn.id}
            className={`content-switcher-btn ${
              selectedItem === btn.id ? "selected" : ""
            }`}
            onFocus={handleClick}
          >
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentSwitcher;
