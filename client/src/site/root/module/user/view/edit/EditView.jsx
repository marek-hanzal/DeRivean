import {Card, Divider} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import CommonEditView from "site/common/view/CommonEditView";
import LoginInput from "site/root/module/user/component/form/LoginInput";
import PasswordInput from "site/root/module/user/component/form/PasswordInput";
import SiteInput from "site/root/module/user/component/form/SiteInput";
import UserView from "site/root/module/user/view/UserView";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<UserView>
			<ModuleContext.Consumer>
				{({id}) => (
					<CommonEditView
						// for attributes and site input
						readyCount={1}
					>
						<Card title={t(`${id}.form.title`)}>
							<LoginInput/>
							<PasswordInput/>
							<Divider type={"horizontal"}/>
							<SiteInput/>
						</Card>
						<Divider type={"horizontal"}/>
					</CommonEditView>
				)}
			</ModuleContext.Consumer>
		</UserView>
	);
};

export default EditView;
