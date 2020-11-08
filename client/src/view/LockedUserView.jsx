import {LockOutlined} from "@ant-design/icons";
import {Button, Result} from "antd";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {SessionRedux} from "redux/session/redux";

const LockedUserView = () => {
	const dispatch = useDispatch();
	const {t} = useTranslation();
	return (
		<>
			<Helmet title={t("error.user-locked.title")}/>
			<Result
				status={"error"}
				icon={<LockOutlined/>}
				title={t("error.user-locked.title")}
				subTitle={t("error.user-locked.body")}
				extra={<Button type="primary" onClick={() => {
					dispatch(SessionRedux.close());
				}}>{t("error.user-locked.dismiss")}</Button>}
			/>
		</>
	);
};

export default LockedUserView;
