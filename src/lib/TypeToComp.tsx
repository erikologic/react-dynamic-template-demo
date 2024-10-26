import { SimpleBarChart } from "./chartComponents/SimpleBarChart";
import { SimpleGauge } from "./chartComponents/SimpleGauge";
import { SimpleLineChart } from "./chartComponents/SimpleLineChart";
import { StackedAreaChart } from "./chartComponents/StackedAreaChart";
import { StraightAnglePieChart } from "./chartComponents/StraightAnglePieChart";

export const TypeToComp = {
  gauge: SimpleGauge,
  bar: SimpleBarChart,
  line: SimpleLineChart,
  area: StackedAreaChart,
  pie: StraightAnglePieChart,
};
