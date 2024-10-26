import { Container } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { getLatest } from "../helpers";
import { Type, Static } from "@sinclair/typebox";
import { labelSchema } from "../../labels";

export const slug = "gauge";

export const jsonSchema = Type.Object(
  {
    type: Type.Literal(slug),
    props: Type.Object({
      label: labelSchema,
    }),
  },
  {
    title: "Gauge Schema",
    description: "A schema for a simple gauge component",
  },
);

type GaugeSchema = Static<typeof jsonSchema>;

export function Component({ label }: GaugeSchema["props"]) {
  return (
    <Container>
      <h3>Label: "{label}"</h3>
      <Gauge height={300} value={getLatest(label)} valueMax={5000} />
    </Container>
  );
}
