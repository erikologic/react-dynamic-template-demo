import { Container } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { LabelProps } from "../type";
import { getLatest } from "./helpers";

export default function SimpleGauge ({label}: LabelProps) {
    return <Container>
        <h3>
        Label: "{label}"
        </h3>
        <Gauge
        height={300} 
        value={getLatest(label)}
        valueMax={5000}
        />
    </Container>
}
    