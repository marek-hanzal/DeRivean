import {Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import TranslationView from "site/root/module/translation/view/TranslationView";

const HomeView = () => {
	const {t} = useTranslation();
	return (
		<TranslationView>
			<TranslationContext.Consumer>
				{({id}) => (
					<Card title={t(`${id}.title`)}>
						<Result
							status={"info"}
						/>
					</Card>
				)}
			</TranslationContext.Consumer>
		</TranslationView>
	);
};

export default HomeView;
