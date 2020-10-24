import {RightCircleOutlined} from "@ant-design/icons";
import {Card, Col, Result, Row, Typography} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import {Component} from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {onUserLoginDismiss} from "redux/user/login/action";
import PublicView from "site/public/view/PublicView";
import SignInForm from "site/public/view/sing-in/SignInForm";

class SingInView extends Component {
	componentDidMount() {
		this.props.onDismiss();
	}

	componentWillUnmount() {
		this.props.onDismiss();
	}

	render() {
		const {t} = this.props;
		return (
			<PublicView id={"public.sign-in"}>
				<Card title={t("public.sign-in.title")}>
					<Result
						icon={<SignInIcon/>}
						status={"info"}
						title={t("public.sign-in.content.title")}
						subTitle={t("public.sign-in.content.subtitle")}
					>
						<Row gutter={128} justify={"center"}>
							<Col span={12}>
								<Card title={t("public.sign-in.content.form.title")}>
									<SignInForm/>
								</Card>
							</Col>
							<Col span={12}>
								<Typography.Paragraph>
									<Typography.Text
										strong
										style={{fontSize: 16,}}
									>
										{t("public.sign-in.content.list.title")}
									</Typography.Text>
								</Typography.Paragraph>
								{[0, 1, 2, 3].map(index => (
									<Typography.Paragraph key={index}>
										<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t("public.sign-in.content.list.item-" + index)}
									</Typography.Paragraph>
								))}
							</Col>
						</Row>
					</Result>
				</Card>
			</PublicView>
		);
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		onDismiss: () => dispatch(onUserLoginDismiss()),
	}),
)(withTranslation()(SingInView));
