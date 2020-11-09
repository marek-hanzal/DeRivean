import { Select } from "antd";
import EditorContext from "component/form/EditorContext";
import {
	useContext,
	useRef,
	useState
} from "react";
import { GlobalHotKeys } from "react-hotkeys";
import { useTranslation } from "react-i18next";
import { useStore } from "react-redux";
import { useNavigate } from "react-router";
import { doSearch } from "redux/search/redux";

const SearchInput = (
	{
		context,
		placeholder,
		mapper = null,
		render,
		hotkey,
		...props
	}) => {
	const currentContext        = useContext(context);
	const {t}                   = useTranslation();
	const ref                   = useRef();
	const navigate              = useNavigate();
	const [data, setData]       = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen]       = useState(false);
	const editorContext         = useContext(EditorContext);
	const store                 = useStore();
	mapper                      = mapper || (data => data.items.map(item => ({
		label: item.name,
		value: item.id, ...item
	})));
	render                      = render || (item => item.name);
	currentContext.search(
		{search: ""},
		data => {
			setData(mapper(data));
			if (editorContext) {
				editorContext.isReady();
			}
			setLoading(false);
		}, () => {
			setLoading(false);
		}
	);
	return (
		<GlobalHotKeys keyMap={{
			search: hotkey,
		}} handlers={{
			search: _ => {
				ref.current.focus();
			}
		}}>
			<Select
				ref={ref}
				showSearch
				defaultActiveFirstOption={false}
				open={open}
				onFocus={() => setOpen(true)}
				onBlur={() => setOpen(false)}
				filterOption={false}
				loading={loading}
				allowClear
				onSearch={search => {
					doSearch(store.getState(), {search}, data => {
						setData(mapper(data));
					}, null, null, null, navigate);
				}}
				onClear={_ => {
					doSearch(store.getState(), {search: ""}, data => {
						setData(mapper(data));
					}, null, null, null, navigate);
				}}
				onChange={_ => {
					doSearch(store.getState(), {search: ""}, data => {
						setData(mapper(data));
					}, null, null, null, navigate);
				}}
				placeholder={t(`${currentContext.id}.${placeholder}.label`)}
				{...props}
			>
				{data.map(item => (
					<Select.Option key={item.id} value={item.id} item={item}>
						{render(item)}
					</Select.Option>
				))}
			</Select>
		</GlobalHotKeys>
	);
};

export default SearchInput;
