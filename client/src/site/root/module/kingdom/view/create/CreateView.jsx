import {
	Card,
	Divider
} from "antd";
import { useTranslation } from "react-i18next";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import TemplateInput from "site/root/module/kingdom/component/form/TemplateInput";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{(currentContext) => (
					<CommonCreateView
						context={KingdomContext}
						param={currentContext.parentParam}
						defaultEnableSubmit={true}
						readyCount={2}
					>
						<AttributeFieldEditor translation={currentContext.id} currentContext={currentContext}/>
						<Divider type={"horizontal"}/>
						<Card title={t(`${currentContext.id}.create.form.misc.title`)}>
							<TemplateInput/>
						</Card>
					</CommonCreateView>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default CreateView;
