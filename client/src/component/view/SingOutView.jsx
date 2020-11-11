import {QuestionCircleFilled} from "@ant-design/icons";
import {Button, Card, Result} from "antd";
import {LayoutContext, useEnableFullscreen} from "component/layout/BaseLayout";
import {SessionContext} from "component/session/Session";
import useMenuSelect from "hook/useMenuSelect";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

const SingOutView = ({id}) => {
	const sessionContext = useContext(SessionContext);
	const layoutContext = useContext(LayoutContext);
	const navigate = useNavigate();
	const {t} = useTranslation();
	useMenuSelect(`${id}.sign-out`);
	useEnableFullscreen(layoutContext);
	return (
		<Card>
			<Result
				icon={<QuestionCircleFilled/>}
				title={t(`${id}.sign-out.title`)}
				subTitle={t(`${id}.sign-out.subtitle`)}
				extra={[
					<Button type="primary" key="sign-out" onClick={() => sessionContext.close()} children={t(`${id}.sign-out.button.sign-out`)}/>,
					<Button key="back" onClick={() => navigate(-1)}>{t(`${id}.sign-out.button.back`)}</Button>,
				]}
			/>
		</Card>
	);
};

export default SingOutView;
