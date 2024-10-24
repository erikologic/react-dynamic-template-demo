import { Grid2 as Grid } from "@mui/material";
import { SimpleBarChart } from "./lib/SimpleBarChart";
import SimpleGauge from "./lib/SimpleGauge";
import SimpleLineChart from "./lib/SimpleLineChart";
import StackedAreaChart from "./lib/StackedAreaChart";
import StraightAnglePieChart from "./lib/StraightAnglePieChart";

export default function Dashboard() {
  return (
      <Grid container spacing={2}>
        <Grid size={6}>
          <SimpleBarChart labels={["pv", "uv"]}/>
        </Grid>
        <Grid size={6}>
          <SimpleLineChart labels={["pv", "amt"]} />
        </Grid>
        <Grid size={6}>
          <StackedAreaChart labels={["amt", "uv"]} />
        </Grid>
        <Grid size={6}>
          <StraightAnglePieChart labels={["pv", "uv", "amt"]} />
        </Grid>
        <Grid size={6}>
          <SimpleGauge label="pv"/>
        </Grid>
        <Grid size={6}>
          <SimpleGauge label="uv"/>
        </Grid>
        <Grid size={6}>
          <SimpleGauge label="amt"/>
        </Grid>
      </Grid>
  )
}
