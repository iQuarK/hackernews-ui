import { connect } from "react-redux";
import List from "./component";
import { getNewsAsync } from "../../actions/news";

// receives the data from the reducer to make the list of orders
const mapStateToProps = state => ({
    news: state.news
});

// maps the action into a function inside the component
const mapDispatchToProps = dispatch => ({
    onGetDeployments: projectId => {
        dispatch(getNewsAsync(projectId));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
