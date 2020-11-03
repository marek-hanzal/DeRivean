import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {HeroRedux} from "redux/hero/redux";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const CreateView = () => {
	const [errors, setErrors] = useState();
	const [editor, setEditor] = useState(true);
	return (
		<EditorContext.Provider value={{errors, setErrors, editor, setEditor}}>
			<CreateViewWithAttributes
				base={RootView}
				id={"root.hero"}
				formName={"hero"}
				redux={HeroRedux}
				icon={<HeroIcon/>}
				param={"kingdom"}
				dashboardLink={Routes.root.hero.hero.link}
				enableSubmit={true}
			/>
		</EditorContext.Provider>
	);
};

export default CreateView;
