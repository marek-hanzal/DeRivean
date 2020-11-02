import {useState} from "react";
import KingdomRedux from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const CreateView = () => {
	const [error, setError] = useState();
	return (
		<CreateViewWithAttributes
			id={"root.kingdom"}
			base={RootView}
			formName={"kingdom"}
			redux={KingdomRedux}
			icon={<KingdomIcon/>}
			param={"user"}
			dashboardLink={Routes.root.kingdom.kingdom.link}
			errors={error}
			setErrors={setError}
			enableSubmit={true}
		/>
	);
};

export default CreateView;
