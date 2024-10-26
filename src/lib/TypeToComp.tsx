// import { Component } from "./chartComponents/SimpleBarChart";
// import { Component } from "./chartComponents/SimpleGauge";
// import { Component } from "./chartComponents/SimpleLineChart";
// import { Component } from "./chartComponents/StackedAreaChart";
// import { Component } from "./chartComponents/StraightAnglePieChart";

// export const TypeToComp = {
//   gauge: Component,
//   bar: Component,
//   line: Component,
//   area: Component,
//   pie: Component,
// };

import { charts } from "../lib/chartComponents";

export const TypeToComp = Object.fromEntries(
  charts.map((chart) => [chart.slug, chart.Component]),
);
