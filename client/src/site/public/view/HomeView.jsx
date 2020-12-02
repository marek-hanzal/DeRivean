import {SmileOutlined} from "@ant-design/icons";
import {link, SignInIcon} from "@leight-core/leight";
import {Button, Card, Image, Result, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import icon from "../../../assets/icon-small.png";
import PublicView from "./PublicView";

const HomeView = () => {
	const {t} = useTranslation();
	return (
		<PublicView id={"public.home"}>
			<Card>
				<Result
					icon={<Image width={128} height={128} src={icon}/>}
					status={"success"}
					title={t("public.home.content.title")}
					subTitle={t("public.home.content.subtitle")}
					extra={[
						<Button type="primary" key="sign-in">
							<Link to={link("public.sign-in")}><SignInIcon/>&nbsp;{t("public.home.sign-in.title")}</Link>
						</Button>,
						<Button key="sign-up">
							<Link to={link("public.sign-up")}><SignUpIcon/>&nbsp;{t("public.home.sign-up.title")}</Link>
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
	);
};

export default HomeView;
