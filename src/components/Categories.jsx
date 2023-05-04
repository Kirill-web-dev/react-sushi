import React from "react";

const avaliableCategories = ["Роллы", "Суши", "Сеты", "Сашими", "Детское", "Напитки"];

const Categories = () => {
    const [choosedCategory, setChoosedCategory] = React.useState(0);

    const ChangeCategory = (index) => {
        setChoosedCategory(index);
    };

    return (
        <div className="categories">
            <ul>
                {avaliableCategories.map((category, index) => (
                    <li
                        onClick={() => ChangeCategory(index)}
                        className={choosedCategory === index ? "active" : ""}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
