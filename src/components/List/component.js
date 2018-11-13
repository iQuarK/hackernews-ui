import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import Item from "../Item";
import "./styles.scss";

const List = ({ news }) => (
    <div>
        {news &&
            news.map(n => (
                <LazyLoad height={120} key={n}>
                    <div>
                        <Item news={n} />
                    </div>
                </LazyLoad>
            ))}
    </div>
);

List.propTypes = {
    news: PropTypes.array.isRequired
};

export default List;
