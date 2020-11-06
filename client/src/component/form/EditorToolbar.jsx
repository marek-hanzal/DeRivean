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
		form,
		initials,
		translation,
		param,
		redux,
		deletedLink,
	}) => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const editor = useContext(EditorContext);
	const {t} = useTranslation();
	const cleverLink = useCleverLink(deletedLink || {link: () => ""});
	if (!editor) {
		throw new Error("Missing Editor Context!");
	}
	return (
		editor.editor ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton form={form} title={translation + ".edit.form.submit"}/>
				<CancelEditButton form={form} translation={translation} initials={initials}/>
				{deletedLink ?
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
			<Button type={"primary"} ghost size={"large"} disabled={!initials} onClick={() => {
				editor.setEditor(true);
				values(form, initials);
			}} icon={<EditIcon/>}>{t(translation + ".edit.form.edit")}</Button>
	);
};

EditorToolbar.propTypes = {
	form: PropTypes.any.isRequired,
	initials: PropTypes.object,
	translation: PropTypes.string.isRequired,
	param: PropTypes.string.isRequired,
	redux: PropTypes.object.isRequired,
	deletedLink: PropTypes.object,
};

export default EditorToolbar;
