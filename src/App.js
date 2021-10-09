import React, { useState } from "react";
import "./App.scss";
import Item from "./components/Item";

const initList = [
  { name: "aceite", calories: 45 },
  { name: "almendras", calories: 11 },
  { name: "arroz", calories: 250 },
  { name: "azúcar", calories: 20 }
];

function App() {
  const [list, setList] = useState(initList);

  const highlightUnhealthyHandler = (e) => {
    const filteredList = list.filter(v=>v.calories<=50);
    setList(filteredList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
      </header>
      {
        list.map((v,i) => {
          return <Item key={`${i}${v.name}${v.calories}`} name={v.name} calories={v.calories} />
        })
      }

      <button onClick={highlightUnhealthyHandler} >Highlight unhealthy ingredients</button>
      
    </div>
  );
}

export default App;
