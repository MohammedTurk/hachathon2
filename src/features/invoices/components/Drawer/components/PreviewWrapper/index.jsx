import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Card, IconButton, Modal, Button, NoSsr } from "components";
import Preview from "features/invoices/components/Create&EditInvoices/Preview";
import { useToggle } from "hooks";
import { PDFPreview } from "../../components";

export const PreviewWrapper = ({ getValues }) => {
  const {
    isOpen: isOpenInvoices,
    closeModal: closeModalInvoices,
    openModal: openModalInvoices,
  } = useToggle();
  const { isOpen: isShow, toggleModal: toggleIshow } = useToggle(true);

  const file = <PDFPreview getValues={getValues} />;

  return (
    <NoSsr>
      <div>
        {getValues() && isShow && (
          <Preview
            className="transition-all overflow-hidden  !text-xs !h-fit !p-4 mb-0 select-none hover:cursor-zoom-in "
            getValues={getValues}
            onClick={openModalInvoices}
          />
        )}
        <Button
          className="bg-transparent text-blue-500 w-fit hover:!bg-transparent !p-2"
          onClick={toggleIshow}
        >
          {isShow ? "Hide Invoice" : "Show Invoices"}
        </Button>

        <Modal
          className="rounded-sm"
          isOpen={isOpenInvoices}
          closeModal={closeModalInvoices}
        >
          <Card className="flex flex-col gap-2">
            <div className="flex justify-end items-center gap-4">
              <div className="flex justify-end items-center gap-4">
                <Button
                  className="!p-2  bg-white text-blue shadow border hover:!bg-gray-100 transition-all"
                  onClick={() => console.log("request Download")}
                >
                  <PDFDownloadLink document={file} fileName="invoice.pdf">
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        "Loading document..."
                      ) : (
                        <p className="flex justify-center gap-1">
                          <ArrowDownTrayIcon className="h-5 w-5" />
                          Download
                        </p>
                      )
                    }
                  </PDFDownloadLink>
                </Button>
                <IconButton onClick={closeModalInvoices}>
                  <XMarkIcon className="h-5 w-5" />
                </IconButton>
              </div>
            </div>
            <Preview
              className="h-fit max-h-[550px] select-none"
              getValues={getValues}
            />
          </Card>
        </Modal>
      </div>
    </NoSsr>
  );
};

export default PreviewWrapper;
