import React from "react";
import debounce from "lodash.debounce";

import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slices/sortSlice";

import logo from "../assets/img/Logo.png";

const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState("");
    const inputField = React.useRef(null);

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 500)
    );

    const onStartSearch = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    const clearInputField = () => {
        dispatch(setSearchValue(""));
        setValue("");
        inputField.current?.focus();
    };

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
                        ref={inputField}
                        onChange={onStartSearch}
                        value={value}
                        type="text"
                        placeholder="Поиск любимых роллов..."
                    />
                    {value && <p onClick={clearInputField}>x</p>}
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
