import React from "react";
import axios from "axios";

import Sort from "../components/Sort";
import Sushi from "../components/Sushi";
import Categories from "../components/Categories";

import Skeleton from "../components/Sushi/SushiLoader";

const Home = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [sushies, setSushies] = React.useState([]);

    React.useEffect(() => {
        setIsLoading(true);

        axios.get(`http://localhost:3001/rolls?`).then((res) => {
            setTimeout(() => {
                setSushies(res.data);
                setIsLoading(false);
            }, 500);
        });
    }, []);

    return (
        <main>
            <div className="content">
                <div className="container container__sort--category">
                    <Categories />
                    <Sort />
                </div>
                <div className="container container__sushi">
                    <div className="sushies">
                        {isLoading
                            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                            : sushies.map((sushi, index) => (
                                  <Sushi
                                      {...sushi}
                                      //   key={index}
                                  />
                              ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
