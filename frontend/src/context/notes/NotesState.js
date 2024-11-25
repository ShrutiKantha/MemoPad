import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const notesInitial = [
  //   {
  //     _id: "6738994shsjlhal3ed461ae54312ab9aa",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "My title2",
  //     description: "go to temple",
  //     tag: "personal",
  //     date: "2024-11-16T13:08:19.605Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6739ec07f1fsdns6e4fc096ca80cb",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "Documentation needs to be done",
  //     description: "by friday",
  //     tag: "personal",
  //     date: "2024-11-17T13:13:43.317Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "67389943dsasf461ae54312ab9aa",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "My title2",
  //     description: "go to temple",
  //     tag: "personal",
  //     date: "2024-11-16T13:08:19.605Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6739ec071wewsdf6e4fc096ca80cb",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "Documentation needs to be done",
  //     description: "by friday",
  //     tag: "personal",
  //     date: "2024-11-17T13:13:43.317Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "67389943dsdcx461ae54312ab9aa",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "My title2",
  //     description: "go to temple",
  //     tag: "personal",
  //     date: "2024-11-16T13:08:19.605Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6739ecsda071fjlsd6se4fc096ca80cb",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "Documentation needs to be done",
  //     description: "by friday",
  //     tag: "personal",
  //     date: "2024-11-17T13:13:43.317Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "67389943sdsad461iusdsae54312ab9aa",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "My title2",
  //     description: "go to temple",
  //     tag: "personal",
  //     date: "2024-11-16T13:08:19.605Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6739ecZx071xbhsf6esds4fc096ca80cb",
  //     user: "67388c0fd461ae54312ab99e",
  //     title: "Documentation needs to be done",
  //     description: "by friday",
  //     tag: "personal",
  //     date: "2024-11-17T13:13:43.317Z",
  //     __v: 0,
  //   },
  // ];
  const [notes, setNotes] = useState([]);

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    //console.log("Request body:", JSON.stringify({ title, description, tag }));

    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  //Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);

    //console.log(`Delete Note with ` + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, getNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
