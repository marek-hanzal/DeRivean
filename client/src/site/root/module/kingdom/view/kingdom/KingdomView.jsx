import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {KingdomRedux} from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const KingdomView = () => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(true);
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<EditViewWithAttributes
				id={"root.kingdom"}
				formName={"kingdom"}
				redux={KingdomRedux}
				param={"kingdom"}
				menu={"root.kingdom"}
				open={["root.hero", "root.building"]}
				icon={<KingdomIcon/>}
				enableSubmit={true}
			/>
		</EditorContext.Provider>
	);
};

export default KingdomView;
