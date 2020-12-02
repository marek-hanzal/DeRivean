import {Centered, SignInIcon} from "@leight-core/leight";
import {Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import PublicView from "../PublicView";
import SignInForm from "./SignInForm";

const SignInView = () => {
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

export default SignInView;
