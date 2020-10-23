import {Component} from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserFetch} from "redux/user/fetch/action";
import {getUserFetch, isUserFetchLoading} from "redux/user/fetch/selector";

class HomeView extends Component {
	componentDidMount() {
		this.props.onFetch(this.props.match.params.user);
	}

	render() {
		// const {user} = this.props;

		return (null);
		// <RootView>
		// 	<Card title={"[user home with details]"}>
		// 		<Result
		// 			icon={<UserHomeIcon/>}
		// 		>
		// 			<UserName user={user}/>
		// 		</Result>
		// 	</Card>
		// </RootView>
	}
}

export default connect(
	state => ({
		user: getUserFetch(state),
		isLoading: isUserFetchLoading(state),
	}),
	dispatch => ({
		onFetch: uuid => dispatch(onUserFetch(uuid))
	}),
)(withTranslation()(HomeView));
