import React from 'react';
import {connect} from 'react-redux';
import {onClient} from '../redux/client/payload/action';

class Client extends React.PureComponent {
	componentDidMount() {
		this.props.onClient(this.props.href);
	}

	render() {
		return (
			<>{this.props.children}</>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onClient: href => dispatch(onClient(href))
});

export default connect(null, mapDispatchToProps)(Client);
