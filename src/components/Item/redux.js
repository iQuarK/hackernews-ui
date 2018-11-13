import { connect } from "react-redux";
import List from "./component";
import { getNewsByIdAsync } from "../../actions/news";

const mapStateToProps = state => ({
    stored: state.news.stored
});

const mapDispatchToProps = dispatch => ({
    onGetNewsById: id => {
        dispatch(getNewsByIdAsync(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
