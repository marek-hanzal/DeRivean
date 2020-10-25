import {Button, Col, Form, Input, Row} from "antd";
import Markdown from "component/Markdown";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<Form name={"kingdom"}>
			<BaseCreateView
				base={KingdomView}
				id={"root.userContext.kingdom"}
				subTitle={
					<Row justify={"center"}>
						<Col span={6}>
							<Form.Item
								name={"name"}
								rules={[
									{
										required: true,
										message: t("root.userContext.kingdom.form.name.required")
									}
								]}
							>
								<Input addonBefore={t("Kingdom name")} suffix={<KingdomIcon/>}/>
							</Form.Item>
						</Col>
					</Row>
				}
			>
				<Row>
					<Col span={12}>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
							>
								{t("root.userContext.kingdom.create.button")}
							</Button>
						</Form.Item>
					</Col>
					<Col span={12}>
						put here grid of flags to choose from (col 12 & col 12) with some description text
						<Markdown># Hello, *world*! `boo` boo</Markdown>
					</Col>
				</Row>
			</BaseCreateView>
		</Form>
	);
};

export default CreateView;
