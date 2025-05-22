import { useState } from "react";

function Practice02() {

    //let num = ['하나', '둘', '셋'];
    //let [numArr, setNumArr] = useState(0);

    let textArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);


    return (
        <div className="App">
            <div>
                <p>{textArr[index]}</p>
                <button onClick={() => {
                    //index++;
                    //setIndex((index+1) % textArr.length);
                    let temp = index;
                    temp++;
                    if(temp == textArr.length)
                        temp = 0;
                    setIndex(temp); // index = temp;    //setIndex(매개변수) >> index = 매개변수
                    //let print = (numArr + 1) % num.length;
                    //setNumArr(print);
                    //console.log(num[numArr])
                    }}>변경버튼</button>
            </div>
        </div>
    );
}

export default Practice02;