import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {BuildingRedux} from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const CreateView = () => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(true);
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<CreateViewWithAttributes
				id={"root.building"}
				base={RootView}
				formName={"building"}
				redux={BuildingRedux}
				icon={<BuildingIcon/>}
				param={"kingdom"}
				dashboardLink={Routes.root.building.building.link}
				enableSubmit={true}
			/>
		</EditorContext.Provider>
	);
};

export default CreateView;
