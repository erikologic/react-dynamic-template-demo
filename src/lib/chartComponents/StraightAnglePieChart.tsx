import { PieChart } from "@mui/x-charts";
import { getLatest } from "../helpers";
import { Type, type Static } from "@sinclair/typebox";
import { labelSchema } from "../../labels";

export const pieChartSchema = Type.Object({
  type: Type.Const("pie"),
  props: Type.Object({
    labels: Type.Array(labelSchema, {
      title: "Pie Chart Labels",
      description: "The labels to display on the pie chart",
    }),
    fullPage: Type.Optional(
      Type.Boolean({
        title: "Should the chart occupy the full page?",
      }),
    ),
  }),
});

type PieChartSchema = Static<typeof pieChartSchema>;

export function StraightAnglePieChart({
  labels,
  fullPage,
}: PieChartSchema["props"]) {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}`,
          startAngle: -90,
          endAngle: 90,
          data: labels.map((label) => ({ label, value: getLatest(label) })),
        },
      ]}
      height={fullPage ? 800 : 300}
    />
  );
}
