import React from "react";
import {connect} from "react-redux";
import {onClient} from "redux/client/action";
import {getClientStatus} from "redux/client/selector";
import ClientErrorView from "view/ClientErrorView";
import LoaderView from "view/LoaderView";

class Client extends React.PureComponent {
	componentDidMount() {
		this.props.onClient(this.props.href);
	}

	render() {
		switch (this.props.status) {
			case "SUCCESS":
				return this.props.children;
			case "FAILURE":
				return <ClientErrorView/>;
			default:
				return <LoaderView/>;
		}
	}
}

export default connect(
	state => ({
		status: getClientStatus(state),
	}),
	dispatch => ({
		onClient: href => dispatch(onClient(href)),
	})
)(Client);
