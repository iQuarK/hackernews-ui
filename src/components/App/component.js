import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "../List";
import "./styles.scss";

class App extends Component {
    componentWillMount() {
        window.onscroll = ev => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                this.props.onBottom();
            }
        };
    }

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
    onGetNews: PropTypes.func.isRequired,
    onBottom: PropTypes.func.isRequired
};

export default App;
