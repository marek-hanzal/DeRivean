import {
	Card,
	Divider
} from "antd";
import { useTranslation } from "react-i18next";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import LoginInput from "site/root/module/user/component/form/LoginInput";
import PasswordInput from "site/root/module/user/component/form/PasswordInput";
import SiteInput from "site/root/module/user/component/form/SiteInput";
import TemplateInput from "site/root/module/user/component/form/TemplateInput";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<UserView>
			<UserContext.Consumer>
				{(currentContext) => (
					<CommonCreateView
						context={UserContext}
						param={"user"}
						defaultEnableSubmit={true}
						// site, template and attributes
						readyCount={3}
					>
						<Card title={t(`${currentContext.id}.form.title`)}>
							<LoginInput/>
							<PasswordInput/>
							<Divider type={"horizontal"}/>
							<SiteInput/>
						</Card>
						<Divider type={"horizontal"}/>
						<AttributeFieldEditor translation={currentContext.id} currentContext={currentContext}/>
						<Divider type={"horizontal"}/>
						<Card title={t(`${currentContext.id}.form.misc.title`)}>
							<TemplateInput/>
						</Card>
					</CommonCreateView>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default CreateView;
