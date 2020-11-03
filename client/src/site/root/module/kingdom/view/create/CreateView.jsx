import FormErrorsContext from "component/form/FormErrorsContext";
import {useState} from "react";
import {KingdomRedux} from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const CreateView = () => {
	const [errors, setErrors] = useState();
	return (
		<FormErrorsContext.Provider value={{errors, setErrors}}>
			<CreateViewWithAttributes
				id={"root.kingdom"}
				base={RootView}
				formName={"kingdom"}
				redux={KingdomRedux}
				icon={<KingdomIcon/>}
				param={"user"}
				dashboardLink={Routes.root.kingdom.kingdom.link}
				enableSubmit={true}
			/>
		</FormErrorsContext.Provider>
	);
};

export default CreateView;
