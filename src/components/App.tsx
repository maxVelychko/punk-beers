import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../index.css";
import Header from "./Header";
import Home from "./Home";
import Favorites from "./Favorites";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
        </div>
    </Router>
);

export default App;