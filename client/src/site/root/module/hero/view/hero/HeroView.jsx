import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {HeroRedux} from "redux/hero/redux";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const HeroView = () => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(false);
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<EditViewWithAttributes
				id={"root.hero"}
				formName={"hero"}
				redux={HeroRedux}
				param={"hero"}
				open={[]}
				icon={<HeroIcon/>}
				enableSubmit={true}
			/>
		</EditorContext.Provider>
	);
};

export default HeroView;
