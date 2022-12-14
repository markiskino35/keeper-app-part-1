import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Note } from "./Note";
// import {notes} from "../notes";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    //receive note object from CreateArea.jsx
    function addNote(note){
        // console.log(note);

        setNotes((prevValue) => {
            return [...prevValue, note]
        })
    }

    function deleteItem(id){
        // console.log(id);

        setNotes((prevValue) => {
            return prevValue.filter((notes, index) => {
                return index !== id;
            });
        });
    }


    return(
        <div>
            <Header />
            <CreateArea 
                //pass in function as a props, doing this we can receive note from CreateArea
                onAdd={addNote}
            />
            {/* {notes.map(newNote =>  
                <Note key={newNote.key} title={newNote.title} content={newNote.content}/>
            )} */}
            
           { notes.map((noteItem, index) => {
                return <Note 
                    key={index} 
                    id={index}
                    title={noteItem.title} 
                    content={noteItem.content} 
                    onDelete={deleteItem}
                    />
            })}
            
            <Footer />
        </div>
    );
}

export default App;



