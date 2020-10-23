import {Component} from "react";
import {connect} from "react-redux";
import {onContentFullsize} from "redux/content/action";

class FullsizeContent extends Component {
	componentDidMount() {
		this.props.onFullsize(this.props.fullsize);
	}

	render() {
		return null;
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onFullsize: value => dispatch(onContentFullsize(value))
	})
)(FullsizeContent);
