import { Type } from "@sinclair/typebox";
import { charts } from "./lib/chartComponents";

export const jsonSchema = Type.Array(
  Type.Union(charts.map((chart) => chart.jsonSchema)),
);
