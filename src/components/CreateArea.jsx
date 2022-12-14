import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });


    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevValue) => {
            // if(name === "title"){
            //     return {
            //         title: value,
            //         content: prevValue.content
            //     };
            //  } else if(name === "content"){
            //     return {
            //         title: prevValue.title,
            //         content: value
            //     };
            //     }

            //return new object (sama mcm atas)
            return {
                ...prevValue,
                //[name] -> this syntax simply turn this name key from just the string name for the key to actual value of this name constant
                [name] : value
            }
        });
    }

    function submitNote(event){
        //passing note to another addNote function in app.jsx
        props.onAdd(note);

        //clear input form after submit item
        setNote({title:"", content:""})

        //prevent refresh for form
        event.preventDefault();
    }

    

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
