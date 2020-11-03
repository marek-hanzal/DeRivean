import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {KingdomRedux} from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const CreateView = () => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(true);
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
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
		</EditorContext.Provider>
	);
};

export default CreateView;
