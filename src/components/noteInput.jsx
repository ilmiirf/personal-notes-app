import React from "react";
import ButtonSubmit from "../components/buttonSubmit";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="input-container">
        <h2>Buat Catatan</h2>

        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Note Title ......."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />

          <textarea
            className="add-new-page__input__body"
            placeholder="Note Description ......."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <div className="add-new-page__action">
            <ButtonSubmit />
          </div>
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
