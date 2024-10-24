import { LineChart, lineElementClasses } from "@mui/x-charts";
import { data } from "../data";
import { LabelsProps } from "../type";

export default function StackedAreaChart({labels, fullPage}: LabelsProps) {
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