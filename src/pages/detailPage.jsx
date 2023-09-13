import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import NoteDetail from "../components/noteDetail";
import ButtonChange from "../components/buttonChange";
import ButtonDelete from "../components/buttonDelete";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import {
  deleteNote,
  getNote,
  archiveNote,
  unarchiveNote,
} from "../utils/network-data";

const DetailPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage navigate={navigate} id={id} />;
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: "",
    };

    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onUnarchiveNotesHandler = this.onUnarchiveNotesHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);
    this.setState(() => {
      return {
        note: data,
      };
    });
  }

  async onDeleteNotesHandler(id) {
    await deleteNote(id);
    this.props.navigate("/");
  }

  async onArchiveNotesHandler(id) {
    await archiveNote(id);
    this.props.navigate("/");
  }

  async onUnarchiveNotesHandler(id) {
    await unarchiveNote(id);
    this.props.navigate("/archives");
  }

  render() {
    if (this.state.note === "") {
      return <p>Note is not found!</p>;
    }

    return (
      <React.Fragment>
        <div className="detail-section">
          <NoteDetail {...this.state.note} />
        </div>
        <div className="add-new-page__action">
          <ButtonChange
            id={this.props.id}
            onChange={
              this.state.note.archived
                ? this.onUnarchiveNotesHandler
                : this.onArchiveNotesHandler
            }
            iconButton={
              this.state.note.archived ? <BiArchiveOut /> : <BiArchiveIn />
            }
          />
          <ButtonDelete
            id={this.props.id}
            onDelete={this.onDeleteNotesHandler}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DetailPageWrapper;
