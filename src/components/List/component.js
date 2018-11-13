import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./styles.scss";

const List = ({ news }) => (
    <div class="columns">
        {news &&
            news.map(n => (
                <div className="column" key={n.id}>
                    <Item news={n} />
                </div>
            ))}
    </div>
);

List.propTypes = {
    news: PropTypes.array.isRequired
};

export default List;
