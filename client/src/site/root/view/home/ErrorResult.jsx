import {FrownOutlined, HeartOutlined} from "@ant-design/icons";
import {Alert, Button, List, Result} from "antd";
import {useTranslation} from "react-i18next";

const ErrorResult = ({validation}) => {
	const {t} = useTranslation();

	return (
		<Result
			icon={<FrownOutlined/>}
			status={"error"}
			title={t("root.home.content.error.title")}
			subTitle={t("root.home.content.error.subtitle")}
		>
			<List header={<h2>{t("root.home.content.error.list.title")}</h2>}>
				{validation.errors.map(error => {
					return (
						<List.Item key={error.id}>
							<Alert
								message={t("root.server.error." + error.text)}
								description={error.action ? <Button icon={<HeartOutlined/>} type={"link"} children={t("root.server.error.action." + error.action)}/> : t("root.server.error.action-unavailable")}
								type="warning"
								showIcon
								style={{width: "100%"}}
							/>
						</List.Item>
					);
				})}
			</List>
		</Result>
	);
};

export default ErrorResult;
