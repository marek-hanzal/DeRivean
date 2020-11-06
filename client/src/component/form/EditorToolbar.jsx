import {Button, Divider, message, Popconfirm, Space} from "antd";
import CancelEditButton from "component/form/CancelEditButton";
import EditorContext from "component/form/EditorContext";
import SubmitButton from "component/form/SubmitButton";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import {useCleverLink} from "component/route/CleverLink";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router";
import values from "utils/form/values";

const EditorToolbar = (
	{
		translation,
		param,
		redux,
		deletedLink,
	}) => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const editorContext = useContext(EditorContext);
	const {t} = useTranslation();
	const cleverLink = useCleverLink(deletedLink || {link: () => ""});
	if (!editorContext) {
		throw new Error("Missing Editor Context!");
	}
	return (
		editorContext.editor ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton title={translation + ".edit.form.submit"}/>
				<CancelEditButton translation={translation}/>
				{deletedLink && redux && param ?
					<Popconfirm
						okText={t("common.yes")}
						cancelText={t("common.no")}
						title={t(translation + ".edit.form.deleteConfirm")}
						onConfirm={() => {
							dispatch(redux.redux.delete.dispatch.delete({id: params[param]})).then(_ => {
								message.success(t(translation + ".delete.success"));
								setTimeout(() => navigate(cleverLink.link), 0);
							}, () => {
								message.error(t(translation + ".delete.error"));
							});
						}}
						children={<Button type={"danger"} icon={<DeleteItemIcon/>} children={t(translation + ".edit.form.delete")}/>}
					/> : null
				}
			</Space> :
			<Button type={"primary"} ghost size={"large"} disabled={!editorContext.initials} onClick={() => {
				editorContext.setEditor(true);
				values(editorContext.form, editorContext.initials);
			}} icon={<EditIcon/>}>{t(translation + ".edit.form.edit")}</Button>
	);
};

EditorToolbar.propTypes = {
	translation: PropTypes.string.isRequired,
	param: PropTypes.string,
	redux: PropTypes.object,
	deletedLink: PropTypes.object,
};

export default EditorToolbar;
