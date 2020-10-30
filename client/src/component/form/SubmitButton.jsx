import {Button, Form} from "antd";
import SubmitIcon from "component/icon/SubmitIcon";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import enableSubmit from "utils/form/enableSubmit";

const SubmitButton = ({form, title}) => {
	const {t} = useTranslation();
	return (
		<Form.Item shouldUpdate noStyle>
			{() => (
				<Button
					type={"primary"}
					size={"large"}
					htmlType={"submit"}
					icon={<SubmitIcon/>}
					disabled={enableSubmit(form, false)}
					children={t(title || "common:submit.label")}
				/>
			)}
		</Form.Item>
	);
};

SubmitButton.propTypes = {
	form: PropTypes.any.isRequired,
	title: PropTypes.string,
};

export default SubmitButton;
