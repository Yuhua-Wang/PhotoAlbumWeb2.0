import React from "react";
import {InputForm} from "./InputForm";

function DetailedView(props) {
    return (
        <div className='detailedView'>
            <b>Details</b>

            <button type="button" id='closePopup' onClick={props.closePopup}>Close</button>

            <InputForm
                id = 'editForm'
                title={props.title}
                url={props.url}
                description={props.description}
                action={props.editPhoto}
                actionDes='Confirm Change'
            />
        </div>
    )
}

export default DetailedView;