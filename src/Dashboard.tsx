import { Grid2 as Grid } from "@mui/material";
import { SimpleBarChart } from "./lib/SimpleBarChart";
import {SimpleGauge} from "./lib/SimpleGauge";
import {SimpleLineChart} from "./lib/SimpleLineChart";
import {StackedAreaChart} from "./lib/StackedAreaChart";
import {StraightAnglePieChart} from "./lib/StraightAnglePieChart";

const props = [
  {
    type: "bar",
    props: {
      labels: ["pv", "uv"]
    }
  },
  {
    type: "line",
    props: {
      labels: ["pv", "amt"]
    }
  },
  {
    type: "area",
    props: {
      labels: ["amt", "uv"]
    }
  },
  {
    type: "pie",
    props: {
      labels: ["pv", "uv", "amt"]
    }
  },
  {
    type: "gauge",
    props: {
      label: "pv"
    }
  },
  {
    type: "gauge",
    props: {
      label: "uv"
    }
  },
  {
    type: "gauge",
    props: {
      label: "amt"
    }
  },
];


const TypeToComp = {
  gauge: SimpleGauge,
  bar: SimpleBarChart,
  line: SimpleLineChart,
  area: StackedAreaChart,
  pie: StraightAnglePieChart
};

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
        {props.map((prop, i) => renderComponent(prop, i))}
      </Grid>
  )
}
