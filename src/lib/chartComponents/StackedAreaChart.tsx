import { LineChart, lineElementClasses } from "@mui/x-charts";
import { data } from "../../data";
import { Type, Static } from "@sinclair/typebox";
import { labelSchema } from "../../labels";

export const slug = "area";

export const jsonSchema = Type.Object(
  {
    type: Type.Literal(slug),
    props: Type.Object(
      {
        labels: Type.Array(labelSchema, {
          minItems: 1,
          maxItems: 3,
          title: "Area Chart Labels",
          description: "The labels to display on the area chart",
        }),
        fullPage: Type.Optional(
          Type.Boolean({
            title: "Should the chart occupy the full page?",
          }),
        ),
      },
      {
        title: "Area Chart Properties",
      },
    ),
  },
  {
    title: "Area Chart",
    description: "A simple area chart",
  },
);

type AreaChartSchema = Static<typeof jsonSchema>;

export function Component({ labels, fullPage }: AreaChartSchema["props"]) {
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
