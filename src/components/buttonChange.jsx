import React from "react";
import PropTypes from "prop-types";

const ButtonChange = ({ id, onChange, iconButton }) => {
  return (
    <button
      className="action"
      onClick={() => {
        onChange(id);
      }}
    >
      {iconButton}
    </button>
  );
};

ButtonChange.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconButton: PropTypes.object.isRequired,
};

export default ButtonChange;
