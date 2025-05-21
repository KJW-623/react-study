import { useState } from "react";
import './Practice01.css';

function Practice01() {

    let cnt = 0;
    let [cnt2, setCnt2] = useState(0);

    return (
        <div className="App">
            <div className="b1">
                <button onClick={() => {
                    setCnt2(cnt2 + 2);
                    console.log(cnt2)
                }}>짝수출력</button> <span>{cnt2}</span>
            </div>
        </div>
    );

}

export default Practice01;


// 리액트 프로젝트를 생성하여 아래와 같은 결과가 나오도록 코드 작성.

// 1. 화면은 짝수출력 버튼과 빨간글씨 숫자
// - 버튼 누르면 숫자가 2 4 6 8.. 짝수만 나온다.
// 2. Practice 폴더 아래에 Practice01.js 파일명으로 컴포넌트 생성해서 진행
// *App.js 에서 연결부분 설정
// 3. 제출

// 문제 해결에 관련된 파일 캡쳐 or 파일 제출
// 1) Practice01.js
// 2) App.js 파일
// 3) 기타 css 파일 (사용했으면)
// 3) 실행한 화면 캡쳐 1