import {Card, Result} from "antd";
import BulletCard from "component/BulletCard";
import SignUpIcon from "component/icon/SignUpIcon";
import DualSection from "component/layout/DualSection";
import {useTranslation} from "react-i18next";
import PublicView from "site/public/view/PublicView";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";

const SignUpView = () => {
	const {t} = useTranslation();
	switch (null) {
		case "SUCCESS":
			return (
				<PublicView id={"public.sign-up"} fullsize={true}>
					<SucceedResult/>
				</PublicView>
			);
		default:
			return (
				<PublicView id={"public.sign-up"}>
					<Card title={t("public.sign-up.title")}>
						<Result
							icon={<SignUpIcon/>}
							status={"info"}
							title={t("public.sign-up.content.title")}
							subTitle={t("public.sign-up.content.subtitle")}
							children={
								<DualSection
									left={
										<Card title={t("public.sign-up.content.form.title")}>
											<SignUpForm/>
										</Card>
									}
									right={<BulletCard translation={"public.sign-up.content"} count={5}/>}
								/>
							}
						/>
					</Card>
				</PublicView>
			);
	}
};

export default SignUpView;
