import DashboardLayout from "@/layouts/dashboard-layout";
import { type NextPageWithLayout } from "@/pages/_app";

const NewPartyPage: NextPageWithLayout = () => {
  return <div>New party page</div>;
};

NewPartyPage.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NewPartyPage;
