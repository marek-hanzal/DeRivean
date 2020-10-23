import {SmileOutlined} from "@ant-design/icons";
import {Button, Card, Image, Result, Typography} from "antd";
import icon from "assets/icon-small.png";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import PublicView from "site/public/site/PublicView";

const HomeView = (
	{
		t,
	}) =>
	<PublicView id={"public.home"}>
		<Card>
			<Result
				icon={<Image width={128} height={128} src={icon}/>}
				status={"success"}
				title={t("public.home.content.title")}
				subTitle={t("public.home.content.subtitle")}
				extra={[
					<Button type="primary" key="sign-in">
						<Link to={"sign-in"}><SignInIcon/>&nbsp;{t("public.home.sign-in.title")}</Link>
					</Button>,
					<Button key="sign-up">
						<Link to={PublicPath.signUp}><SignUpIcon/>&nbsp;{t("public.home.sign-up.title")}</Link>
					</Button>,
				]}
			>
				<Typography.Paragraph>
					<Typography.Text
						strong
						style={{fontSize: 16,}}
					>
						{t("public.home.content.list.title")}
					</Typography.Text>
				</Typography.Paragraph>
				<Typography.Paragraph>
					<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-0")}
				</Typography.Paragraph>
				<Typography.Paragraph>
					<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-1")}
				</Typography.Paragraph>
				<Typography.Paragraph>
					<SmileOutlined style={{color: "green"}}/>&nbsp;{t("public.home.content.list.item-2")}
				</Typography.Paragraph>
			</Result>
		</Card>
	</PublicView>
;

export default withTranslation()(HomeView);
