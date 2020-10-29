import {Spin} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import UserFetchRedux from "redux/user/fetch/redux";
import useUserFetch from "site/root/module/user/hook/useUserFetch";
import RootView from "site/root/view/RootView";

const UserContextView = ({loading = false, ...props}) => {
	useUserFetch();
	const {t} = useTranslation();
	const isLoading = useSelector(UserFetchRedux.selector.isLoading) || loading;

	return (
		<Spin spinning={isLoading} delay={100} tip={t("common.spinner")}>
			<RootView {...props}/>
		</Spin>
	);
};

export default UserContextView;
