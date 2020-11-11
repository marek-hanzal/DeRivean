import {Button, Divider, message, Popconfirm, Space} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import CancelEditButton from "component/form/CancelEditButton";
import EditorContext from "component/form/EditorContext";
import SubmitButton from "component/form/SubmitButton";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import {LayoutContext} from "component/layout/BaseLayout";
import {useCleverLink} from "component/route/CleverLink";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router";
import Events from "utils/Events";
import values from "utils/form/values";

const EditorToolbar = (
	{
		currentContext,
		param,
	}) => {
	const params = useParams();
	const navigate = useNavigate();
	const editorContext = useContext(EditorContext);
	const discoveryContext = useContext(DiscoveryContext);
	const layoutContext = useContext(LayoutContext);
	const {t} = useTranslation();
	const cleverLink = useCleverLink(currentContext.link.dashboard || {link: () => ""});
	if (!editorContext) {
		throw new Error("Missing Editor Context!");
	}
	return (
		editorContext.editor ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton title={currentContext.id + ".edit.form.submit"}/>
				<CancelEditButton translation={currentContext.id}/>
				{currentContext.delete && param ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(currentContext.id + ".edit.form.deleteConfirm")}
						onConfirm={() => {
							layoutContext.loadingStart();
							currentContext.delete(
								discoveryContext,
								{id: params[param]},
								Events()
									.on("success", _ => {
										navigate(cleverLink.link);
										message.success(t(currentContext.id + ".delete.success"));
										layoutContext.loadingFinish();
									})
									.on("error", () => {
										message.error(t(currentContext.id + ".delete.error"));
										layoutContext.loadingFinish();
									})
							);
						}}
						children={<Button type={"danger"} icon={<DeleteItemIcon/>} children={t(currentContext.id + ".edit.form.delete")}/>}
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
				children={t(currentContext.id + ".edit.form.edit")}
			/>
	);
};

EditorToolbar.propTypes = {
	currentContext: PropTypes.object.isRequired,
	param: PropTypes.string,
};

export default EditorToolbar;
