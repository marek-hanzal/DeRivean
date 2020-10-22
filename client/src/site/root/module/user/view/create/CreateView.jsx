import {UserOutlined} from "@ant-design/icons";
import {Button, Card, Col, Input, Result, Row} from "antd";
import CreateIcon from "component/icon/CreateIcon";
import React, {createElement} from "react";
import {withTranslation} from "react-i18next";

const CreateView = (
	{
		t,
		root,
		translation,
		view,
	}) => createElement(
	view,
	{
		open: [root],
		selected: [`${root}/create`],
	},
	<Card title={t(`${translation}.create.title`)}>
		<Result
			icon={<CreateIcon/>}
			subTitle={
				<Row justify={"center"}>
					<Col span={6}>
						<Input addonBefore={"[user name]"} size={"large"} allowClear prefix={<UserOutlined/>}/>
					</Col>
				</Row>
			}>
			<div>
				// ... rest of fields
			</div>
			<Button type={"primary"}>[Submit]</Button>
		</Result>
	</Card>
);

export default withTranslation()(CreateView);
