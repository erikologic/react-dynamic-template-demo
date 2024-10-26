import { Static } from "@sinclair/typebox";
import { charts } from "../lib/chartComponents";

// Types of the charts array...
type ChartDefinitions = typeof charts;
// ...converted into a union type
export type ChartDefinition = ChartDefinitions[number];

// Union type of the chart slugs
// e.g. "line" | "bar" | ...
export type Type = ChartDefinition["slug"];

// Maps the chart slug to the chart definition
// e.g. { line: { slug: "line", jsonSchema: ..., Component: ... }, ... }
export type TypeToChartDefinition = {
  [K in Type]: Extract<ChartDefinition, { slug: K }>;
};

// Maps the chart slug to the chart configuration
// e.g. { line: { type: "line", props: ... }, ... }
export type TypeToChartConfig = {
  [K in Type]: Static<TypeToChartDefinition[K]["jsonSchema"]>;
};

// Utility type to ensure a chart component is passed the correct props
// e.g. [K as "line"] = (props: { labels: string[], fullPage?: boolean }) => React.ReactElement
export type ChartComponent<K extends Type> = (
  props: TypeToChartConfig[K]["props"],
) => React.ReactElement;

// Maps the chart slug to the chart component
// e.g. { line: (props: { labels: string[], fullPage?: boolean }) => React.ReactElement, ... }
export type TypeToChartComponent = {
  [K in Type]: ChartComponent<K>;
};

// Builds the actual look up object slug -> component
export const TypeToComp = charts.reduce<TypeToChartComponent>(
  <K extends Type>(acc: TypeToChartComponent, chart: TypeToChartDefinition[K]) => {
    acc[chart.slug as K] = chart.Component as TypeToChartComponent[K];
    return acc;
  },
  {} as TypeToChartComponent,
);
