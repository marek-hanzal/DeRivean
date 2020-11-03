import {Card, Divider, Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import useMenuOpen from "hook/useMenuOpen";
import {useTranslation} from "react-i18next";
import {UserContext, UserView} from "site/root/module/user/view/UserView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";
import validationFor from "utils/form/validationFor";

const HomeView = () => {
	const {t} = useTranslation();

	useMenuOpen(["root.kingdom"]);

	return (
		<UserView>
			<EditViewWithAttributes
				context={UserContext}
				param={"user"}
				enableSubmit={true}
			>
				<EditorContext.Consumer>
					{({errors, editor}) => (
						<>
							<Card title={t("root.user.edit.form.title")}>
								<Form.Item
									{...validationFor("login", errors, t)}
									name={"login"}
									rules={[
										{
											required: true,
											message: t("root.user.edit.form.login.required"),
										}
									]}
									children={<Input disabled={!editor} addonBefore={<div style={{width: "120px"}}>{t("root.user.edit.form.login.label")}</div>}/>}
								/>
							</Card>
							<Divider type={"horizontal"}/>
						</>
					)}
				</EditorContext.Consumer>
			</EditViewWithAttributes>
		</UserView>
	);
};

export default HomeView;
