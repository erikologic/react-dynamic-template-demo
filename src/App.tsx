import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';
import { BarChart, Gauge, LineChart, lineElementClasses, PieChart  } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

function SimpleBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}

function SimpleLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}

function StackedAreaChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: uData, label: 'uv', area: true, stack: 'total', showMark: false },
        { data: pData, label: 'pv', area: true, stack: 'total', showMark: false },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
  );
}

function StraightAnglePieChart() {
  return (
    <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          data: [
            {
              label: "pv",
              value: pData[pData.length -1]
            },
            {
              label: "uv",
              value: uData[uData.length -1]
            }
          ],
        },
      ]}
      height={300}
    />
  );
}

const PvGauge = () => 
  <Container>
    <h3>
      Label: "pv"
    </h3>
    <Gauge
      height={300} 
      value={pData[pData.length -1]}
      valueMax={5000}
    />
  </Container>

function App() {
  return (
      <Grid container spacing={2}>
        <Grid size={6}>
          <SimpleBarChart />
        </Grid>
        <Grid size={6}>
          <SimpleLineChart />
        </Grid>
        <Grid size={6}>
          <StackedAreaChart />
        </Grid>
        <Grid size={6}>
          <StraightAnglePieChart />
        </Grid>
        <Grid size={6}>
          <PvGauge />
        </Grid>
      </Grid>
  )
}

export default App;
