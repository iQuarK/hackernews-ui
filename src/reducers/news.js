const initialState = {
    list: [],
    stored: {}
};

const news = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return { ...state, list: [...state.list, ...action.news] };
        case "GET_NEWS_BY_ID":
            var newState = Object.assign({}, state);
            newState.stored[action.id] = action.news;
            return Object.assign({}, state, {
                stored: { ...state.stored, [action.id]: action.news }
            });
        default:
            return state;
    }
};

export default news;
