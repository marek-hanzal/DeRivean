import {
	Button,
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { onMenuItems } from "redux/menu/action";
import RootPath from "site/root/router/RootPath";

class SingInView extends React.Component {
	componentDidMount() {
		this.props.onMenuItems(null);
	}

	render() {
		const {t} = this.props;
		return (
			<Card>
				<Result
					status="success"
					title={t("root.sign-in.succeed.title")}
					subTitle={t("root.sign-in.succeed.subtitle")}
					extra={[
						<Button type="primary" key="continue">
							<Link to={RootPath.root}>{t("root.sign-in.continue.title")}</Link>
						</Button>
					]}
				/>
			</Card>
		);
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onMenuItems: items => dispatch(onMenuItems(items))
	}),
)(withTranslation()(SingInView));
