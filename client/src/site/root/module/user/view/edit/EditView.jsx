import {Card, Divider} from "antd";
import {useTranslation} from "react-i18next";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import LoginInput from "site/root/module/user/component/form/LoginInput";
import PasswordInput from "site/root/module/user/component/form/PasswordInput";
import SiteInput from "site/root/module/user/component/form/SiteInput";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import CommonEditView from "site/root/view/common/CommonEditView";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<UserView>
			<UserContext.Consumer>
				{({id, redux}) => (
					<CommonEditView
						context={UserContext}
						param={"user"}
					>
						<Card title={t(`${id}.form.title`)}>
							<LoginInput/>
							<PasswordInput/>
							<Divider type={"horizontal"}/>
							<SiteInput/>
						</Card>
						<Divider type={"horizontal"}/>
						<AttributeFieldEditor translation={id} redux={redux}/>
					</CommonEditView>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default EditView;
