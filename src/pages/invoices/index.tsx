import { BalanceCard, Button, Card, NoSsr } from "components";
import { GeneralLayout } from "layouts";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "types";

const InvoicesPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { lastInvoiceId} = router.query;
console.log('lastInvoiceId', lastInvoiceId);

  const handleEditInvoice = () => {
    router.push({
      pathname: `/invoices/edit-invoice/${lastInvoiceId}`,
    });
  };
  
  const handleEditLink = () => {
    router.push({
      pathname: `/invoices/edit-link/${lastInvoiceId}`,
    });
  };

  return (
    <NoSsr>
      <GeneralLayout rightSide={<BalanceCard />}>
        <Card>
          <Button onClick={handleEditInvoice} className="mb-5">Go To Edit Invoice</Button>
          <Button onClick={handleEditLink}>Go To Edit Link</Button>

        </Card>
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
