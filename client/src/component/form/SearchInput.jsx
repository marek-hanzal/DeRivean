import {Select} from "antd";
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
		dispatch(context.redux.redux.search.dispatch.search({search: ""})).then(data => {
			setData(mapper(data));
		});
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
			}
			}
			// options={data}
			placeholder={t(`${context.id}.${placeholder}.label`)}
			{...props}
		>
			{data.map(item => (
				<Select.Option key={item.id} value={item.id}>
					{render(item)}
				</Select.Option>
			))}
		</Select>
	);
};

export default SearchInput;
