import {QuestionCircleFilled} from "@ant-design/icons";
import {Button, Card, Result} from "antd";
import useFullsizeContent from "hook/useFullsizeContent";
import useMenuSelect from "hook/useMenuSelect";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {onSessionClose} from "redux/session/action";

const SingOutView = ({id}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {t} = useTranslation();
	useMenuSelect(`${id}.sign-out`);
	useFullsizeContent(true);
	return (
		<Card>
			<Result
				icon={<QuestionCircleFilled/>}
				title={t(`${id}.sign-out.title`)}
				subTitle={t(`${id}.sign-out.subtitle`)}
				extra={[
					<Button type="primary" key="sign-out" onClick={() => dispatch(onSessionClose())}>
						{t(`${id}.sign-out.button.sign-out`)}
					</Button>,
					<Button key="back" onClick={() => navigate(-1)}>{t(`${id}.sign-out.button.back`)}</Button>,
				]}
			>
			</Result>
		</Card>
	);
};

export default SingOutView;
