import { data } from "../data";

export const getLatest = (label: string) => data[label][data[label].length - 1];
