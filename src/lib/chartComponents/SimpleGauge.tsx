import { Container } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { getLatest } from "../helpers";
import { Type, Static } from "@sinclair/typebox";

export const gaugeSchema = Type.Object({
  type: Type.Const("gauge"),
  props: Type.Object({
    label: Type.String(),
  }),
});

type GaugeSchema = Static<typeof gaugeSchema>;

export function SimpleGauge({ label }: GaugeSchema["props"]) {
  return (
    <Container>
      <h3>Label: "{label}"</h3>
      <Gauge height={300} value={getLatest(label)} valueMax={5000} />
    </Container>
  );
}
