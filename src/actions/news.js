const getNews = news => ({
    type: "GET_NEWS",
    news
});

const getNewsById = (id, news) => ({
    type: "GET_NEWS_BY_ID",
    id,
    news
});

export const getNewsAsync = () => dispatch => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(response => response.json())
        .then(news => dispatch(getNews(news)))
        .catch(err => console.error(err));
};

export const getNewsByIdAsync = id => dispatch => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(response => response.json())
        .then(news => dispatch(getNewsById(id, news)))
        .catch(err => console.error(err));
};
