import * as SimpleLineChart from "./SimpleLineChart";
import * as SimpleGauge from "./SimpleGauge";
import * as SimpleBarChart from "./SimpleBarChart";
import * as StackedAreaChart from "./StackedAreaChart";

export const charts = [
  SimpleLineChart,
  SimpleGauge,
  SimpleBarChart,
  StackedAreaChart,
] as const;
