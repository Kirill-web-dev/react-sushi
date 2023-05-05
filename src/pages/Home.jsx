import React from "react";

import { fetchRolls, setCurrentPage } from "../redux/slices/rollsSlice";
import { useDispatch, useSelector } from "react-redux";

import Sort from "../components/Sort";
import Rolls from "../components/Rolls";
import Categories from "../components/Categories";

import Pagination from "../components/Pagination";
import Skeleton from "../components/Rolls/RollsLoader";

const Home = () => {
    const dispatch = useDispatch();
    const { rollsItems, status, currentPage } = useSelector((state) => state.rollsSlice);
    const { sort, searchValue } = useSelector((state) => state.sortSlice);

    const sortType = sort.sortProperty;

    const getRolls = async () => {
        const order = sortType.includes("-") ? "asc" : "desc";
        const sortBy = sortType.replace("-", "");
        const searchBy = searchValue ? searchValue : "";

        dispatch(fetchRolls({ sortBy, order, currentPage, searchBy }));
    };

    React.useEffect(() => {
        getRolls();
    }, [sortType, currentPage, searchValue]);

    const onChangePage = (page) => {
        dispatch(setCurrentPage(page));
    };

    const rolls = rollsItems
        // .filter((roll) => roll.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((sushi, index) => (
            <Rolls
                key={index}
                {...sushi}
            />
        ));
    const skeleton = [...new Array(8)].map((_, index) => <Skeleton />);
    return (
        <main>
            <div className="content">
                <div className="container container__sort--category">
                    <Categories />
                    <Sort />
                </div>
                <div className="container container__sushi">
                    {status === "error" ? (
                        <div className="container__sushi--error">
                            <h3>Не удалось загрузить роллы :(</h3>
                            <p>Попробуйте перезагрузить страницу</p>
                        </div>
                    ) : (
                        <div className="container__sushi--success">
                            <h1>Роллы</h1>
                            <div className="sushies">{status === "loading" ? skeleton : rolls}</div>
                        </div>
                    )}
                </div>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </div>
        </main>
    );
};

export default Home;
