import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Portfolio page</h1>
                <Typed
                    className="typed-text"
                    strings={["이것은 출력이 되는지 테스트 하기 위한 시험 문구입니다."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Click here!</a>
        </div>
    </div>
    )
}

export default Header;
