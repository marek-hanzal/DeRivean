import {Button, Form} from "antd";
import EditorContext from "component/form/EditorContext";
import SubmitIcon from "component/icon/SubmitIcon";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import enableSubmit from "utils/form/enableSubmit";

const SubmitButton = (
	{
		form,
		title,
	}) => {
	const {t} = useTranslation();
	const editorContext = useContext(EditorContext);
	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				<Button
					type={"primary"}
					size={"large"}
					htmlType={"submit"}
					icon={<SubmitIcon/>}
					disabled={!(editorContext.enableSubmit && !enableSubmit(form, false))}
					children={t(title || "common.submit")}
				/>
			)}
		</Form.Item>
	);
};

SubmitButton.propTypes = {
	form: PropTypes.any.isRequired,
	title: PropTypes.string,
	enable: PropTypes.any,
};

export default SubmitButton;
