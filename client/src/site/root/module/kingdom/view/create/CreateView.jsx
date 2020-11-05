import {Card, Divider} from "antd";
import {useTranslation} from "react-i18next";
import TemplateInput from "site/root/module/kingdom/component/form/TemplateInput";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<KingdomView>
			<KingdomContext.Consumer>
				{({id}) => (
					<CreateViewWithAttributes
						context={KingdomContext}
						param={"user"}
						enableSubmit={true}
					>
						{attributes => (
							<>
								{attributes}
								<Divider type={"horizontal"}/>
								<Card title={t(`${id}.create.form.misc.title`)}>
									<TemplateInput/>
								</Card>
							</>

						)}
					</CreateViewWithAttributes>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default CreateView;
