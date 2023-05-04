import React from "react";

import { fetchSushies } from "../redux/slices/sushiSlice";
import { useDispatch, useSelector } from "react-redux";

import Sort from "../components/Sort";
import Sushi from "../components/Sushi";
import Categories from "../components/Categories";

import Skeleton from "../components/Sushi/SushiLoader";

const Home = () => {
    const dispatch = useDispatch();
    const { sushiItems, status } = useSelector((state) => state.sushiSlice);
    const getSushies = async () => {
        dispatch(fetchSushies());
    };

    React.useEffect(() => {
        getSushies();
    }, []);

    const sushies = sushiItems.map((sushi, index) => <Sushi {...sushi} />);
    const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
    return (
        <main>
            <div className="content">
                <div className="container container__sort--category">
                    <Categories />
                    <Sort />
                    <h1>Роллы</h1>
                </div>
                <div className="container container__sushi">
                    {status === "error" ? (
                        <div className="container__sushi--error">
                            <h3>Не удалось загрузить роллы</h3>
                            <p>Попробуйте перезагрузить страницу</p>
                        </div>
                    ) : (
                        <div className="sushies">{status === "loading" ? skeleton : sushies}</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
