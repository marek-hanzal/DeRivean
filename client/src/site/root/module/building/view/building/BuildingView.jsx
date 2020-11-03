import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {BuildingRedux} from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const BuildingView = () => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<EditViewWithAttributes
				id={"root.building"}
				formName={"building"}
				redux={BuildingRedux}
				param={"building"}
				open={[]}
				icon={<BuildingIcon/>}
				enableSubmit={true}
			/>
		</EditorContext.Provider>
	);
};

export default BuildingView;
