import {Button, Divider, Space} from "antd";
import CancelEditButton from "component/form/CancelEditButton";
import SubmitButton from "component/form/SubmitButton";
import EditIcon from "component/icon/EditIcon";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

const EditSubmitButtons = (
	{
		edit,
		form,
		setEdit,
		initials,
		translation,
	}) => {
	const {t} = useTranslation();

	return (
		edit ?
			<Space split={<Divider type={"vertical"}/>}>
				<SubmitButton form={form} title={translation + ".edit.form.submit"}/>
				<CancelEditButton form={form} setEdit={setEdit} translation={translation} initials={initials}/>
			</Space> :
			<Button type={"primary"} ghost size={"large"} disabled={!initials} onClick={() => setEdit(true)} icon={<EditIcon/>}>{t(translation + ".edit.form.edit")}</Button>
	);
};

EditSubmitButtons.propTypes = {
	edit: PropTypes.bool.isRequired,
	form: PropTypes.any.isRequired,
	setEdit: PropTypes.func.isRequired,
	initials: PropTypes.object,
	translation: PropTypes.string.isRequired,
};

export default EditSubmitButtons;
