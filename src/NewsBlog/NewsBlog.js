import './NewsBlog.css';
import { useState } from "react";
import Modal from './Modal';

function NewsBlog() {

    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState(0);
    let [likeCount1, setLikeCount1] = useState(0);
    let [likeCount2, setLikeCount2] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    let [showModal, setShowModal] = useState(true);

    let [selectedTitle, setSelectrdTitle] = useState('');

    return (

        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: "orange", fontSize: "20px" }}>{title}</p>
            </div>

            <div className='post-list'>
                <h4 onClick={() => {
                    setShowModal(!showModal);
                    setSelectrdTitle(news[0]);
                }}>{news[0]} <span onClick={() => {
                    let temp = [...likeCountArr];
                    temp[0] += 1;
                    setLikeCountArr(temp);
                    //setLikeCount(likeCount[0] + 1);
                }}>❤</span>{likeCountArr[0]}</h4>
                <p>내용 무</p>

                {/*
                <button onClick={() => {
                    let temp = [...news];
                    temp[0] = 'Today News';
                    setNews(temp);
                }}>제목 변경</button>
                */}
            </div>

            <div className='post-list'>
                <h4 onClick={() => {
                    if (showModal)
                        setShowModal(false)
                    else
                        setSelectrdTitle(news[1])
                }}>{news[1]} <span onClick={() => {
                    //setLikeCount(likeCount[1] + 1);
                    let temp = [...likeCountArr];
                    temp[1] += 1;
                    setLikeCountArr(temp);
                }}>❤</span>{likeCountArr[1]}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4 onClick={() => {
                    setShowModal(!showModal);
                    setSelectrdTitle(news[2])
                }}>{news[2]} <span onClick={(event) => {
                    event.stopPropagation(); //전파를 막겠다
                    //속해있는 부모 요소의 이벤트 처리까지 전파되는 걸 막겠다
                    //setLikeCount2(likeCount2[2] + 1);
                    let temp = [...likeCountArr];
                    temp[2] += 1;
                    setLikeCountArr(temp);
                }}>❤</span>{likeCountArr[2]}</h4>
                <p>내용 무</p>
            </div>


            {
                //showModal == true ? <Modal /> : null
                showModal && <Modal title ={selectedTitle}/>
            }

        </div>
    );

}

export default NewsBlog;