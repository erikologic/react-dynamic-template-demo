import { LineChart } from "@mui/x-charts";
import { data } from "../../data";
import { Type, type Static } from '@sinclair/typebox'

const componentConfig = Type.Object({
    type: Type.Const("line"),
    props: Type.Object({
        labels: Type.Array(Type.String()),
        fullPage: Type.Optional(Type.Boolean())
    }),
})

type ComponentConfig = Static<typeof componentConfig>;

export function SimpleLineChart({labels, fullPage}: ComponentConfig["props"]) {
    return (
      <LineChart
        height={fullPage ? 800 : 300}
        series={labels.map((label) => ({label, data: data[label]}))}
        xAxis={[{ data: data.xLabels, scaleType: 'point' }]}
      />
    );
  }
  