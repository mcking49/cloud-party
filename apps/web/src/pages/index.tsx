import { type NextPage } from "next";

import { Button } from "@cloud-party/ui";

const Web: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-slate-600">
      <h1 className="text-9xl font-bold">Web</h1>
      <Button
        logger="testing this thing"
        className="my-test-class font-thin uppercase"
      >
        Lets go world
      </Button>
    </div>
  );
};

export default Web;
