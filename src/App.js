import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "./components/List";
import "./App.scss";

class App extends Component {
    componentDidMount() {
        this.props.onGetNews();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">HackerNews</header>
                <List />
            </div>
        );
    }
}

App.propTypes = {
    news: PropTypes.array.isRequired,
    onGetNews: PropTypes.func.isRequired
};

export default App;
