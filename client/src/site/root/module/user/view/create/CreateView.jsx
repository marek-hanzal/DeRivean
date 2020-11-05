import {Card, Divider} from "antd";
import {useTranslation} from "react-i18next";
import LoginInput from "site/root/module/user/component/form/LoginInput";
import PasswordInput from "site/root/module/user/component/form/PasswordInput";
import SiteInput from "site/root/module/user/component/form/SiteInput";
import TemplateInput from "site/root/module/user/component/form/TemplateInput";
import UserContext from "site/root/module/user/component/UserContext";
import UserView from "site/root/module/user/view/UserView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<UserView>
			<UserContext.Consumer>
				{({id}) => (
					<CreateViewWithAttributes
						context={UserContext}
						param={"user"}
						enableSubmit={true}
					>
						{attributes => (
							<>
								<Card title={t(`${id}.form.title`)}>
									<LoginInput/>
									<PasswordInput/>
									<Divider type={"horizontal"}/>
									<SiteInput/>
								</Card>
								<Divider type={"horizontal"}/>
								{attributes}
								<Divider type={"horizontal"}/>
								<Card title={t(`${id}.form.misc.title`)}>
									<TemplateInput/>
								</Card>
							</>
						)}

					</CreateViewWithAttributes>
				)}
			</UserContext.Consumer>
		</UserView>
	);
};

export default CreateView;
