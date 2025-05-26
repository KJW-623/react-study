import { useState } from 'react';
import './Practice06.css';
import ColorBox from './ColorBox';

function Practice06() {

    let [boxes, setBoxes] = useState([
        'red', 'blue', 'green', 'black'
    ]);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = ['red', ...boxes];
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = ['blue', ...boxes];
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = ['green', ...boxes];
                    setBoxes(temp);
                }}>앞초록박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes, 'red'];
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes, 'blue'];
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes, 'green'];
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    //앞: unshift   shift
                    //뒤: push      pop
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {
                // 'red', 'green', 'blue', 'black'
                boxes.map((item, index) => {
                    //return <div className='box' style={{backgroundColor:item}}></div>
                    // <button onClick={() => {
                    //     let temp = [...props.boxes];
                    //     temp.splice(props.index, 1);
                    //     props.setBoxes(temp);
                    // }}>X</button>
                    return <ColorBox bgColor={item} index={index} boxes={boxes} setBoxes={setBoxes} />
                })
            }
        </div>
    );
}

export default Practice06;