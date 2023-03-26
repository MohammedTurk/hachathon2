import { BalanceCard, Button, Card, NoSsr, Toast } from "components";
import { GeneralLayout } from "layouts";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "types";
import { TransactionsWrapper } from "features/invoices/components/Freelancer/TransactionsWrapper";
import { useToggle } from "hooks";
import { useEffect } from "react";
const InvoicesPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { lastInvoiceId ,type} = router.query;
  const{isOpen:inOpenToast, closeModal:closeModalToast, openModal:openModalToast}= useToggle()
useEffect(()=>{
  if(lastInvoiceId){
    openModalToast()
    setTimeout(()=>{
      closeModalToast()
    },3000)
   }
},[])


  // const handleEditInvoice = () => {
  //   router.push({
  //     pathname: `/invoices/edit-invoice/${lastInvoiceId}`,
  //   });
  // };

  // const handleEditLink = () => {
  //   router.push({
  //     pathname: `/invoices/edit-link/${lastInvoiceId}`,
  //   });
  // };

  return (
    <NoSsr>
      <GeneralLayout rightSide={<BalanceCard />}>
        {/* <Card>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ipsam alias optio, ducimus illo corporis error in perspiciatis id deserunt, est, delectus pariatur voluptatum adipisci qui cupiditate sapiente ab quidem.
        </Card> */}
        <TransactionsWrapper />
        <Toast ToastDescription={`Your ${type} has been created successfully.`} isOpen={inOpenToast} />
    
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
