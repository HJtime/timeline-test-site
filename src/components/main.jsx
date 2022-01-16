import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main=()=>{
    const navigate=useNavigate();

    const currentUrl = "https://hjtime.github.io/timeline-test-site";

    const setMetaTags = ({ imageUrl="기본 사이트 이미지 경로" }) => {
        document .querySelector('meta[property="og:image"]') .setAttribute("content", imageUrl);
        document .querySelector('meta[property="og:url"]') .setAttribute("content", currentUrl);
    };

    setMetaTags({
        imageUrl: './images/main-img.png'
    })

    return (
        <div className='main-content'>
            <span className="main-sub-ttl">탐라에서 나는 어떤 캐릭터일까?</span>
            <h2 className='main-ttl'>탐캐 테스트</h2>
            <div className="main-img">
                <img src="./images/influencer.png" alt="main img" />
            </div>
            <button className='btn-start' onClick={()=>{
                navigate('/qna');
            }}>테스트하기<i className="fas fa-long-arrow-alt-right"></i></button>
        </div>
    );
}

export default Main;