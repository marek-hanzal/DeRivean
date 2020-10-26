import {RightCircleOutlined} from "@ant-design/icons";
import {Button, Col, Form, Input, Row, Typography} from "antd";
import BaseCreateView from "component/view/BaseCreateView";
import {useTranslation} from "react-i18next";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";
import numberRange from "utils/numberRange";

const id = "root.userContext.kingdom";
const longId = id + ".create";

const CreateView = () => {
	const {t} = useTranslation();
	return (
		<Form name={"kingdom"}>
			<BaseCreateView
				base={KingdomView}
				id={id}
				subTitle={
					<Row justify={"center"}>
						<Col span={6}>
							<Form.Item
								name={"name"}
								rules={[
									{
										required: true,
										message: t(longId + ".form.name.required")
									}
								]}
							>
								<Input addonBefore={t(longId + ".form.name.label")} suffix={<KingdomIcon/>}/>
							</Form.Item>
						</Col>
					</Row>
				}
			>
				<Row justify={"center"} gutter={24}>
					<Col span={12}>
						put here kingdom attribute form
						<Row justify={"center"}>
							<Col span={4}>
								<Form.Item>
									<Button
										type="primary"
										htmlType="submit"
									>
										{t(longId + ".form.button.label")}
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Col>
					<Col span={12}>
						<Typography.Paragraph>
							<Typography.Text
								strong
								style={{fontSize: 16,}}
							>
								{t(longId + ".list.title")}
							</Typography.Text>
						</Typography.Paragraph>
						{numberRange(5).map(index => (
							<Typography.Paragraph key={index}>
								<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t(longId + ".list.item-" + index)}
							</Typography.Paragraph>
						))}
					</Col>
				</Row>
			</BaseCreateView>
		</Form>
	);
};

export default CreateView;
