export const configuration = [
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
