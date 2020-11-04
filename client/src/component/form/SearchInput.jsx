import {Select} from "antd";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

const SearchInput = (
	{
		context,
		placeholder,
		mapper = null,
		render,
		...props
	}) => {
	context = useContext(context);
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const isLoading = useSelector(context.redux.redux.search.selector.isLoading);
	mapper = mapper || (data => data.items.map(item => ({label: item.name, value: item.id, ...item})));
	render = render || (item => item.name);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		dispatch(context.redux.redux.search.dispatch.search({search: ""}, cancelToken)).then(data => {
			setData(mapper(data));
		}, () => {
		});
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch]);
	return (
		<Select
			showSearch
			defaultActiveFirstOption={false}
			filterOption={false}
			loading={isLoading}
			allowClear
			onSearch={search => {
				dispatch(context.redux.redux.search.dispatch.search({search})).then(data => {
					setData(mapper(data));
				});
			}}
			onClear={_ => {
				dispatch(context.redux.redux.search.dispatch.search({search: ""})).then(data => {
					setData(mapper(data));
				});
			}}
			onChange={_ => {
				dispatch(context.redux.redux.search.dispatch.search({search: ""})).then(data => {
					setData(mapper(data));
				});
			}}
			placeholder={t(`${context.id}.${placeholder}.label`)}
			{...props}
		>
			{data.map(item => (
				<Select.Option key={item.id} value={item.id} item={item}>
					{render(item)}
				</Select.Option>
			))}
		</Select>
	);
};

export default SearchInput;
