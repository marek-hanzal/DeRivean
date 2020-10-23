import {Component} from "react";
import {connect} from "react-redux";
import {onMenuSelect} from "redux/menu/action";

class SelectMenu extends Component {
	componentDidMount() {
		this.props.onMenuSelect(this.props.menu);
	}

	render() {
		return null;
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onMenuSelect: item => dispatch(onMenuSelect(item)),
	}),
)(SelectMenu);
