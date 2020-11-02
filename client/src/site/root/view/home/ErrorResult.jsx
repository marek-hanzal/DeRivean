import {FrownOutlined} from "@ant-design/icons";
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
								message={t("server.error." + error.text)}
								description={error.action ? <Button type={"link"} children={t("server.error.action." + error.action)}/> : t("server.error.action-unavailable")}
								type="error"
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
