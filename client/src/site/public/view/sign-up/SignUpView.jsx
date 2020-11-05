import {Card, Result} from "antd";
import BulletCard from "component/BulletCard";
import SignUpIcon from "component/icon/SignUpIcon";
import DualSection from "component/layout/DualSection";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {UserRedux} from "redux/user/redux";
import PublicView from "site/public/view/PublicView";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";

const SignUpView = () => {
	const dispatch = useDispatch();
	const status = useSelector(UserRedux.redux.register.selector.getStatus);
	const {t} = useTranslation();
	useEffect(() => {
		dispatch(UserRedux.redux.register.dispatch.dismiss());
		return () => dispatch(UserRedux.redux.register.dispatch.dismiss());
	}, [dispatch]);
	switch (status) {
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
