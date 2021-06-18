import React, {useState} from "react";

export function InputForm(props) {
    const [title, setTitle] = useState(props.title);
    const [url, setURL] = useState(props.url);
    const [description, setDescription] = useState(props.description);

    const handleAction = () => {
        props.action(title, url, description);
    }

    const resetInput = () => {
        setTitle(props.title);
        setURL(props.url);
        setDescription(props.description);
    }

    return (
        <form id={props.id}>
            <label >Title:</label>
            <input
                type="text"
                size="50"
                value={title}
                onChange={ (event => {setTitle(event.target.value)}) }/>
            <br/><br/>

            <label htmlFor="url">URL: </label>
            <input
                type="url"
                size="50"
                value={url}
                onChange={(event => {setURL(event.target.value)})}/>
            <br/><br/>

            <label >Description: </label>
            <textarea
                rows="10"
                cols="50"
                value={description}
                onChange={(event => {setDescription(event.target.value)})}/>
            <br/><br/>

            <button type="button" onClick={handleAction}>{props.actionDes}</button>
            <button type="button" onClick={resetInput}>Reset Inputs</button>
        </form>
    )
}