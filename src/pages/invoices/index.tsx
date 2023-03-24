// import { Invoices } from "features/invoices";
import { NoSsr } from "components";
import { GeneralLayout } from "layouts";
import type { NextPageWithLayout } from "types";
import { BalanceCard } from "components";
import { InvoicesTable } from "features/invoices";
import { TransactionsWrapper } from "features/invoices/components/Freelancer/TransactionsWrapper";
const InvoicesPage: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <GeneralLayout rightSide={<BalanceCard />}>
      <TransactionsWrapper />
      </GeneralLayout> 
    </NoSsr>
  );
};

InvoicesPage.mainLayoutProps = {
  title: "Invoices",
  pageDescription: "Invoices page description",
 contentClassName: "!block !p-2 !pr-4",
  
};

export default InvoicesPage;
