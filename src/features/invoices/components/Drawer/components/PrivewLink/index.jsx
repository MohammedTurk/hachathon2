import { Input, Button } from "components";
import { getPrivewLinkSettings } from "features/invoices/utils";

export const PrivewLink = ({ status, id }) => {
  const options = getPrivewLinkSettings(status, id);
  function handleCopyAction() {
    navigator.clipboard.writeText(options.text);
  }
  return (
    <div className="flex gap-2 text-sm">
      <Button
        className=" flex-1 text-gray-600 !text-sm  rounded overflow-hidden text-ellipsis whitespace-nowrap !bg-white border shadow-sm "
        disabled={options?.isDisabled?.copy}
        onClick={handleCopyAction}
      >
        {options?.text}
      </Button>
      <Button
        className=" bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded disabled:!bg-gray-500"
        onClick={handleCopyAction}
        disabled={options?.isDisabled?.copy}
      >
        Copy
      </Button>
    </div>
  );
};

export default PrivewLink;
