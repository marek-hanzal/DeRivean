import {Card, Descriptions} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import CommonEditView from "site/common/view/CommonEditView";
import DescriptionInput from "site/root/module/attribute-type/component/form/DescriptionInput";
import AttributeTypeView from "site/root/module/attribute-type/view/AttributeTypeView";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<AttributeTypeView>
			<ModuleContext.Consumer>
				{(moduleContext) => (
					<CommonEditView
						defaultEnableSubmit={true}
					>
						<Card title={t(`${moduleContext.id}.attribute-type.title`)}>
							<Descriptions size={"small"} bordered>
								<Descriptions.Item label={t(`${moduleContext.id}.description.label`)}>
									<DescriptionInput/>
								</Descriptions.Item>
							</Descriptions>
						</Card>
					</CommonEditView>
				)}
			</ModuleContext.Consumer>
		</AttributeTypeView>
	);
};

export default EditView;
