import { Container } from "@mui/material";
import { Gauge } from "@mui/x-charts";
import { getLatest } from "./helpers";
import { Type, type Static } from '@sinclair/typebox'

const componentConfig = Type.Object({
    type: Type.Const("gauge"),
    props: Type.Object({
        label: Type.String(),
    }),
})

type ComponentConfig = Static<typeof componentConfig>;


export function SimpleGauge ({label}: ComponentConfig["props"]) {
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
    