import {Button, Divider, message, Popconfirm, Space} from "antd";
import CancelEditButton from "component/form/CancelEditButton";
import EditorContext from "component/form/EditorContext";
import SubmitButton from "component/form/SubmitButton";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {SessionRedux} from "redux/session/redux";
import values from "utils/form/values";

const EditSubmitButtons = (
	{
		form,
		initials,
		translation,
		param,
		redux,
	}) => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const history = useSelector(SessionRedux.selector.getHistory);
	const editor = useContext(EditorContext);
	const {t} = useTranslation();
	if (!editor) {
		throw new Error("Missing Editor Context!");
	}

	return (
		editor.editor ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton form={form} title={translation + ".edit.form.submit"}/>
				<CancelEditButton form={form} translation={translation} initials={initials}/>
				<Popconfirm
					okText={t("common.yes")}
					cancelText={t("common.no")}
					title={t(translation + ".edit.form.deleteConfirm")}
					onConfirm={() => {
						dispatch(redux.redux.delete.dispatch.delete({id: params[param]})).then(_ => {
							message.success(t(translation + ".delete.success"));
							navigate(history.pop() || -1);
							dispatch(SessionRedux.history(history));
						}, () => {
							message.error(t(translation + ".delete.error"));
						});
					}}
				>
					<Button type={"danger"} icon={<DeleteItemIcon/>} children={t(translation + ".edit.form.delete")}/>
				</Popconfirm>
			</Space> :
			<Button type={"primary"} ghost size={"large"} disabled={!initials} onClick={() => {
				editor.setEditor(true);
				values(form, initials);
			}} icon={<EditIcon/>}>{t(translation + ".edit.form.edit")}</Button>
	);
};

EditSubmitButtons.propTypes = {
	form: PropTypes.any.isRequired,
	initials: PropTypes.object,
	translation: PropTypes.string.isRequired,
	param: PropTypes.string.isRequired,
	redux: PropTypes.object.isRequired,
};

export default EditSubmitButtons;
