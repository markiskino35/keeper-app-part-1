import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const [isExpanded, setExpanded] = useState(false);


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

        //prevent page refresh after form submit
        event.preventDefault();
    }

    function expand (){
      setExpanded(true);
    }
    

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/> : null}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
          
        <Zoom in={isExpanded} timeout={500}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom> 
       
          
      </form>
    </div>
  );
}

export default CreateArea;
