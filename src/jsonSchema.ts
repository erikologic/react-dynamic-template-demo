import { Type } from "@sinclair/typebox";
import { barChartSchema } from "./lib/chartComponents/SimpleBarChart";
import { gaugeSchema } from "./lib/chartComponents/SimpleGauge";
import { lineChartSchema } from "./lib/chartComponents/SimpleLineChart";
import { areaChartSchema } from "./lib/chartComponents/StackedAreaChart";
import { pieChartSchema } from "./lib/chartComponents/StraightAnglePieChart";

export const jsonSchema = Type.Array(
  Type.Union([
    barChartSchema,
    gaugeSchema,
    lineChartSchema,
    areaChartSchema,
    pieChartSchema,
  ]),
);
