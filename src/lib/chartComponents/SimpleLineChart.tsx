import { LineChart } from "@mui/x-charts";
import { data } from "../../data";
import { Type, Static } from "@sinclair/typebox";
import { labelSchema } from "../../labels";

export const slug = "line";

export const jsonSchema = Type.Object(
  {
    type: Type.Literal("line"),
    props: Type.Object({
      labels: Type.Array(labelSchema),
      fullPage: Type.Optional(
        Type.Boolean({
          title: "Should the chart occupy the full page?",
        }),
      ),
    }),
  },
  {
    title: "Line Chart",
    description: "A simple line chart",
  },
);

type LineChartSchema = Static<typeof jsonSchema>;

export function Component({ labels, fullPage }: LineChartSchema["props"]) {
  return (
    <LineChart
      height={fullPage ? 800 : 300}
      series={labels.map((label) => ({ label, data: data[label] }))}
      xAxis={[{ data: data.xLabels, scaleType: "point" }]}
    />
  );
}
