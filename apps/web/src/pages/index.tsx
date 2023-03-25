import { type NextPage } from "next";
import { useFlags } from "flagsmith/react";

import { Button } from "@cloud-party/ui";

const Web: NextPage = () => {
  const flags = useFlags(["proof_of_concept"]);

  const { enabled: proofOfConceptEnabled, value: flagValue } =
    flags.proof_of_concept;

  return (
    <div className="h-screen w-screen bg-slate-600">
      <h1 className="text-9xl font-bold">Web</h1>
      {proofOfConceptEnabled && (
        <>
          <Button className="my-test-class font-thin uppercase">
            Lets go world
          </Button>
          <code>{flagValue}</code>
        </>
      )}
    </div>
  );
};

export default Web;
