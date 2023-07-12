import { api } from "@/utils/api";
import DashboardLayout from "@/layouts/dashboard-layout";
import { type NextPageWithLayout } from "./_app";

const Web: NextPageWithLayout = () => {
  const { data: myParties, isLoading } = api.party.allMyParties.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (!myParties || !myParties?.length) {
    return <div>No parties found. Create one</div>;
  }

  return <div></div>;
};

Web.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Web;
