import {Button, Form} from "antd";
import SubmitIcon from "component/icon/SubmitIcon";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import enableSubmit from "utils/form/enableSubmit";

const SubmitButton = (
	{
		form,
		title,
		enable,
	}) => {
	const {t} = useTranslation();
	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				<Button
					type={"primary"}
					size={"large"}
					htmlType={"submit"}
					icon={<SubmitIcon/>}
					disabled={!(enable && !enableSubmit(form, false))}
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
