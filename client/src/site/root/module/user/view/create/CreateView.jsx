import {LockOutlined} from "@ant-design/icons";
import {Card, Divider, Form, Input, message, Radio, Skeleton} from "antd";
import EditorContext from "component/form/EditorContext";
import SearchInput from "component/form/SearchInput";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerSites} from "redux/server/redux";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import validationFor from "utils/form/validationFor";

const CreateView = () => {
	const {t} = useTranslation();
	const [sites, setSites] = useState();
	useServerSites(
		sites => setSites(sites.sites),
		() => message.error(t("root.server.error.cannot-fetch-sites"))
	);
	return (
		<UserView>
			<CreateViewWithAttributes
				context={UserContext}
				param={"user"}
				enableSubmit={sites}
			>
				<EditorContext.Consumer>
					{({errors}) => (
						<>
							<Card title={t("root.user.create.form.title")}>
								<Form.Item
									{...validationFor("login", errors, t)}
									name={"login"}
									rules={[
										{
											required: true,
											message: t("root.user.create.form.login.required"),
										}
									]}
									children={<Input addonBefore={<div style={{width: "120px"}}>{t("root.user.create.form.login.label")}</div>}/>}
								/>
								<Form.Item
									{...validationFor("password", errors, t)}
									name={"password"}
									children={<Input.Password addonBefore={<div style={{width: "120px"}}>{t("root.user.create.form.password.label")}</div>} suffix={<LockOutlined/>}/>}
								/>
								<Divider type={"horizontal"}/>
								<Form.Item
									{...validationFor("site", errors, t)}
									name={"site"}
									label={t("root.user.create.form.site.label")}
									children={
										sites ?
											<Radio.Group>
												{sites.map(site => <Radio.Button key={site || "null"} value={site || undefined} children={t("root.site." + site)}/>)}
											</Radio.Group> :
											<Skeleton.Input style={{width: "240px"}} active/>
									}
								/>
							</Card>
							<Divider type={"horizontal"}/>
							<Card title={t("root.user.create.form.misc.title")}>
								<Form.Item
									{...validationFor("template", errors, t)}
									name={"template"}
									help={t("root.user.create.form.template.help")}
									children={
										<SearchInput placeholder={"create.form.template"} context={UserContext}/>
									}
								/>
							</Card>
							<Divider type={"horizontal"}/>
						</>
					)}
				</EditorContext.Consumer>
			</CreateViewWithAttributes>
		</UserView>
	);
};

export default CreateView;
