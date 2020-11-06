import {Card, Divider} from "antd";
import {useTranslation} from "react-i18next";
import LanguageInput from "site/root/module/translation/component/form/LanguageInput";
import TextInput from "site/root/module/translation/component/form/TextInput";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import TranslationView from "site/root/module/translation/view/TranslationView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<TranslationView>
			<TranslationContext.Consumer>
				{({id}) => (
					<CommonCreateView
						context={TranslationContext}
						param={"translation"}
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
			</TranslationContext.Consumer>
		</TranslationView>
	);
};

export default CreateView;
