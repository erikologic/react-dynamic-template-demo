import { Grid2 as Grid } from "@mui/material";
import { configuration } from "../configuration";
import { TypeToComp } from "../lib/TypeToComp";

function renderComponent(compProps: any, key: number) {
  const type = compProps.type;
  // @ts-ignore
  const Component = TypeToComp[type];
  return (
    <Grid size={6}>
      <Component key={key} {...{...compProps.props}} />
    </Grid>
  )

}

export default function Dashboard() {
  return (
      <Grid container spacing={2}>
        {configuration.map((prop, i) => renderComponent(prop, i))}
      </Grid>
  )
}
