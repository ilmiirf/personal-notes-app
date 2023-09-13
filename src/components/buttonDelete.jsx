import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from "prop-types";

const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button
      className="action"
      onClick={() => {
        onDelete(id);
      }}
    >
      <RiDeleteBin6Line />
    </button>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonDelete;
