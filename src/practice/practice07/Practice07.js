import './Practice07.css';
import Main from './Main';
import Info from './Info';
import Mypage from './Mypage';
import Cart from './Cart';

// react-router-dom에서 Link, Route, Routes, useNavigate 임포트
import { Link, Route, Routes, useNavigate } from 'react-router';

import { Nav } from 'react-bootstrap';

function Practice07() {
    const navigate = useNavigate();
    return (
        <div>

            <div>
                <button onClick={() => { navigate("/") }}>Main</button>
                <button onClick={() => { navigate("/Info") }}> Info</button>
                <button onClick={() => { navigate("/Mypage") }}> Mypage</button>
                <button onClick={() => { navigate("/Cart") }}> Cart </button>
            </div>

            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/Info" element={<Info />}></Route>
                <Route path="/Mypage" element={<Mypage />}></Route>
                <Route path="/Cart" element={<Cart />}></Route>

                <Route path='*' element={<div><h1>잘못된 경로입니다. 주소를 확인하세요.</h1></div>}></Route>

            </Routes>
        </div>
    )
}

export default Practice07;