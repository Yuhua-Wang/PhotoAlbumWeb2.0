

function PhotoNode(props) {
    return (
        <div className='PhotoNode'>
            <img className='image' src={props.url}/>
            <div className='textRegion'>
                <b className='photoTitle'>{props.title}</b>
                <p className='photoDescription'>{props.description}</p>
            </div>
            <button type='button' className='removePhoto' onClick={props.removePhoto}>Remove</button>
        </div>
    );
}

export default PhotoNode;