import { BarChart } from "@mui/x-charts";
import { data } from "../../data";
import { Type, Static } from "@sinclair/typebox";
import { labelSchema } from "../../labels";

export const slug = "bar";

export const jsonSchema = Type.Object(
  {
    type: Type.Literal(slug),
    props: Type.Object(
      {
        labels: Type.Array(labelSchema, {
          minItems: 1,
          maxItems: 3,
          title: "Bar Chart Labels",
          description: "The labels to display on the bar chart",
        }),
        fullWidth: Type.Optional(
          Type.Boolean({ title: "Should the chart occupy the full width?" }),
        ),
      },
      {
        title: "Bar Chart Properties",
      },
    ),
  },
  {
    title: "Bar Chart",
    description: "A simple bar chart",
  },
);

type BarChartSchema = Static<typeof jsonSchema>;

export function Component({ labels, fullWidth }: BarChartSchema["props"]) {
  return (
    <BarChart
      height={fullWidth ? 800 : 300}
      series={labels.map((label) => ({ label, data: data[label] }))}
      xAxis={[{ data: data.xLabels, scaleType: "band" }]}
    />
  );
}
