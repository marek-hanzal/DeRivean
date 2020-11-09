import {Card, Result} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import Centered from "component/layout/Centered";
import {useTranslation} from "react-i18next";
import PublicView from "site/public/view/PublicView";
import SignInForm from "site/public/view/sing-in/SignInForm";

const SingInView = () => {
	const {t} = useTranslation();
	return (
		<PublicView id={"public.sign-in"}>
			<Card title={t("public.sign-in.title")}>
				<Result
					icon={<SignInIcon/>}
					status={"info"}
					title={t("public.sign-in.content.title")}
					subTitle={t("public.sign-in.content.subtitle")}
					children={
						<Centered span={16}>
							<Card title={t("public.sign-in.content.form.title")}>
								<SignInForm/>
							</Card>
						</Centered>
					}
				/>
			</Card>
		</PublicView>
	);
};

export default SingInView;
