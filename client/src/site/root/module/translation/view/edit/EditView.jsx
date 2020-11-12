import {Card, Divider} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import LanguageInput from "site/root/module/translation/component/form/LanguageInput";
import TextInput from "site/root/module/translation/component/form/TextInput";
import TranslationView from "site/root/module/translation/view/TranslationView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<TranslationView>
			<ModuleContext.Consumer>
				{({id}) => (
					<CommonEditView
						defaultEnableSubmit={true}
						name={"label"}
					>
						<Card title={t(`${id}.form.title`)}>
							<LanguageInput/>
							<TextInput/>
						</Card>
						<Divider type={"horizontal"}/>
					</CommonEditView>
				)}
			</ModuleContext.Consumer>
		</TranslationView>
	);
};

export default EditView;
