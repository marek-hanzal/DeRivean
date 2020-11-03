import {Select} from "antd";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

const SearchInput = ({context, placeholder}) => {
	context = useContext(context);
	const {t} = useTranslation();
	const dispatch = useDispatch();
	const [data, setData] = useState([]);
	const isLoading = useSelector(context.redux.redux.search.selector.isLoading);
	useEffect(() => {
		dispatch(context.redux.redux.search.dispatch.search({search: ""})).then(data => {
			setData(data.items.map(data => ({label: data.name, value: data.id})));
		});
	}, [dispatch]);
	return (
		<Select
			showSearch
			defaultActiveFirstOption={false}
			filterOption={false}
			bordered={false}
			loading={isLoading}
			allowClear
			onSearch={search => {
				dispatch(context.redux.redux.search.dispatch.search({search})).then(data => {
					setData(data.items.map(data => ({label: data.name, value: data.id})));
				});
			}}
			onClear={_ => {
				dispatch(context.redux.redux.search.dispatch.search({search: ""})).then(data => {
					setData(data.items.map(data => ({label: data.name, value: data.id})));
				});
			}
			}
			options={data}
			placeholder={t(`${context.id}.${placeholder}.label`)}
		/>
	);
};

export default SearchInput;
