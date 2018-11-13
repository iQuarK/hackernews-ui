import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Spinner from "../Spinner";
import "./styles.scss";

class Item extends Component {
    componentWillMount() {
        if (!this.props.stored[this.props.news]) {
            this.props.onGetNewsById(this.props.news);
        }
    }

    render() {
        const news = this.props.stored[this.props.news];

        if (!!news) {
            return (
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <div className="score">
                                    <h2>Score</h2>
                                    {news.score}
                                </div>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">
                                    <a href={news.url} className="link">
                                        {news.title}
                                    </a>
                                </p>
                                <div className="container">
                                    <div className="columns">
                                        <div className="subtitle is-5">
                                            by: <i>{news.by}</i>,
                                            <i>
                                                {moment
                                                    .unix(news.time)
                                                    .fromNow()}
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Spinner />;
        }
    }
}

Item.propTypes = {
    news: PropTypes.number.isRequired,
    stored: PropTypes.object.isRequired,
    onGetNewsById: PropTypes.func.isRequired
};

export default Item;
