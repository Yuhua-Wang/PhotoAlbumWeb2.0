

function PhotoNode(props) {
    let url = props.url;
    let title = props.title;
    let description = props.description;
    return (
        <div className='PhotoNode'>
            <img className='image' src={url}/>
            <div className='textRegion'>
                <b className='photoTitle'>{title}</b>
                <p className='photoDescription'>{description}</p>
            </div>
            <button type='button' className='removePhoto' onClick={props.removePhoto}>Remove</button>
        </div>
    );
}

export default PhotoNode;