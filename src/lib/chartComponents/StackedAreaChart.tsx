import { LineChart, lineElementClasses } from "@mui/x-charts";
import { data } from "../../data";
import { Type, type Static } from '@sinclair/typebox'

const componentConfig = Type.Object({
    type: Type.Const("area"),
    props: Type.Object({
        labels: Type.Array(Type.String()),
        fullPage: Type.Optional(Type.Boolean())
    }),
})

type ComponentConfig = Static<typeof componentConfig>;

export function StackedAreaChart({labels, fullPage}: ComponentConfig["props"]) {
    return (
      <LineChart
        height={fullPage ? 800 : 300}
        series={labels.map((label) => ({label, data: data[label], area: true, stack: 'total', showMark: false }))}
        xAxis={[{ data: data.xLabels, scaleType: 'point' }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            display: 'none',
          },
        }}
      />
    );
  }