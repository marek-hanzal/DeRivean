import {Card, Divider} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import CommonCreateView from "site/common/view/CommonCreateView";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import TemplateInput from "site/root/module/kingdom/component/form/TemplateInput";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<KingdomView>
			<ModuleContext.Consumer>
				{({parent, id}) => (
					<CommonCreateView
						param={parent}
						defaultEnableSubmit={true}
						readyCount={2}
					>
						<AttributeFieldEditor/>
						<Divider type={"horizontal"}/>
						<Card title={t(`${id}.create.form.misc.title`)}>
							<TemplateInput/>
						</Card>
					</CommonCreateView>
				)}
			</ModuleContext.Consumer>
		</KingdomView>
	);
};

export default CreateView;
