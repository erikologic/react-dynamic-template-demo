import { BarChart } from "@mui/x-charts";
import { data } from "../../data";
import { Type, Static } from '@sinclair/typebox'
import { labelSchema } from "../../labels";

export const barChartSchema = Type.Object({
  type: Type.Const("bar"),
  props: Type.Object({
    labels: Type.Array(labelSchema),
    fullPage: Type.Optional(Type.Boolean())
  }),
}, {
  title: "Bar Chart",
  description: "A simple bar chart",
})

type BarChartSchema = Static<typeof barChartSchema>;

export function SimpleBarChart({ labels, fullPage }: BarChartSchema["props"]) {
  return (
    <BarChart
      height={fullPage ? 800 : 300}
      series={labels.map((label) => ({ label, data: data[label] }))}
      xAxis={[{ data: data.xLabels, scaleType: 'band' }]}
    />
  );
}