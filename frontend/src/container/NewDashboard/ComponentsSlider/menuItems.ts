import TimeSeries from 'assets/Dashboard/TimeSeries';
import ValueIcon from 'assets/Dashboard/Value';
import { TimeSeriesProps as IconProps } from 'assets/Dashboard/TimeSeries';

const Items: ItemsProps[] = [
	{
		name: 'TIME_SERIES',
		Icon: TimeSeries,
		display: 'Time Series',
	},
	{
		name: 'VALUE',
		Icon: ValueIcon,
		display: 'Value',
	},
];

export type ITEMS = 'TIME_SERIES' | 'VALUE';

interface ItemsProps {
	name: ITEMS;
	Icon: (props: IconProps) => JSX.Element;
	display: string;
}

export default Items;
