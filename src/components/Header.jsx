import React from "react";

import logo from "../assets/img/Logo.png";

const Header = () => {
    return (
        <header>
            <div className="container container__header">
                <div className="title">
                    <img
                        width={50}
                        height={50}
                        src={logo}
                        alt="Логотип"
                    />
                    <div className="heading__desk">
                        <h1>React Sushi</h1>
                        <h4>Лучшие суши в России!</h4>
                    </div>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Поиск любимых роллов..."
                    />
                </div>
                <div className="open__cart">
                    <button>
                        <span>Корзина</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
