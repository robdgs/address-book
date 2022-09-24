import { useState } from "react";
import AddressItem from "../AddressItem";
import "./index.css";

const AddressList = ({ list, setList }) => {
  const [addressInput, setAddressInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  console.log("Render Component Addresslist");
  const onHandleClick = () => {
    console.log(list);
    setList((prev) => [
      ...prev,
      {
        id: prev?.length + 1,
        address: addressInput,
        name: nameInput,
        surname: surnameInput,
      },
    ]);
    setAddressInput("");
    setNameInput("");
    setSurnameInput("");
  };
  
  return (
    <div className="AddressList">
        <h1>Address Book</h1>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        value={surnameInput}
        onChange={(e) => setSurnameInput(e.target.value)}
        placeholder="surname"
      />
      <input
        type="text"
        value={addressInput}
        onChange={(e) => setAddressInput(e.target.value)}
        placeholder="address"
      />
      <button onClick={onHandleClick}>Aggiungi</button>
      <div className="AddressItem">
        {list.length ? (
          list.map((address, i) => (
            <AddressItem
              address={address}
              list={list}
              setList={setList}
              key={i}
              del_i={i}
            />
          ))
        ) : (
          <p>aggiungi dei dati</p>
        )}
      </div>
    </div>
  );
};

export default AddressList;
