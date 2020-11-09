import {Button, Form} from "antd";
import EditorContext from "component/form/EditorContext";
import Spinner from "component/icon/Spinner";
import SubmitIcon from "component/icon/SubmitIcon";
import PropTypes from "prop-types";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import enableSubmit from "utils/form/enableSubmit";

const SubmitButton = (
	{
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
					icon={<Spinner done={!editorContext.ready} icon={<SubmitIcon/>}/>}
					disabled={!(!editorContext.ready && editorContext.enableSubmit && enableSubmit(editorContext.form, false))}
					children={t(title || "common.submit")}
				/>
			)}
		</Form.Item>
	);
};

SubmitButton.propTypes = {
	title: PropTypes.string,
	enable: PropTypes.any,
};

export default SubmitButton;
