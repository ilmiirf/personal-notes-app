import React from "react";
import PropTypes from "prop-types";

const NoteSearch = ({ keyword, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="cari berdasarkan judul"
        value={keyword}
        onChange={onSearchChange}
      />
    </div>
  );
};

NoteSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default NoteSearch;
