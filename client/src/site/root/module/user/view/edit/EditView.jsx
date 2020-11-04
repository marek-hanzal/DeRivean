import {Card, Divider, Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import useMenuOpen from "hook/useMenuOpen";
import {useTranslation} from "react-i18next";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";
import validationFor from "utils/form/validationFor";

const EditView = () => {
	const {t} = useTranslation();
	useMenuOpen(["root.kingdom"]);
	return (
		<UserView>
			<UserContext.Consumer>
				{({id}) => (
					<EditViewWithAttributes
						context={UserContext}
						param={"user"}
						enableSubmit={true}
					>
						<EditorContext.Consumer>
							{({errors, editor}) => (
								<>
									<Card title={t(`${id}.edit.form.title`)}>
										<Form.Item
											{...validationFor("login", errors, t)}
											name={"login"}
											rules={[
												{
													required: true,
													message: t(`${id}.edit.form.login.required`),
												}
											]}
											children={<Input disabled={!editor} addonBefore={<div style={{width: "120px"}}>{t(`${id}.edit.form.login.label`)}</div>}/>}
										/>
									</Card>
									<Divider type={"horizontal"}/>
									<Card title={t(`${id}.edit.form.misc.title`)}>
										<Form.Item
											{...validationFor("template", errors, t)}
											name={"template"}
											help={t(`${id}.edit.form.template.help`)}
											children={
												<SearchInput disabled={!editor} placeholder={"edit.form.template"} context={UserContext}/>
											}
										/>
									</Card>
									<Divider type={"horizontal"}/>
								</>
							)}
						</EditorContext.Consumer>
					</EditViewWithAttributes>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default EditView;
