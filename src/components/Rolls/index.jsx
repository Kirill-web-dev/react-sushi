import React from "react";

const Rolls = ({ imageUrl, title, desc, price }) => {
    return (
        <>
            <div className="sushi">
                <img
                    width={150}
                    height={150}
                    src={imageUrl}
                    alt={title}
                />
                <div className="about">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
                <div className="down">
                    <b>{price} руб.</b>
                    <button>Добавить</button>
                </div>
            </div>
        </>
    );
};

export default Rolls;
