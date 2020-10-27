import {PlusOutlined} from "@ant-design/icons";
import {Button, Cascader, Form, Input, InputNumber, List, Popconfirm} from "antd";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import {useTranslation} from "react-i18next";

const cascader = [
	{
		label: "Resources",
		value: "resources",
		children: [
			{
				label: "Gold",
				value: "gold",
			},
			{
				label: "Stone",
				value: "stone",
			},
			{
				label: "Wood",
				value: "wood",
			},
			{
				label: "Food",
				value: "food",
			},
		],
	},
	{
		label: "Other",
		value: "other",
		children: [
			{
				label: "Maximum Heroes",
				value: "max-heroes",
			}
		]
	}
];

const AttributeFields = ({translation}) => {
	const {t} = useTranslation();

	return (
		<Form.List
			name="attributes"
		>
			{(fields, {add, remove}) => (
				<List>
					{fields.map(field => (
						<List.Item key={field.key}>
							<Input.Group style={{display: "flex"}}>
								<Form.Item
									{...field}
									key={field.key + ".attribute"}
									name={[field.name, "attribute"]}
									fieldKey={[field.fieldKey, "attribute"]}
									rules={[{required: true, message: t(translation + ".form.attribute.name.required")}]}
									style={{width: "60%", marginBottom: 0}}
								>
									<Cascader
										options={cascader}
										placeholder={t(translation + ".form.attribute.name.hint")}
										expandTrigger={"hover"}
										showSearch={{filter: (inputValue, path) => path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)}}

									/>
								</Form.Item>
								<Form.Item
									{...field}
									key={field.key + ".value"}
									name={[field.name, "value"]}
									fieldKey={[field.fieldKey, "value"]}
									rules={[{required: true, message: t(translation + ".form.attribute.value.required")}]}
									style={{width: "35%", marginBottom: 0}}
								>
									<InputNumber
										step={10}
										placeholder={t(translation + ".form.attribute.value.hint")}
										style={{width: "100%"}}
									/>
								</Form.Item>
							</Input.Group>
							<Popconfirm
								okText={t("common.yes")}
								cancelText={t("common.no")}
								icon={<DeleteItemIcon/>}
								title={t(translation + ".form.attribute.deleteConfirm")}
								onConfirm={() => remove(field.name)}
							>
								<Button style={{alignSelf: "start", marginTop: 4}} size={"small"} type={"danger"} ghost shape={"circle"} icon={<DeleteItemIcon/>}/>
							</Popconfirm>
						</List.Item>
					))}
					<List.Item>
						<Button
							type="dashed"
							onClick={() => add()}
							icon={<PlusOutlined/>}
							children={t(translation + ".form.attribute.add.label")}
							style={{width: "100%"}}
						/>
					</List.Item>
				</List>
			)}
		</Form.List>
	);
};

export default AttributeFields;
