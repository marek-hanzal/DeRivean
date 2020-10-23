import {RightCircleOutlined} from "@ant-design/icons";
import {Card, Col, Result, Row, Typography} from "antd";
import SignInIcon from "component/icon/SignInIcon";
import {withTranslation} from "react-i18next";
import PublicView from "site/public/site/PublicView";
import SignInForm from "site/public/view/sing-in/SignInForm";

const SingInView = ({t}) =>
	<PublicView>
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
;

export default withTranslation()(SingInView);
