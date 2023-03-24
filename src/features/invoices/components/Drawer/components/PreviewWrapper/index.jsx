import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Card, IconButton, Modal, Button } from "components";
import Preview from "features/invoices/components/Create&EditInvoices/Preview";
import { useToggle } from "hooks";

export const PreviewWrapper = ({ getValues }) => {
  const {
    isOpen: isOpenInvoices,
    closeModal: closeModalInvoices,
    openModal: openModalInvoices,
  } = useToggle();
  const { isOpen: isShow, toggleModal: toggleIshow } = useToggle();

  return (
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
            <Button
              className="!p-2 flex justify-center gap-1 bg-white text-blue shadow border hover:!bg-gray-100 transition-all"
              onClick={() => console.log("request Download")}
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download
            </Button>
            <IconButton onClick={closeModalInvoices}>
              <XMarkIcon className="h-5 w-5" />
            </IconButton>
          </div>
          <Preview
            className="h-fit max-h-[550px] select-none"
            getValues={getValues}
          />
        </Card>
      </Modal>
    </div>
  );
};

export default PreviewWrapper;
