import { PieChart } from "@mui/x-charts";
import { LabelsProps } from "../type";
import { getLatest } from "./helpers";

export default function StraightAnglePieChart({labels, fullPage}: LabelsProps) {
    return (
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}`,
            startAngle: -90,
            endAngle: 90,
            data: labels.map((label) => ({label, value: getLatest(label) }))
          },
        ]}
        height={fullPage ? 800 : 300}
      />
    );
  }
  