import {Card, Divider} from "antd";
import {useTranslation} from "react-i18next";
import LoginInput from "site/root/module/user/component/form/LoginInput";
import PasswordInput from "site/root/module/user/component/form/PasswordInput";
import SiteInput from "site/root/module/user/component/form/SiteInput";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<UserView>
			<UserContext.Consumer>
				{({id}) => (
					<EditViewWithAttributes
						context={UserContext}
						param={"user"}
						defaultEnableSubmit={false}
					>
						<Card title={t(`${id}.form.title`)}>
							<LoginInput/>
							<PasswordInput/>
							<Divider type={"horizontal"}/>
							<SiteInput/>
						</Card>
						<Divider type={"horizontal"}/>
					</EditViewWithAttributes>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default EditView;
