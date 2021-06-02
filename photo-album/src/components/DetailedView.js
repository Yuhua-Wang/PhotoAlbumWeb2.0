
function DetailedView(props) {
    return (
        <div className='detailedView'>
            <b>{'Title: ' + props.title}</b>
            <b>{'URL: ' + props.url}</b>
            <p>{'Description: ' + props.description}</p>
            <b>{'Date of Creation: ' + props.date}</b>
            <button type="button" onClick={props.closePopup}>Close</button>
        </div>
    )
}

export default DetailedView;