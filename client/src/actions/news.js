export const getNewsAsync = () => dispatch => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(response => response.json())
        .then(items => console.log("items", items))
        .catch(err => console.error(err));
};
