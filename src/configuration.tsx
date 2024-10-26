import { Static } from "@sinclair/typebox";
import { jsonSchema } from "./jsonSchema";
import { Label } from "./labels";

type Config = Static<typeof jsonSchema>;

const defaultConf: Config = [
  {
    type: "bar",
    props: {
      labels: [Label.pv, Label.uv],
    },
  },
  {
    type: "line",
    props: {
      labels: [Label.pv, Label.amt],
    },
  },
  {
    type: "area",
    props: {
      labels: [Label.amt, Label.uv],
    },
  },
  {
    type: "pie",
    props: {
      labels: [Label.pv, Label.uv, Label.amt],
    },
  },
  {
    type: "gauge",
    props: {
      label: Label.pv,
    },
  },
  {
    type: "gauge",
    props: {
      label: Label.uv,
    },
  },
  {
    type: "gauge",
    props: {
      label: Label.amt,
    },
  },
];

export const getConfig = (): Config => {
  const localConfig = localStorage.getItem("dashboardConfig");
  return localConfig ? JSON.parse(localConfig) : defaultConf;
};

export const setConfig = (config?: Config) => {
  localStorage.setItem(
    "dashboardConfig",
    JSON.stringify(config || defaultConf),
  );
};
