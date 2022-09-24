import { useState } from "react";
import AddressList from "./components/AddressList";
import "./App.css";

function App() {
  console.log("Render Component App");
  const [list, setList] = useState([]);

  return (
    <div className="App">
   
      <AddressList list={list} setList={setList} />
    </div>
  );
}

export default App;
