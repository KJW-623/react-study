
//function DrinkItem(props){    //props.name    props.type}
//function DrinkItem({name, type}){     //name type}
function drinkItem({drinkItem}) {

    return(
        <div style={{'border':'1px solid black'}}>
            <p>이름 : {drinkItem.name}</p>
            <p>종류 : {drinkItem.type}</p>
        </div>
    );
}

export default drinkItem;