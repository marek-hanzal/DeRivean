import {Form, message, Radio, Skeleton} from "antd";
import EditorContext from "component/form/EditorContext";
import ModuleContext from "component/ModuleContext";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerSites} from "site/root/hook/hook";
import Events from "utils/Events";
import validationFor from "utils/form/validationFor";

const SiteInput = () => {
	const {t} = useTranslation();
	const moduleContext = useContext(ModuleContext);
	const editorContext = useContext(EditorContext);
	const [sites, setSites] = useState();
	useServerSites(
		Events()
			.on("success", sites => {
				setSites(sites.sites);
				editorContext.setEnableSubmit(true);
				editorContext.isReady();
			})
			.on("error", () => {
				message.error(t("root.server.error.cannot-fetch-sites"));
			})
	);
	return (
		<Form.Item
			{...validationFor("site", editorContext.errors, t)}
			name={"site"}
			label={t(`${moduleContext.id}.form.site.label`)}
			children={
				sites ?
					<Radio.Group disabled={!editorContext.editor}>
						{sites.map(site => <Radio.Button key={site || "null"} value={site || undefined} children={t("root.site." + site)}/>)}
					</Radio.Group> :
					<Skeleton.Input style={{width: "240px"}} active/>
			}
		/>
	);
};

export default SiteInput;
