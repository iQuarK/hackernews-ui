import { connect } from "react-redux";
import List from "./component";

const mapStateToProps = state => ({
    news: state.news.list
});

export default connect(mapStateToProps)(List);
