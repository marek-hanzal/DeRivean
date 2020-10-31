import {RightCircleOutlined} from "@ant-design/icons";
import {Card, Col, Result, Row, Typography} from "antd";
import SignUpIcon from "component/icon/SignUpIcon";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import UserRedux from "redux/user/redux";
import PublicView from "site/public/view/PublicView";
import SignUpForm from "site/public/view/sign-up/SignUpForm";
import SucceedResult from "site/public/view/sign-up/SucceedResult";
import numberRange from "utils/numberRange";

const SignUpView = () => {
	const dispatch = useDispatch();
	const status = useSelector(UserRedux.redux.register.selector.getStatus);
	const {t} = useTranslation();
	useEffect(() => {
		dispatch(UserRedux.redux.register.dispatch.dismiss());
		return () => dispatch(UserRedux.register.dispatch.dismiss());
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
									{numberRange(5).map(index => (
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
