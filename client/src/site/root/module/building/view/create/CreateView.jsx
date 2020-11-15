import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import CommonCreateView from "site/common/view/CommonCreateView";
import BuildingView from "site/root/module/building/view/BuildingView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<BuildingView>
			<ModuleContext.Consumer>
				{(moduleContext) => (
					<CommonCreateView
						param={moduleContext.parent}
						defaultEnableSubmit={true}
						readyCount={1}
					>
						<div style={{textAlign: "center"}}>
							<i>{t(`${moduleContext.id}.building.hint`)}</i>
						</div>
					</CommonCreateView>
				)}
			</ModuleContext.Consumer>
		</BuildingView>
	);
};

export default CreateView;
