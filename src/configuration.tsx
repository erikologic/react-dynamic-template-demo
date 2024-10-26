const defaultConf = [
  {
    type: "bar",
    props: {
      labels: ["pv", "uv"],
    },
  },
  {
    type: "line",
    props: {
      labels: ["pv", "amt"],
    },
  },
  {
    type: "area",
    props: {
      labels: ["amt", "uv"],
    },
  },
  {
    type: "pie",
    props: {
      labels: ["pv", "uv", "amt"],
    },
  },
  {
    type: "gauge",
    props: {
      label: "pv",
    },
  },
  {
    type: "gauge",
    props: {
      label: "uv",
    },
  },
  {
    type: "gauge",
    props: {
      label: "amt",
    },
  },
];

export const getConfig = (): typeof defaultConf => {
  const localConfig = localStorage.getItem("dashboardConfig");
  return localConfig ? JSON.parse(localConfig) : defaultConf;
};

export const setConfig = (config?: typeof defaultConf) => {
  localStorage.setItem(
    "dashboardConfig",
    JSON.stringify(config || defaultConf),
  );
};
