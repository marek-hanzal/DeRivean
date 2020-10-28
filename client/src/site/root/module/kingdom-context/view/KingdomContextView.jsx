import {Spin} from "antd";
import {useTranslation} from "react-i18next";
import RootView from "site/root/view/RootView";

const KingdomContextView = ({loading = false, ...props}) => {
	// useFetchKingdom();
	const {t} = useTranslation();
	// const isLoading = useSelector(KingdomFetchRedux.selector.isLoading) || loading;
	const isLoading = false;

	return (
		<Spin spinning={isLoading} delay={100} tip={t("common.spinner")}>
			<RootView {...props}/>
		</Spin>
	);
};

export default KingdomContextView;
