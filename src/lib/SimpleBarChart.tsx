import { BarChart } from "@mui/x-charts";
import { data } from "../data";
import { LabelsProps } from "../type";

export function SimpleBarChart({labels, fullPage}: LabelsProps) {
    return (
      <BarChart
        height={fullPage ? 800 : 300}
        series={labels.map((label) => ({label, data: data[label]}))}
        xAxis={[{ data: data.xLabels, scaleType: 'band' }]}
      />
    );
  }