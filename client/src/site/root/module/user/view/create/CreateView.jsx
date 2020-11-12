import {Card, Divider} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import LoginInput from "site/root/module/user/component/form/LoginInput";
import PasswordInput from "site/root/module/user/component/form/PasswordInput";
import SiteInput from "site/root/module/user/component/form/SiteInput";
import TemplateInput from "site/root/module/user/component/form/TemplateInput";
import UserView from "site/root/module/user/view/UserView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<UserView>
			<ModuleContext.Consumer>
				{({id}) => (
					<CommonCreateView
						defaultEnableSubmit={true}
						// site, template and attributes
						readyCount={3}
					>
						<Card title={t(`${id}.form.title`)}>
							<LoginInput/>
							<PasswordInput/>
							<Divider type={"horizontal"}/>
							<SiteInput/>
						</Card>
						<Divider type={"horizontal"}/>
						<AttributeFieldEditor/>
						<Divider type={"horizontal"}/>
						<Card title={t(`${id}.form.misc.title`)}>
							<TemplateInput/>
						</Card>
					</CommonCreateView>
				)}
			</ModuleContext.Consumer>
		</UserView>
	);
};

export default CreateView;
