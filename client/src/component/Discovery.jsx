import React from "react";
import {connect} from "react-redux";
import {onDiscovery} from "redux/discovery/payload/action";
import {isDiscoveryFailure, isDiscoverySuccess} from "redux/discovery/status/selector";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

class Discovery extends React.PureComponent {
	componentDidMount() {
		this.props.onDiscovery();
	}

	render() {
		if (this.props.isSuccess) {
			return this.props.children;
		} else if (this.props.isFailure) {
			return <DiscoveryErrorView/>;
		}
		return <LoaderView/>;
	}
}

export default connect(
	state => ({
		isSuccess: isDiscoverySuccess(state),
		isFailure: isDiscoveryFailure(state),
	}),
	dispatch => ({
		onDiscovery: () => dispatch(onDiscovery()),
	})
)(Discovery);
