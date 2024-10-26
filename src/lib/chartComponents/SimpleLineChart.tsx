import { LineChart } from "@mui/x-charts";
import { data } from "../../data";
import { Type, Static } from "@sinclair/typebox";

export const lineChartSchema = Type.Object({
  type: Type.Const("line"),
  props: Type.Object({
    labels: Type.Array(Type.String()),
    fullPage: Type.Optional(Type.Boolean()),
  }),
});

type LineChartSchema = Static<typeof lineChartSchema>;

export function SimpleLineChart({
  labels,
  fullPage,
}: LineChartSchema["props"]) {
  return (
    <LineChart
      height={fullPage ? 800 : 300}
      series={labels.map((label) => ({ label, data: data[label] }))}
      xAxis={[{ data: data.xLabels, scaleType: "point" }]}
    />
  );
}
