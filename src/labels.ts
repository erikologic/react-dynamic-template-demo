import { Type } from "@sinclair/typebox";

export enum Label {
  pv = "pv",
  uv = "uv",
  amt = "amt",
}

export const labelSchema = Type.Enum(Label, { title: "Label" });
// This for RSJF to treat it a a select element
labelSchema.type = "string";
