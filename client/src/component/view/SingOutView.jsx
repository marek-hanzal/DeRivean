import {QuestionCircleFilled} from "@ant-design/icons";
import {Button, Card, Result} from "antd";
import WithMenu from "component/view/WithMenu";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onSessionClose} from "redux/session/action";

const SingOutView = (
	{
		t,
		translation,
		history,
		onLogout,
		menu,
	}) =>
	<WithMenu men={menu}>
		<Card>
			<Result
				icon={<QuestionCircleFilled/>}
				title={t(`${translation}.sign-out.title`)}
				subTitle={t(`${translation}.sign-out.subtitle`)}
				extra={[
					<Button type="primary" key="sign-out" onClick={() => onLogout()}>
						{t(`${translation}.sign-out.button.sign-out`)}
					</Button>,
					<Button key="back" onClick={() => history.goBack()}>{t(`${translation}.sign-out.button.back`)}</Button>,
				]}
			>
			</Result>
		</Card>
	</WithMenu>
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => dispatch(onSessionClose())
	}),
)(withTranslation()(SingOutView));
