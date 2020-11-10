import {LockOutlined} from "@ant-design/icons";
import {Button, Result} from "antd";
import SessionContext from "component/system/SessionContext";
import {useContext} from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const LockedUserView = () => {
	const sessionContext = useContext(SessionContext);
	const {t} = useTranslation();
	return (
		<>
			<Helmet title={t("error.user-locked.title")}/>
			<Result
				status={"error"}
				icon={<LockOutlined/>}
				title={t("error.user-locked.title")}
				subTitle={t("error.user-locked.body")}
				extra={<Button type="primary" onClick={() => sessionContext.close()} children={t("error.user-locked.dismiss")}/>}
			/>
		</>
	);
};

export default LockedUserView;
