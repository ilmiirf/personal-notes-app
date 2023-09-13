import React from "react";
import NoteList from "../components/noteList";
import NoteSearch from "../components/noteSearch";
import { getArchivedNotes } from "../utils/network-data";

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      keyword: "",
    };
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
    return (
      <React.Fragment>
        <div className="search__section">
          <NoteSearch
            keyword={this.state.keyword}
            onSearchChange={this.onSearchEventHandler}
          />
        </div>
        <div className="note-list__section">
          <NoteList notes={notes} />
        </div>
      </React.Fragment>
    );
  }
}

export default ArchivedPage;
