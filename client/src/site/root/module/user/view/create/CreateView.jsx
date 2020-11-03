import {LockOutlined} from "@ant-design/icons";
import {Card, Divider, Form, Input, message, Radio, Skeleton} from "antd";
import EditorContext from "component/form/EditorContext";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerSites} from "redux/server/redux";
import {UserRedux} from "redux/user/redux";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";
import validationFor from "utils/form/validationFor";

const CreateView = () => {
	const {t} = useTranslation();
	const [sites, setSites] = useState();
	useServerSites(
		sites => setSites(sites.sites),
		() => message.error(t("root.server.error.cannot-fetch-sites"))
	);
	return (
		<CreateViewWithAttributes
			base={RootView}
			id={"root.user"}
			icon={<UserIcon/>}
			formName={"user"}
			param={"user"}
			redux={UserRedux}
			dashboardLink={Routes.root.user.user.link}
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
					</>
				)}
			</EditorContext.Consumer>
		</CreateViewWithAttributes>
	);
};

export default CreateView;
