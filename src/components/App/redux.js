import { connect } from "react-redux";
import { getNewsAsync, getNextPage } from "../../actions/news";
import App from "./component";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onGetNews: () => {
        dispatch(getNewsAsync());
    },
    onBottom: id => {
        dispatch(getNextPage());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
