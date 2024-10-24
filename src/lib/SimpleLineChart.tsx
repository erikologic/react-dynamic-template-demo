import { LineChart } from "@mui/x-charts";
import { data } from "../data";
import { LabelsProps } from "../type";

export default function SimpleLineChart({labels, fullPage}: LabelsProps) {
    return (
      <LineChart
        height={fullPage ? 800 : 300}
        series={labels.map((label) => ({label, data: data[label]}))}
        xAxis={[{ data: data.xLabels, scaleType: 'point' }]}
      />
    );
  }
  