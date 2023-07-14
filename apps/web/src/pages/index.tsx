import { useRouter } from "next/router";

import { IconEvent } from "@cloud-party/ui";

import { api } from "@/utils/api";
import { NoItemsWithCTA } from "@/components/empty-states";
import DashboardLayout from "@/layouts/dashboard-layout";
import { type NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  const { data: myParties, isLoading } = api.party.allMyParties.useQuery();
  const router = useRouter();

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (!myParties || !myParties?.length) {
    return (
      <NoItemsWithCTA
        ctaLabel="New party"
        icon={<IconEvent className="h-11 w-11 text-gray-400" />}
        message="Get started by creating a new party."
        title="No parties"
        onClickCta={() => void router.push("/party/new")}
      />
    );
  }

  return <div></div>;
};

HomePage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default HomePage;
