import {Button, Divider, message, Popconfirm, Space} from "antd";
import CancelEditButton from "component/form/CancelEditButton";
import SubmitButton from "component/form/SubmitButton";
import DeleteItemIcon from "component/icon/DeleteItemIcon";
import EditIcon from "component/icon/EditIcon";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import SessionRedux from "redux/session/redux";
import values from "utils/form/values";

const EditSubmitButtons = (
	{
		edit,
		form,
		setEdit,
		initials,
		translation,
		enableSubmit,
		param,
		redux,
	}) => {
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const history = useSelector(SessionRedux.selector.getHistory);
	const {t} = useTranslation();

	return (
		edit ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton enable={enableSubmit} form={form} title={translation + ".edit.form.submit"}/>
				<CancelEditButton form={form} setEdit={setEdit} translation={translation} initials={initials}/>
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
				setEdit(true);
				values(form, initials);
			}} icon={<EditIcon/>}>{t(translation + ".edit.form.edit")}</Button>
	);
};

EditSubmitButtons.propTypes = {
	edit: PropTypes.bool.isRequired,
	form: PropTypes.any.isRequired,
	setEdit: PropTypes.func.isRequired,
	initials: PropTypes.object,
	translation: PropTypes.string.isRequired,
	enableSubmit: PropTypes.any.isRequired,
	param: PropTypes.string.isRequired,
	redux: PropTypes.object.isRequired,
};

export default EditSubmitButtons;
