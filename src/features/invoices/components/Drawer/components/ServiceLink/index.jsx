import { Button } from "components";

export const ServiceLink = ({ privewLinkoptions }) => {
  function handleCopyAction() {
    navigator.clipboard.writeText(privewLinkoptions.text);
  }
  return (
    <div className="flex gap-2 text-sm">
      <Button
        className=" flex-1 text-gray-600 !text-sm  rounded overflow-hidden text-ellipsis whitespace-nowrap !bg-white border shadow-sm "
        disabled={privewLinkoptions?.isDisabled?.copy}
        onClick={handleCopyAction}
      >
        {privewLinkoptions?.text}
      </Button>
      <Button
        className=" bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded disabled:!bg-gray-500"
        onClick={handleCopyAction}
        disabled={privewLinkoptions?.isDisabled?.copy}
      >
        Copy
      </Button>
    </div>
  );
};

export default ServiceLink;
