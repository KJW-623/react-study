
function Box({title, content}){
    return(
        <div style={{background:'gray', border:'1px solid black'}}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

/*
function Box(props){    //props 객체타입 매개변수

    //props = {title='아침' content='시리얼'}
    return(
        <div style={{background:'gray', border:'1px solid black'}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}
*/

export default Box;