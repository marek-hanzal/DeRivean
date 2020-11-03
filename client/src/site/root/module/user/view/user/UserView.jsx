import {Card, Divider, Form, Input} from "antd";
import FormErrorsContext from "component/form/FormErrorsContext";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {UserRedux} from "redux/user/redux";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";
import validationFor from "utils/form/validationFor";

const UserView = () => {
	const {t} = useTranslation();
	const [errors, setErrors] = useState();
	return (
		<FormErrorsContext.Provider value={{errors, setErrors}}>
			<EditViewWithAttributes
				id={"root.user"}
				formName={"user"}
				redux={UserRedux}
				param={"user"}
				open={["root.kingdom"]}
				icon={<UserIcon/>}
				enableSubmit={true}
			>
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
						children={<Input addonBefore={<div style={{width: "120px"}}>{t("root.user.edit.form.login.label")}</div>}/>}
					/>
				</Card>
				<Divider type={"horizontal"}/>
			</EditViewWithAttributes>
		</FormErrorsContext.Provider>
	);
};

export default UserView;
