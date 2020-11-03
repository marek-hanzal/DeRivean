import {Card, Divider, Form} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import {useTranslation} from "react-i18next";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import validationFor from "utils/form/validationFor";

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
						<EditorContext.Consumer>
							{({errors}) => (
								<>
									<Card title={t(`${id}.create.form.misc.title`)}>
										<Form.Item
											{...validationFor("template", errors, t)}
											name={"template"}
											help={t(`${id}.create.form.template.help`)}
											children={
												<SearchInput placeholder={"create.form.template"} context={KingdomContext}/>
											}
										/>
									</Card>
									<Divider type={"horizontal"}/>
								</>
							)}
						</EditorContext.Consumer>
					</CreateViewWithAttributes>
				)}
			</KingdomContext.Consumer>
		</KingdomView>
	);
};

export default CreateView;
