import {Form, message, Radio, Skeleton} from "antd";
import EditorContext from "component/form/EditorContext";
import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useServerSites} from "redux/server/redux";
import UserContext from "site/root/module/user/component/UserContext";
import validationFor from "utils/form/validationFor";

const SiteInput = () => {
	const {t} = useTranslation();
	const userContext = useContext(UserContext);
	const editorContext = useContext(EditorContext);
	const [sites, setSites] = useState();
	useServerSites(
		sites => setSites(sites.sites),
		error => {
			if (error.cancel) {
				return;
			}
			message.error(t("root.server.error.cannot-fetch-sites"));
		}
	);
	return (
		<Form.Item
			{...validationFor("site", editorContext.errors, t)}
			name={"site"}
			label={t(`${userContext.id}.form.site.label`)}
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
