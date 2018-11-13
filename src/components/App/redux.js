import { connect } from "react-redux";
import { getNewsAsync } from "../../actions/news";
import App from "./component";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onGetNews: () => {
        dispatch(getNewsAsync());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
