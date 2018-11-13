import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Item = ({ news }) => (
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
                                by: <i>{news.by}</i>
                            </div>
                            <div className="bar">|</div>
                            <div className="subtitle is-5">
                                at: <i>{news.time}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Item.propTypes = {
    news: PropTypes.object.isRequired
};

export default Item;
