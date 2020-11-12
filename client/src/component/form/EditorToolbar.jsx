import {Button, Divider, message, Popconfirm, Space} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import CancelEditButton from "component/form/CancelEditButton";
import EditorContext from "component/form/EditorContext";
import SubmitButton from "component/form/SubmitButton";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import ModuleContext from "component/ModuleContext";
import {useCleverLink} from "component/route/CleverLink";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";
import values from "utils/form/values";

const EditorToolbar = () => {
	const params = useParams();
	const navigate = useNavigate();
	const editorContext = useContext(EditorContext);
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
	const moduleContext = useContext(ModuleContext);
	const {t} = useTranslation();
	const cleverLink = useCleverLink(moduleContext.link.dashboard || {link: () => ""});
	if (!editorContext) {
		throw new Error("Missing Editor Context!");
	}
	return (
		editorContext.editor ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton title={moduleContext.id + ".edit.form.submit"}/>
				<CancelEditButton translation={moduleContext.id}/>
				{moduleContext.delete ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(moduleContext.id + ".edit.form.deleteConfirm")}
						onConfirm={() => {
							layoutContext.loadingStart();
							moduleContext.delete(
								discoveryContext,
								{id: params[moduleContext.param]},
								Events()
									.on("success", _ => {
										navigate(cleverLink.link);
										message.success(t(moduleContext.id + ".delete.success"));
										layoutContext.loadingFinish();
									})
									.on("error", () => {
										message.error(t(moduleContext.id + ".delete.error"));
										layoutContext.loadingFinish();
									})
							);
						}}
						children={<Button type={"danger"} icon={<DeleteItemIcon/>} children={t(moduleContext.id + ".edit.form.delete")}/>}
					/> : null
				}
			</Space> :
			<Button
				type={"primary"}
				ghost
				size={"large"}
				disabled={editorContext.ready > 0}
				onClick={() => {
					editorContext.setEditor(true);
					values(editorContext.form, editorContext.initials);
				}}
				icon={<Spinner done={!editorContext.ready} icon={<EditIcon/>}/>}
				children={t(moduleContext.id + ".edit.form.edit")}
			/>
	);
};

export default EditorToolbar;
