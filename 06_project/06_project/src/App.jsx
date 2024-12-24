import { useState } from "react";
import "./App.css";

function App() {
  const names = ["Play Cricket", "Play Cards", "Read Books"];
  const [sortOrder, setSortOrder] = useState(0);
  const [check, setCheck] = useState(false);
  const [deleteItem, setDeleteItem] = useState("Delete Items");
  return (
    <>
      {names.map((name, index) => (
        <li key={index}>
          <input
            type="checkbox"
            defaultChecked={check}
            onChange={() => {
              setCheck(true);
            }}
          />
          {name}
          {check && (
            <button
              onClick={(e) => {
                if (check) {
                  e.target.remove({ name });
                }
              }}
            >
              {deleteItem}
            </button>
          )}
        </li>
      ))}
    </>
  );
}

export default App;
