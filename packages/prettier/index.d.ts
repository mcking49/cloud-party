import { type Config } from "prettier";

export type CloudPartyPrettier = Config & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
