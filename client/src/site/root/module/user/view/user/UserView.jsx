import {Card, Divider, Form, Input} from "antd";
import EditorContext from "component/form/EditorContext";
import {useTranslation} from "react-i18next";
import {BaseUserView, UserContext} from "site/root/module/user/view/BaseUserView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";
import validationFor from "utils/form/validationFor";

const UserView = () => {
	const {t} = useTranslation();
	return (
		<BaseUserView>
			<EditViewWithAttributes
				context={UserContext}
				formName={"user"}
				param={"user"}
				open={["root.kingdom"]}
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
		</BaseUserView>
	);
};

export default UserView;
