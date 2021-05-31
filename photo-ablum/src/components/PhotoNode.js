function PhotoNode(title, description, url) {
    return (
        <div className='PhotoNode'>
            <img src={url}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default PhotoNode;