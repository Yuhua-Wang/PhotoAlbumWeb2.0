import React from "react";

function DetailedView(props) {
    return (
        <div className='detailedView'>
            <b>Details</b>

            <form>
                <label >Title:</label>
                <input type="text" size="50" value={props.title} readOnly /><br/><br/>
                <label htmlFor="url">URL: </label>
                <input type="url" size="50" value={props.url} readOnly/><br/><br/>
                <label >Description: </label>
                <textarea rows="10" cols="50" value={props.description} readOnly/><br/><br/>
                <label>Date: </label>
                <input type="text" size="50" value={props.date} readOnly /><br/><br/>
                <button type="button" onClick={props.closePopup}>Close</button>
            </form>
        </div>
    )
}

export default DetailedView;