import { LineChart, lineElementClasses } from "@mui/x-charts";
import { data } from "../../data";
import { Type, Static } from "@sinclair/typebox";

export const areaChartSchema = Type.Object({
  type: Type.Const("area"),
  props: Type.Object({
    labels: Type.Array(Type.String()),
    fullPage: Type.Optional(Type.Boolean()),
  }),
});

type AreaChartSchema = Static<typeof areaChartSchema>;

export function StackedAreaChart({
  labels,
  fullPage,
}: AreaChartSchema["props"]) {
  return (
    <LineChart
      height={fullPage ? 800 : 300}
      series={labels.map((label) => ({
        label,
        data: data[label],
        area: true,
        stack: "total",
        showMark: false,
      }))}
      xAxis={[{ data: data.xLabels, scaleType: "point" }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: "none",
        },
      }}
    />
  );
}
