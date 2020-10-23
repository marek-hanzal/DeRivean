import React from "react";
import { connect } from "react-redux";
import { onDiscovery } from "redux/discovery/action";
import { getDiscoveryStatus } from "redux/discovery/selector";
import DiscoveryErrorView from "view/DiscoveryErrorView";
import LoaderView from "view/LoaderView";

class Discovery extends React.PureComponent {
	componentDidMount() {
		this.props.onDiscovery();
	}

	render() {
		switch (this.props.status) {
			case "SUCCESS":
				return this.props.children;
			case "FAILURE":
				return <DiscoveryErrorView/>;
			default:
				return <LoaderView/>;
		}
	}
}

export default connect(
	state => ({
		status: getDiscoveryStatus(state),
	}),
	dispatch => ({
		onDiscovery: () => dispatch(onDiscovery()),
	})
)(Discovery);
