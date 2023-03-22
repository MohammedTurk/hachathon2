import { BalanceCard, Card,NoSsr } from "components";
import { GeneralLayout } from "layouts";
import type { NextPageWithLayout } from "types";

const InvoicesPage: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <GeneralLayout rightSide={<BalanceCard />}>
       
       
        {/* <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde
          iste cupiditate recusandae, non, delectus necessitatibus fuga est
          dolorum error voluptatem ducimus corporis optio quidem odit adipisci
          perferendis assumenda commodi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt unde iste cupiditate recusandae, non, delectus
          necessitatibus fuga est dolorum error voluptatem ducimus corporis
          optio quidem odit adipisci perferendis assumenda commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt unde iste cupiditate
          recusandae, non, delectus necessitatibus fuga est dolorum error
          voluptatem ducimus corporis optio quidem odit adipisci perferendis
          assumenda commodi!

        </Card>\ */}
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
