import {QuestionCircleFilled} from "@ant-design/icons";
import {Button, Card, Result} from "antd";
import FullsizeContent from "component/layout/FullsizeContent";
import SelectMenu from "component/menu/SelectMenu";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {useNavigate} from "react-router";
import {onSessionClose} from "redux/session/action";

const SingOutView = (
	{
		t,
		id,
		onLogout,
	}) => {
		const navigate = useNavigate();
		return (
			<Card>
				<FullsizeContent fullsize={true} reset={true}/>
				<SelectMenu menu={`${id}.sign-out`}/>
				<Result
					icon={<QuestionCircleFilled/>}
					title={t(`${id}.sign-out.title`)}
					subTitle={t(`${id}.sign-out.subtitle`)}
					extra={[
						<Button type="primary" key="sign-out" onClick={() => onLogout()}>
							{t(`${id}.sign-out.button.sign-out`)}
						</Button>,
						<Button key="back" onClick={() => navigate(-1)}>{t(`${id}.sign-out.button.back`)}</Button>,
					]}
				>
				</Result>
			</Card>
		);
	}
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => dispatch(onSessionClose())
	}),
)(withTranslation()(SingOutView));
