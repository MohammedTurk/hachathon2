import React from "react";

import { IconButton, Modal, Card } from "components";
import { XMarkIcon } from "@heroicons/react/20/solid";

export const RequestMessage = ({
  isOpen,
  closeModal,
  children,
  className = "",
  message = "",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={`w-fit rounded-md ${className} `}
    >
      <Card className="w-[300px] relative pt-8 pr-6">
        <IconButton onClick={closeModal} className="absolute top-3 right-2 p-0">
          <XMarkIcon />
        </IconButton>

        <p>Are you sure you want to {message}</p>

        {children}
      </Card>
    </Modal>
  );
};

export default RequestMessage;
