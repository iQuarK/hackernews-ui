import { connect } from "react-redux";
import List from "./component";

const mapStateToProps = state => ({
    news: state.news.pages
});

export default connect(mapStateToProps)(List);
