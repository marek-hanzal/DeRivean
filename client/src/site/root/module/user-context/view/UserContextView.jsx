import {Spin} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import UserFetchRedux from "redux/user/fetch/redux";
import useUserFetch from "site/root/module/user/hook/useUserFetch";
import RootView from "site/root/view/RootView";

const UserContextView = ({loading = false, ...props}) => {
	useUserFetch();
	const {t} = useTranslation();
	/**
	 * Keeping this just to think if whole page loading is better than just in place loaders.
	 */
		// eslint-disable-next-line no-unused-vars
	const isLoading = useSelector(UserFetchRedux.selector.isLoading) || loading;

	return (
		<Spin spinning={false} delay={100} tip={t("common.spinner")}>
			<RootView {...props}/>
		</Spin>
	);
};

export default UserContextView;
