import {Centered, SignUpIcon} from "@leight-core/leight";
import {Card, Result} from "antd";
import {useTranslation} from "react-i18next";
import PublicView from "../PublicView";
import SignUpForm from "./SignUpForm";

const SignUpView = () => {
	const {t} = useTranslation();
	return (
		<PublicView id={"public.sign-up"}>
			<Card title={t("public.sign-up.title")}>
				<Result
					icon={<SignUpIcon/>}
					status={"info"}
					title={t("public.sign-up.content.title")}
					subTitle={t("public.sign-up.content.subtitle")}
					children={
						<Centered span={16}>
							<Card title={t("public.sign-up.content.form.title")}>
								<SignUpForm/>
							</Card>
						</Centered>
					}
				/>
			</Card>
		</PublicView>
	);
};

export default SignUpView;
