import DashboardLayout from "@/layouts/dashboard-layout";
import { type NextPageWithLayout } from "./_app";

const Web: NextPageWithLayout = () => {
  return <div></div>;
};

Web.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Web;
