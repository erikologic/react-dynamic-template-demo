import { Grid2 as Grid } from "@mui/material";
import { TypeToComp } from "../lib/TypeToComp";
import { getConfig } from "../configuration";

function renderComponent(compProps: any, key: number) {
  const type = compProps.type;
  // @ts-ignore
  const Component = TypeToComp[type];
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
