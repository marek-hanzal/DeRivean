import {Button, Divider, message, Popconfirm, Space} from "antd";
import {DiscoveryContext} from "component/discovery/Discovery";
import CancelEditButton from "component/form/CancelEditButton";
import EditorContext from "component/form/EditorContext";
import SubmitButton from "component/form/SubmitButton";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import Spinner from "component/icon/Spinner";
import {useCleverLink} from "component/route/CleverLink";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {LoadingRedux} from "redux/loading/redux";
import values from "utils/form/values";

const EditorToolbar = (
	{
		currentContext,
		param,
	}) => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const editorContext = useContext(EditorContext);
	const discoveryContext = useContext(DiscoveryContext);
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
							dispatch(LoadingRedux.start());
							currentContext.delete(
								discoveryContext,
								{id: params[param]},
								_ => {
									navigate(cleverLink.link);
									message.success(t(currentContext.id + ".delete.success"));
									dispatch(LoadingRedux.finish());
								},
								() => {
									message.error(t(currentContext.id + ".delete.error"));
									dispatch(LoadingRedux.finish());
								}
							);
						}}
						children={<Button type={"danger"} icon={<DeleteItemIcon/>} children={t(currentContext.id + ".edit.form.delete")}/>}
					/> : null
				}
			</Space> :
			<Button type={"primary"} ghost size={"large"} disabled={editorContext.ready > 0} onClick={() => {
				editorContext.setEditor(true);
				values(editorContext.form, editorContext.initials);
			}} icon={<Spinner done={!editorContext.ready} icon={<EditIcon/>}/>}>{t(currentContext.id + ".edit.form.edit")}</Button>
	);
};

EditorToolbar.propTypes = {
	currentContext: PropTypes.object.isRequired,
	param: PropTypes.string,
};

export default EditorToolbar;
