import {Card, Result} from "antd";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserFetch} from "redux/user/fetch/action";
import {getUserFetch, isUserFetchLoading} from "redux/user/fetch/selector";
import RootView from "site/root/component/RootView";
import UserHomeIcon from "site/root/module/user/component/icon/UserHomeIcon";
import UserName from "site/root/module/user/view/home/component/UserName";

class HomeView extends React.PureComponent {
	componentDidMount() {
		this.props.onFetch(this.props.match.params.uuid);
	}

	render() {
		const {user} = this.props;

		return (
			<RootView>
				<Card title={"[user home with details]"}>
					<Result
						icon={<UserHomeIcon/>}
					>
						<UserName user={user}/>
					</Result>
				</Card>
			</RootView>
		);
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
