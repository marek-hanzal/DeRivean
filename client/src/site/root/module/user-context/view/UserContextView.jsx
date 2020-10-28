import {Spin} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import UserFetchRedux from "redux/user/fetch/redux";
import useFetchUser from "site/root/module/user-context/hook/useFetchUser";
import RootView from "site/root/view/RootView";

const UserContextView = ({loading = false, ...props}) => {
	useFetchUser();
	const {t} = useTranslation();
	const isLoading = useSelector(UserFetchRedux.selector.isLoading) || loading;

	return (
		<Spin spinning={isLoading} delay={100} tip={t("common.spinner")}>
			<RootView {...props}/>
		</Spin>
	);
};

export default UserContextView;
