import {Component} from "react";
import {connect} from "react-redux";
import {onMenuItems} from "redux/menu/action";

class WithMenu extends Component {
	componentDidMount() {
		this.props.onMenuItems(this.props.menu);
	}

	render() {
		return this.props.children;
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onMenuItems: items => dispatch(onMenuItems(items))
	}),
)(WithMenu);
