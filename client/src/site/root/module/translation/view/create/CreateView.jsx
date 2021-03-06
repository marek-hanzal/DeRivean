import {Card, Divider} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import CommonCreateView from "site/common/view/CommonCreateView";
import LanguageInput from "site/root/module/translation/component/form/LanguageInput";
import TextInput from "site/root/module/translation/component/form/TextInput";
import TranslationView from "site/root/module/translation/view/TranslationView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<TranslationView>
			<ModuleContext.Consumer>
				{({id}) => (
					<CommonCreateView
						defaultEnableSubmit={true}
						name={"label"}
					>
						<Card title={t(`${id}.form.title`)}>
							<LanguageInput/>
							<TextInput/>
						</Card>
						<Divider type={"horizontal"}/>
					</CommonCreateView>
				)}
			</ModuleContext.Consumer>
		</TranslationView>
	);
};

export default CreateView;
