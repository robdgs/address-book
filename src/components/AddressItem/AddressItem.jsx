import "./index.css";
import { memo } from "react";

const AddressItem = ({ address, list, setList, del_i }) => {
  console.log("Render Component Item");
  const onHandleClick = () => {
    setList(list.filter((_, index) => index !== del_i));
  };
  return (
    <div className="AddressItem">
      <p> NAME: {address.name}</p>
      <p> SURNAME: {address.surname}</p>
      <p> ADDRESS: {address.address}</p>
      <button onClick={onHandleClick}> Delete</button>
    </div>
  );
};

export default memo(AddressItem);
