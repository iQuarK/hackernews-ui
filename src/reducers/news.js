const MAX_PAGE = 10;

const initialState = {
    list: [],
    pages: [],
    currentPage: MAX_PAGE,
    stored: {}
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEWS":
            const pages = [...action.news].slice(0, MAX_PAGE);
            return {
                ...state,
                list: [...state.list, ...action.news],
                pages
            };
        case "GET_NEWS_BY_ID":
            var newState = Object.assign({}, state);
            newState.stored[action.id] = action.news;
            return Object.assign({}, state, {
                stored: { ...state.stored, [action.id]: action.news }
            });
        case "NEXT_PAGE":
            const currentPage = state.currentPage + MAX_PAGE;
            return {
                ...state,
                pages: [...state.list].slice(0, currentPage),
                currentPage
            };
        default:
            return state;
    }
};

export default news;
