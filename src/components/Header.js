import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Welcome, this is my Portfolio Page</h1>
                <Typed
                    className="typed-text"
                    strings={["HTML, CSS, JS, React.js 를 가지고 반응형 디자인을 구현 합니다."]}
                    typeSpeed={80}
                />
                <a href="#" className="btn-main-offer">이 사람에 대해 좀 더 알아보기</a>



        </div>
    </div>
    )
}

export default Header;
