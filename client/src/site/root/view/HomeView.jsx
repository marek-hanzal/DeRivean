import { SmileOutlined } from "@ant-design/icons";
import {
	Card,
	Result
} from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { onMenuItems } from "redux/menu/action";
import RootMenu from "site/root/site/RootMenu";

class HomeView extends React.Component {
	componentDidMount() {
		this.props.onMenuItems(RootMenu());
	}

	render() {
		const {t} = this.props;
		return (<Card title={t("root.home.title")}>
			<Result
				icon={<SmileOutlined/>}
				status={"success"}
				title={t("root.home.content.title")}
				subTitle={t("root.home.content.subtitle")}
			/>
		</Card>);
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onMenuItems: items => dispatch(onMenuItems(items))
	}),
)(withTranslation()(HomeView));
