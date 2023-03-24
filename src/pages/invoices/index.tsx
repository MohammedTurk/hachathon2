// import { Invoices } from "features/invoices";
import { NoSsr } from "components";
import { GeneralLayout } from "layouts";
import type { NextPageWithLayout } from "types";
import { BalanceCard } from "components";
import { InvoicesTable } from "features/invoices";
const InvoicesPage: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <GeneralLayout rightSide={<BalanceCard />}>
      <InvoicesTable />
      </GeneralLayout>{" "}
    </NoSsr>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Invoices",
  pageDescription: "Invoices page description",
 contentClassName: "!block !p-2 !pr-4",
  
};

export default InvoicesPage;
