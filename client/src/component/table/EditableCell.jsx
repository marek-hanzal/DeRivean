const EditableCell = ({record, value, editor}) => {
	return (
		record.editable ?
			editor() :
			value()
	);
};

export default EditableCell;
