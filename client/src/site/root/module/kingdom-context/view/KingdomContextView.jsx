import {Spin} from "antd";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import KingdomFetchRedux from "redux/kingdom/fetch/redux";
import useKingdomFetch from "site/root/module/kingdom-context/hook/useKingdomFetch";
import RootView from "site/root/view/RootView";

const KingdomContextView = ({loading = false, ...props}) => {
	useKingdomFetch();
	const {t} = useTranslation();
	const isLoading = useSelector(KingdomFetchRedux.selector.isLoading) || loading;

	return (
		<Spin spinning={isLoading} delay={100} tip={t("common.spinner")}>
			<RootView {...props}/>
		</Spin>
	);
};

export default KingdomContextView;
