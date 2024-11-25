import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import "./NoteItem.css";

const NoteItem = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { note, updateNote } = props;

  return (
    <div className="note-item-wrapper">
      <div className="my-card">
        <div className="card-content">
          <div className="card-header">
            <h5 className="card-title">{note.title}</h5>
            <div className="card-actions">
              <i
                className="fa-solid fa-trash-can"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("success", "Deleted successfully");
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
