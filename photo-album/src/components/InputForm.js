import React, {useState} from "react";

export function InputForm(props) {
    const [title, setTitle] = useState(props.title);
    const [URL, setURL] = useState(props.URL);
    const [description, setDescription] = useState(props.description);

    const handleUpload = () => {
        props.upload(title, URL, description);
    }

    const resetInput = () => {
        setTitle('');
        setURL('');
        setDescription('');
    }

    return (
        <form id='inputForm'>
            <label >Title:</label>
            <input type="text"
                   size="50"
                   value={title}
                   onChange={ (event => {setTitle(event.target.value)}) }/>
            <br/><br/>

            <label htmlFor="url">URL: </label>
            <input type="url"
                   size="50"
                   value={URL}
                   onChange={(event => {setURL(event.target.value)})}/>
            <br/><br/>

            <label >Description: </label>
            <textarea rows="10"
                      cols="50"
                      value={description}
                      onChange={(event => {setDescription(event.target.value)})}/>
            <br/><br/>

            <button type="button" onClick={handleUpload}>Upload Photo</button>
            <button type="button" onClick={resetInput}>Clear Inputs</button>
        </form>
    )
}