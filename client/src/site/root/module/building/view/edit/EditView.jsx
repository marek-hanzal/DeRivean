import {Card, Descriptions} from "antd";
import ModuleContext from "component/ModuleContext";
import moment from "moment";
import {useTranslation} from "react-i18next";
import CommonEditView from "site/common/view/CommonEditView";
import BuildInput from "site/root/module/building/component/form/BuildInput";
import BuildingView from "site/root/module/building/view/BuildingView";

const EditView = () => {
	const {t} = useTranslation();
	return (
		<BuildingView>
			<ModuleContext.Consumer>
				{(moduleContext) => (
					<CommonEditView
						defaultEnableSubmit={true}
						inputMapper={values => ({...values, build: values.build ? moment(values.build) : null})}
					>
						<Card title={t(`${moduleContext.id}.building.title`)}>
							<Descriptions size={"small"} bordered>
								<Descriptions.Item label={t(`${moduleContext.id}.build.label`)}>
									<BuildInput/>
								</Descriptions.Item>
							</Descriptions>
						</Card>
					</CommonEditView>
				)}
			</ModuleContext.Consumer>
		</BuildingView>
	);
};

export default EditView;
