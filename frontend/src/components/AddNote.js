import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import './AddNote.css'

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("success", "Added Successfully");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="Addwrapper">
     <div className="AddformContent">
        <h3>Add a Note</h3>
        <form className="my-3">
          <div className="mb-1">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange} minLength={5} required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name="description"
              onChange={onChange} minLength={5} required
            />
          </div>
          <div className="mb-1">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              value={note.tag}
              name="tag"
              onChange={onChange} minLength={5} required
            />
          </div>

          <button disabled={note.title.length<5 || note.description.length<5}
            type="submit"
            className="addbuttonclass"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
