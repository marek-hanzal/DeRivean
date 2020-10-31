import {RightCircleOutlined} from "@ant-design/icons";
import {Result, Typography} from "antd";
import {useTranslation} from "react-i18next";
import numberRange from "utils/numberRange";

const BulletCard = (
	{
		translation,
		count,
		icon = <></>
	}) => {
	const {t} = useTranslation();
	return (
		<Result
			icon={icon}
			title={t(translation + ".list.title")}
			style={{paddingTop: 0}}
		>
			{numberRange(count).map(index => (
				<Typography.Paragraph key={index}>
					<RightCircleOutlined style={{color: "#1890ff"}}/>&nbsp;{t(translation + ".list.item-" + index)}
				</Typography.Paragraph>
			))}
		</Result>
	);
};

export default BulletCard;
