function Box({title, content}){
    return(
        <div style={{border:'1px solid black'}}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Box;