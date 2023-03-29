import { useFlags as useFlagsmithFlags } from "flagsmith/react";

export const FEATURE_FLAGS = [
  "profile",
  "proof_of_concept",
  "sign_up",
] as const;

export type FeatureFlag = (typeof FEATURE_FLAGS)[number];

export const useFeatureFlag = (flag: FeatureFlag) => {
  const featureflagsmithFeatureflags = useFlagsmithFlags(FEATURE_FLAGS);

  return featureflagsmithFeatureflags[flag];
};
