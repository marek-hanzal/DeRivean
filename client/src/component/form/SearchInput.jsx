import {Events, useAppContext, useModuleContext} from "@leight-core/leight";
import {Select} from "antd";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import EditorContext from "./EditorContext";

const SearchInput = (
	{
		placeholder,
		mapper = null,
		render,
		hotkey,
		...props
	}) => {
	const moduleContext = useModuleContext();
	const {t} = useTranslation();
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const editorContext = useContext(EditorContext);
	const appContext = useAppContext();
	mapper = mapper || (data => data.items.map(item => ({
		label: item.name,
		value: item.id, ...item
	})));
	render = render || (item => item.name);

	function search(search = "") {
		setLoading(true);
		moduleContext.search(
			appContext,
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
		moduleContext.search(
			appContext,
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
		<Select
			showSearch
			defaultActiveFirstOption={false}
			filterOption={false}
			loading={loading}
			allowClear
			onSearch={search}
			onClear={_ => search()}
			onChange={_ => search()}
			placeholder={t(`${moduleContext.id}.${placeholder}.label`)}
			{...props}
			children={data.map(item => (
				<Select.Option key={item.id} value={item.id} item={item}>
					{render(item)}
				</Select.Option>
			))}
		/>
	);
};

export default SearchInput;
