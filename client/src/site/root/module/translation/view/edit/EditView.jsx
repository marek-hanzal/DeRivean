import {Card, Divider, Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import {useTranslation} from "react-i18next";
import TranslationContext from "site/root/module/translation/component/TranslationContext";
import TranslationView from "site/root/module/translation/view/TranslationView";
import CommonEditView from "site/root/view/common/CommonEditView";
import validationFor from "utils/form/validationFor";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<TranslationView>
			<TranslationContext.Consumer>
				{({id}) => (
					<CommonEditView
						context={TranslationContext}
						param={"translation"}
						enableSubmit={true}
						name={"label"}
					>
						<EditorContext.Consumer>
							{({errors, editor}) => (
								<>
									<Card title={t(`${id}.edit.form.title`)}>
										<Form.Item
											{...validationFor("language", errors, t)}
											name={"language"}
											rules={[
												{
													required: true,
													message: t(`${id}.create.form.language.required`),
												}
											]}
											children={<Input disabled={!editor} addonBefore={<div style={{width: "120px"}}>{t(`${id}.create.form.language.label`)}</div>}/>}
										/>
										<Form.Item
											{...validationFor("namespace", errors, t)}
											name={"namespace"}
											disabled={!editor}
											rules={[
												{
													required: true,
													message: t(`${id}.create.form.namespace.required`),
												}
											]}
											children={<Input disabled={!editor} addonBefore={<div style={{width: "120px"}}>{t(`${id}.create.form.namespace.label`)}</div>}/>}
										/>
										<Form.Item
											{...validationFor("text", errors, t)}
											name={"text"}
											disabled={!editor}
											rules={[
												{
													required: true,
													message: t(`${id}.create.form.text.required`),
												}
											]}
											children={<Input disabled={!editor} addonBefore={<div style={{width: "120px"}}>{t(`${id}.create.form.text.label`)}</div>}/>}
										/>
									</Card>
									<Divider type={"horizontal"}/>
								</>
							)}
						</EditorContext.Consumer>
					</CommonEditView>
				)}
			</TranslationContext.Consumer>
		</TranslationView>
	);
};

export default EditView;
