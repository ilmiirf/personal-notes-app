import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <article className="note-item">
      <Link
        to={`/note/${id}`}
        style={{ textDecoration: "none" }}
        className="note-item__title"
      >
        {title}
      </Link>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
