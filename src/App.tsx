import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';
import { BarChart, Gauge, LineChart, lineElementClasses, PieChart  } from '@mui/x-charts';
import { LabelProps, LabelsProps } from './type';

const data: Record<string, any> = {
  uv: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
  pv: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
  amt: [2400, 2210, 0, 2000, 2181, 2500, 2100],
  xLabels: [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ]
}

function SimpleBarChart({labels}: LabelsProps) {
  return (
    <BarChart
      height={300}
      series={labels.map((label) => ({label, data: data[label]}))}
      xAxis={[{ data: data.xLabels, scaleType: 'band' }]}
    />
  );
}


function SimpleLineChart({labels}: LabelsProps) {
  return (
    <LineChart
      height={300}
      series={labels.map((label) => ({label, data: data[label]}))}
      xAxis={[{ data: data.xLabels, scaleType: 'point' }]}
    />
  );
}

function StackedAreaChart({labels}: LabelsProps) {
  return (
    <LineChart
      height={300}
      series={labels.map((label) => ({label, data: data[label], area: true, stack: 'total', showMark: false }))}
      xAxis={[{ data: data.xLabels, scaleType: 'point' }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
  );
}

const getLatest = (label: string) => data[label][data[label].length -1]

function StraightAnglePieChart({labels}: LabelsProps) {
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
      height={300}
    />
  );
}

const SimpleGauge = ({label}: LabelProps) => 
  <Container>
    <h3>
      Label: "{label}"
    </h3>
    <Gauge
      height={300} 
      value={getLatest(label)}
      valueMax={5000}
    />
  </Container>

function App() {
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

export default App;
