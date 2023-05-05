import React from "react";

import Header from "./components/Header";

import Home from "./pages/Home";

const App = () => {
    return (
        <div className="App">
            <div className="wrapper clear">
                <Header />
                <Home />
            </div>
        </div>
    );
};

export default App;

