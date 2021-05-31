

function PhotoNode(title, description, url) {
    return (
        <div className='PhotoNode'>
            <img className='image' src={url}/>
            <div className='textRegion'>
                <b className='photoTitle'>{title}</b>
                <p className='photoDescription'>{description}</p>
            </div>
            <button type='button' className='removePhoto'>Remove</button>
        </div>
    );
}

export default PhotoNode;