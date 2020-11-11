import {Select} from "antd";
import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import EditorContext from "component/form/EditorContext";
import {useContext, useEffect, useRef, useState} from "react";
import {GlobalHotKeys} from "react-hotkeys";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import Events from "utils/Events";

const SearchInput = (
	{
		context,
		placeholder,
		mapper = null,
		render,
		hotkey,
		...props
	}) => {
	const currentContext = useContext(context);
	const {t} = useTranslation();
	const ref = useRef();
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const editorContext = useContext(EditorContext);
	const discoveryContext = useContext(DiscoveryContext);
	mapper = mapper || (data => data.items.map(item => ({
		label: item.name,
		value: item.id, ...item
	})));
	render = render || (item => item.name);

	function search(search = "") {
		setLoading(true);
		currentContext.search(
			discoveryContext,
			{search},
			Events()
				.on("success", data => {
					setData(mapper(data));
					setLoading(false);
				})
				.on("error", () => {
					setLoading(false);
				}),
			navigate,
		);
	}

	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		currentContext.search(
			discoveryContext,
			{search: ""},
			Events()
				.on("success", data => {
					setData(mapper(data));
					if (editorContext) {
						editorContext.isReady();
					}
					setLoading(false);
				})
				.on("error", () => {
					setLoading(false);
				}),
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);

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
				onSearch={search}
				onClear={_ => search()}
				onChange={_ => search()}
				placeholder={t(`${currentContext.id}.${placeholder}.label`)}
				{...props}
				children={data.map(item => (
					<Select.Option key={item.id} value={item.id} item={item}>
						{render(item)}
					</Select.Option>
				))}
			/>
		</GlobalHotKeys>
	);
};

export default SearchInput;
