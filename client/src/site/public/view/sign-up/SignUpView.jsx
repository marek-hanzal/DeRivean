import {RightCircleOutlined} from "@ant-design/icons";
import {Card, Col, Result, Row, Typography} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {onUserRegisterDismiss} from "redux/user/register/action";
import {getUserRegisterStatus} from "redux/user/register/selector";
import PublicView from "site/public/view/PublicView";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";

const SignUpView = () => {
	const dispatch = useDispatch();
	const status = useSelector(getUserRegisterStatus);
	const {t} = useTranslation();
	useEffect(() => {
		dispatch(onUserRegisterDismiss());
		return () => dispatch(onUserRegisterDismiss());
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
						>
							<Row gutter={128} justify={"center"}>
								<Col span={12}>
									<Card title={t("public.sign-up.content.form.title")}>
										<SignUpForm/>
									</Card>
								</Col>
								<Col span={12}>
									<Typography.Paragraph>
										<Typography.Text
											strong
											style={{fontSize: 16,}}
										>
											{t("public.sign-up.content.list.title")}
										</Typography.Text>
									</Typography.Paragraph>
									{[0, 1, 2, 3, 4].map(index => (
										<Typography.Paragraph key={index}>
											<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t("public.sign-up.content.list.item-" + index)}
										</Typography.Paragraph>
									))}
								</Col>
							</Row>
						</Result>
					</Card>
				</PublicView>
			);
	}
};

export default SignUpView;
