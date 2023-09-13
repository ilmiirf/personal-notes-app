import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const ButtonAdd = () => {
  const navigate = useNavigate();
  return (
    <button
      className="action"
      onClick={() => {
        navigate("/notes/new");
      }}
    >
      <IoMdAdd />
    </button>
  );
};

export default ButtonAdd;
