import { useState } from "react";

export const useToggle = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function toggleModal() {
    setIsOpen((prev)=>!prev)
  }

  return { isOpen, closeModal, openModal,toggleModal };
};
export default useToggle;
