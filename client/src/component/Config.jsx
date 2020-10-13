import React from 'react';
import {connect} from 'react-redux';
import {onClient} from '../redux/client/payload/action';
import {isClientFailure, isClientSuccess} from '../redux/client/status/selector';
import ClientErrorView from '../view/ClientErrorView';
import LoaderView from '../view/LoaderView';

class Client extends React.PureComponent {
	componentDidMount() {
		this.props.onClient(this.props.href);
	}

	render() {
		if (this.props.isSuccess) {
			return this.props.children;
		} else if (this.props.isFailure) {
			return <ClientErrorView/>;
		}
		return <LoaderView/>;
	}
}

export default connect(
	state => ({
		isSuccess: isClientSuccess(state),
		isFailure: isClientFailure(state),
	}),
	dispatch => ({
		onClient: href => dispatch(onClient(href)),
	})
)(Client);
