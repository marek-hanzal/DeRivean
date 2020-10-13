import React from 'react';
import {connect} from 'react-redux';
import {getDiscoveryHref} from '../redux/client/payload/selector';
import {onDiscovery} from '../redux/discovery/payload/action';

class Discovery extends React.PureComponent {
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.props.onDiscovery(this.props.href);
	}

	render() {
		return (
			<>{this.props.children}</>
		);
	}
}

export default connect(
	state => ({
		href: getDiscoveryHref(state),
	}),
	dispatch => ({
		onDiscovery: href => dispatch(onDiscovery(href)),
	})
)(Discovery);
