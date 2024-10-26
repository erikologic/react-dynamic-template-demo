import { Grid2 as Grid } from "@mui/material";
import {
  ChartComponent,
  Type,
  TypeToChartConfig,
  TypeToComp,
} from "../lib/TypeToComp";
import { getConfig } from "../configuration";

/**
 * Utility function to help tsc track a particular Type to a particular Component
 */
function renderComponent<K extends Type>(
  compProps: TypeToChartConfig[K],
  key: number,
) {
  const Component = TypeToComp[compProps.type] as ChartComponent<K>;
  return (
    <Grid key={key} size={6}>
      <Component {...{ ...compProps.props }} />
    </Grid>
  );
}

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      {getConfig().map((prop, i) => renderComponent(prop, i))}
    </Grid>
  );
}
