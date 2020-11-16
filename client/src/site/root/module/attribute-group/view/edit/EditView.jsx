import {Card, Descriptions} from "antd";
import ModuleContext from "component/ModuleContext";
import {useTranslation} from "react-i18next";
import CommonEditView from "site/common/view/CommonEditView";
import DescriptionInput from "site/root/module/attribute-group/component/form/DescriptionInput";
import AttributeGroupView from "site/root/module/attribute-group/view/AttributeGroupView";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<AttributeGroupView>
			<ModuleContext.Consumer>
				{(moduleContext) => (
					<CommonEditView
						defaultEnableSubmit={true}
					>
						<Card title={t(`${moduleContext.id}.attribute-group.title`)}>
							<Descriptions size={"small"} bordered>
								<Descriptions.Item label={t(`${moduleContext.id}.description.label`)}>
									<DescriptionInput/>
								</Descriptions.Item>
							</Descriptions>
						</Card>
					</CommonEditView>
				)}
			</ModuleContext.Consumer>
		</AttributeGroupView>
	);
};

export default EditView;
